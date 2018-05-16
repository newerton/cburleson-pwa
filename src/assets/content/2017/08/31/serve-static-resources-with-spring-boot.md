To automatically serve static resources with Spring Boot (e.g. when using spring-boot-starter-web), you can simply place the static resources in one of several paths that Spring Boot automatically recognizes as a static file paths.

Following are paths that will are recognized as static file paths:

- `src/main/resources/META-INF/resources/index.html`
- `src/main/resources/resources/index.html`
- `src/main/resources/static/index.html`
- `src/main/resources/public/index.html`

You can then access the resources at:

So, for example, given the following resource at the following location...

`src/main/resources/static/css/bootstrap.min.css`

You could fetch the file with the following URL:

`http://<host>/css/bootstrap.min.css`

