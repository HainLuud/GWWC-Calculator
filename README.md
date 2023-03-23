# Development Setup

1. In the project's root folder run the command: `npm install` (requires having installed node.js)
2. In a new terminal run `node_modules/.bin/esbuild --outfile=static/scripts/main.js --bundle static/scripts/main.ts --serve --servedir=. --watch`(otherwise we get CORS errors)

This tells *esbuild* to watch the file system and automatically rebuild (checks the correctness of the Typescript (finds errors), generates a Javascript file from the Typescript code and also includes all the necessary functions from the used libraries too) and also hosts the app in a local web server.
