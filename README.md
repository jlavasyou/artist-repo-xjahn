## What's this?

This is the base repo for an artist website created by the Layerr platform. This repo contains the code that is shared amongst all websites deployed by Layerr before the artists customizes their project through the Layerr App. This repo contains template files that end with .tmpl that will be rendered into the artist specifics with a technology called [gomplate](https://docs.gomplate.ca/). 

## When/Where?

After the artist presses publish on the Layerr App, a Netlify background function that also lives in the Layerr Artist App will be called. This function will `git pull` this base-repo repository, create a branch, and then run a shell script that will pass all files with .tmpl AND the project specifics that have been customized by an artist (stored in project.json) to a gomplate command, that will output the rendered file in place of the template file

After the repository templates get rendered with the artist changes, this repo will be ready for [hugo](gohugo.io) to be run on it, and then deployed via Netlify.


## Templatized Files
The current files that will be rendered from templates are: 
  - index.html.tmpl
  - index.js.tmpl
