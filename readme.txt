
/********************************************************************
 *                                                                  *
 *                                                                  *
 *                                                                  *
 *                       M6 Landing Page                            *
 *                                                                  *
 *                                                                  *
 *                                                                  *
 ********************************************************************



 This is a vertical-scrolling single-page website to serve as a landing page. 
 it is composed of 1 index banner, an "About us"
 section, a "How it works" section, a comments section, a banner at the bottom
 of the page, and a footer with fb and twitter share buttons.

 To start working on this project, node.js and npm have to be installed on the
 dev machine.

 The first step to deploy this site is to download all its dependencies,
 to do so, please open a terminal, cd/to/the/project/folder and execute
 "npm install", the npm package manager will download all the project's
 dependencies.

 After downloading the site's dependencies, the next step is to create the
 site's bundle, this project uses gulp as a way of streamlining this process
 all you have to do is execute "gulp" in the project folder and you're good to
 go.

 Bundled with this site, it is a very small app server implemented using
 expressjs, it runs through port 80 and serves static files through a /public
 folder

 To start everything just do "node server.js" and then open a browser to the
 localhost:8080/  the site should be there :).

 This project uses pug as its view engine, materialize-css as its ui framework
 and jquery, it is possible to port it to react using react-materialize or
 Material-UI

 The devDependencies include babelify, browserify, browserify-shim (to bundle
 materialize), and to automate the build tasks, it uses gulp and its sass,
 clean css (for css minification), rename, uglify (for js minification),
 vinyl-source-stream and vinyl-buffer to interface everything together.

 Regarding the structure of this project, you can find the css and js code on
 the respectively named folders, the main pug file on the views folder and all
 the static files on the assets folder.
