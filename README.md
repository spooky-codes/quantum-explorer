# Visual quantum circuits explorer


## Introduction

This Typescript project implements a visual editor for quantum circuits. This editor is executed in an embedded Chromium inside VScode extension or IntelliJ plugins.

This documentation is embryonic and will be improved in the near future.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Create a new library

To build a new (Typescript) library that can then be published as a NPM package, use:

`$ nx g @nrwl/js:lib new-lib --bundler=rollup --importPath=@spooky/new-lib --tags='tag1 tag2' --publishable`

where flags are:

- `bundle`: the bundler to use for generating the library (in this case "rollup" for a publishable library)
- `importPath`: the name for importing the library in a project's `package.json` file
- `publishable`: setup basic config for the publishing of the library's NPM package
- `tags`: NPM tags for reference
- `unitTestRunner`: Test runner to use for unit tests (like Jest)
