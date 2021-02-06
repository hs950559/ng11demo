
# Setup

```
npm i
npm start
```

## Build & Deploy

```
npm install -g angular-cli-ghpages
ng build --prod --base-href "https://hs950559.github.io/ng11demo/"
ngh --dir=dist/ng11demo --message="My First deploy"

All done!
https://hs950559.github.io/ng11demo/
```

## Feature

1. Real world application architucture
2. Loader
3. NnRx CRUD with action, reducer, effects & selectors (posts)
4. NgRx CRUD - with NgRx data (comments)
5. Lazy loaded modules
6. Deployed on github pages
  