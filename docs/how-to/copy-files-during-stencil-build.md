# Copy files during Stencil build 

To copy files from one place to another during the Stencil build process, use the
`stencil.config.js` file and configure as such:

```
copy: [
  { src: './lifetime' },
  {
    src: '../node_modules/bootstrap/dist/css/bootstrap.min.css',
    dest: '../www/assets/css/bootstrap.min.css'
  },
  {
    src: '../node_modules/jquery/jquery.min.js',
    dest: '../www/assets/js/jquery.min.js'
  },
  {
    src: '../node_modules/bootstrap/dist/js/bootstrap.min.js',
    dest: '../www/assets/js/bootstrap.min.js'
  },
  {
    src: '../node_modules/popper.js/dist/popper.min.js',
    dest: '../www/assets/js/popper.min.js'
  }
]
```
