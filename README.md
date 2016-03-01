# README #

Simple ES7 based bootstrap (no frameworks etc, just build/render ability, restart node)

### Run ###

* `npm install`
* `gulp run`
* go to the <http://localhost:4000>

### Demo ###

This repository contains simple demo to check babel, HMR and node.js reload. Uncomment 'import' in index.js

### Suggested usage ###

`git clone THIS_REPO_URL -o bootstrap -b master --single-branch YOUR_APP_NAME`

Add your own remote and you will be able to merge from bootstrap remote.

### Working parts ###

* Backend restart
* Webpack rebuild (with babel etc)
* Frontend partial reload (HMR)

### Todo ###

* Linters (on commit?) for js/node, css
* Sprite operations
* Create build for deployment.
