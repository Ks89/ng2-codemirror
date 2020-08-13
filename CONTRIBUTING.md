# How to build and try this project
1. `npm run build:lib`
2. `npm start`

<br>

# Only for the author @Ks89 - How to publish this on npm?

## Stable releases (@latest)
1. `cd projects/ks89/ngx-codemirror`
2. `npm version patch` (x.x.1) or `npm version minor` (x.1.0) or `npm version major` (5.x.x)
3. `cd ../..`
4. `npm run clean`
5. `npm run build:lib`
6. `npm publish @ks89/ngx-codemirror`
7. `git push origin master`
8. `git push origin vx.x.x`  <-- tag name created by npm version (for instance v5.0.1)

## Beta and RC releases (@beta)
1. `cd projects/ks89/ngx-codemirror`
2. Manually change the version of `./libs/ngx-codemirror/package.json` with either this format `x.x.x-beta.x` or `x.x.x-rc.x` (also respect semver!)
3. `cd ../..`
4. `npm run clean`
5. `npm run build:lib`
6. `npm publish @ks89/ngx-codemirror --tag beta`

## Alpha releases (@next)
1. `cd projects/ks89/ngx-codemirror`
2. Manually change the version of `./libs/ngx-codemirror/package.json` with this format `x.x.x-alpha.x` (also respect semver!)
3. `cd ../..`
4. `npm run clean`
5. `npm run build:lib`
6. `npm publish @ks89/ngx-codemirror --tag next`
