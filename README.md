Pegasus
=======

> Things are happening!

Useful Commands
---------------

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test

# lint all JS/Vue component files in `src/`
npm run lint
```

Release Steps
-------------

1. Switch to the `master` branch
2. Bump the version as needed in the `package.json`
3. Create a **DRAFT** release on GitHub using `v` + version in 2. as the "Tag Version"
4. `git add`, `git commit` and then `git push origin master`
5. When satisfied with the result, publish the Release on GitHub
