# File Upload with Multer and Cloudinary

More often than not, we need to allow users to upload files. Whether is an image or a pdf, a video or an audio file, the process is quite the same:

- A request with the files is send to the API
- The file or files are put together
- You save the file somewhere in a file system
- You save a reference to the location of that file in a database or otherwise send it back to the client
- If you are wondering if you can save raw data in a database the answer is yes but that’s very expensive and impractical, a file hosting solution will always be preferred.

Back to file processing, working with raw data is tedious, luckily, we have a fantastic middleware at out disposal called [Multer](https://github.com/expressjs/multer#readme). Multer adds a `body` object and a `file` or `files` object to the `request` object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

## Goal

Currently this fullstack application allows a user to update their profile, but they can only use an image URL for their profile picture. Your task is to update both the `frontend` and the `backend` to allow for image upload. You will use [Multer](https://github.com/expressjs/multer#readme) to process the file, and [Cloudinary](https://cloudinary.com/documentation/node_integration) to host the file, and give you a URL that you can save in your database.

## Getting started - Backend

1. Once you have cloned the repo, into the `backend` directory and run `npm i` to install the dependencies
2. Rename `.example.env` to `.env` and add your MongoDB connection string from Mongo Compass
3. Run `npm run dev` to start the development server
4. Take some time to familiarize yourself with the app, and test the endpoints

## Getting started - Frontend

1. Open up a second terminal, and `cd` into the `frontend` directory and run `npm i` to install the dependencies
2. Rename `.env.local.example` to `.env.local`
3. Run `npm run dev` to start the development server (make sure your backend server is also running)
4. Take some time to familiarize yourself with the app, and try updating a user via the form (you will have to add the `id` of a currently existing user)

# Project Requirements

## Backend

### Multer file upload middleware

- Create a middleware the implements Multer to manage the file upload, and add it to the `users/:id` `PUT` endpoint
  - Upload for a single file
  - Set a file filter in multer to only allow images
  - Set a max file size in multer to limit the size in incoming files
  - Set a custom name for your files
- Save the file in memory, so it can then by process by Cloudinary

### Cloudinary cloud storage middleware

- Sign up for a free account on [Cloudinary](https://cloudinary.com/users/register_free)
- Create a middleware that implements Cloudinary to process the `req.file` that was added by Multer
  - Throw an error if no `file` property is found on the request object
- Add the resulting `secure_url` as an `image` property on the `body`

Your resulting `userRouter` could look something like this in the end

```js
userRouter
  .route('/:id')
  .get(getUserById)
  .put(fileUploader.single('image'), cloudUploader, validateBody(userSchema), updateUser)
  .delete(deleteUser);
```

- Test your endpoint via Postman (make sure to select `form-data` instead of `raw JSON` once you start using Multer)

No other changes to the backend directory are necessary, if file upload has been implemented properly, it will still pass Zod validation checks (though you can comment it out while testing)

## Frontend

Once you have verified your endpoint is working as intended with Multer and Cloudinary, refactor the frontend to work with file upload

- Replace the `image` text input with a `file` input (make sure that it's name is still `image`)
- Update the `handleChange` function
  - Set the preview image based on the upload file rather than a string. The [createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static) method may be of interest
  - inside of `setForm` conditionally check if the `e.target.type === 'file'`, and set the `image` to the first file (see the [docs](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#accessing_selected_files) for some help)
- Update `handleSubmit`
  - Create a `FormData` object and pass that to `updateUser` instead of the raw state (hint: the [FormData constructor](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) can take an HTML form element as an argument - the target of a `submit` event is a form)
- update the `updateUser` function
  - since we are sending `FormData` in the body, remove the `JSON` headers, and do not `stringify` the body
