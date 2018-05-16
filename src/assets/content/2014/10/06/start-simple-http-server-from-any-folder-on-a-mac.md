Here’s a simple command that will startup an HTTP server from any given folder on a Mac. Open Terminal, `cd` to change to the directory you wish to serve files from, and then execute the following command.

`python -m SimpleHTTPServer 8000`

This can be very handy for web development on a Mac; especially when using the Google Chrome web browser, which doesn’t allow you to run JavaScript from your filesystem. Even if you bypass Chrome’s restriction by starting it with the `–allow-file-access-from-files` parameter, there can be cases where a web server is still desired. For example, when using Cross-Origin Resource Sharing (CORS) for cross-domain Ajax, the browser needs to report its origin with an HTTP request. When served by the web server, Origin will report `http://localhost:8000` rather than `null` or `file://`.

 

