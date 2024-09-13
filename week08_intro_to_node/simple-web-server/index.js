import http from 'http';
import { createFileWithMessage, deleteFileByName } from './fileFunctions.js';
const url1 = '/files/date/time.txt';
const url2 = '/files/2024-07-15/13:44:25.txt';
const url3 = '/files/something/else';
/* 
matches the characters `/files/` followed by 2 segments separated by / 
where numbers, lowercase and uppercase characters are allowed, for the first segment - is allowed
for the second segment : is allowed. The string should end in .txt 
*/
// console.log(regex.test(url1)); // Expected output: true
// console.log(regex.test(url2)); // Expected output: true
// console.log(regex.test(url3)); // Expected output: false

const requestHandler = (req, res) => {
    const regex = /^\/files\/[a-zA-Z0-9-]+\/[a-zA-Z0-9:]+\.txt$/;
    const { method, url } = req;
    if (url === '/files') {
        if (method === 'POST') {
            let body = '';
            // The body of the request is received in chunks
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            // Once all the data is collected
            req.on('end', () => {
                createFileWithMessage(body);

                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                    JSON.stringify({ msg: 'File created', content: body })
                );
            });
            return console.log('File created.');
        }
        return console.log('Invalid method');
    }
    if (regex.test(url)) {
        if (method === 'GET') {
            return console.log(`GET request on ${url}`);
        }
        if (method === 'PUT') {
            return console.log(`PUT request on ${url}`);
        }
        if (method === 'DELETE') {
            return console.log(`DELETE request on ${url}`);
        }
        return console.log('Invalid method');
    }
    return console.log('Invalid request');
};

const server = http.createServer(requestHandler);

const port = 3000;

server.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
);
