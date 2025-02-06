# HTTP Requests

## Points to cover

-   Fetch options
-   Authentication/Authorization
-   -   Signing in and saving a token
-   -   Protecting routes

#### Let's see what this would look like in the frontend now

## Tour of the app

-   This is modified from our `useOutletContext-example`

### App.jsx

-   I added `SignIn`, `Register` `NotFound` pages. The \* for the `NotFound` path acts as a wildcard, so basically anything that isn't a defined path will use that
-   Show what the pages look like
    -   Sign In button is now a Link to signin page

## Sign in In from the frontend

-   We tested our endpoint in Postman, now let's write a function to deal with it in our app
-   In our `data` folder, let's make a new `auth.js` file, for our functions related to authentication

### Options object in fetch

-   With GET requests, we can usually get away with just passing the URL endpoint to fetch, but it has an optional second argument
-   This second argument is an object for configuring your request, you saw this when working with TMDB
-   It allows us to specify the HTTP method, and add info to the body, add headers, and more.

```js
const BASE_URL = 'https://duckpond-89zn.onrender.com/auth';

const signIn = async (formData) => {
    const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

    const data = await res.json();
    // console.log(data);

    return data;
};

export { signIn };
```

-   Now we import it to our SignIn page, and use it in our submit handler

```js
import { signIn } from '../data/auth';
// other stuff...
```
