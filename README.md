## Test case for esbuild issue 1250

Specifically: https://github.com/evanw/esbuild/issues/1250#issuecomment-833632138. I tried this test case with all major bundlers, but none of them can resolve `pkg-b`:

```
$ npm ci

$ npm run esbuild
 > pkg-a/hello.ts:7:18: error: Could not resolve "pkg-b" (mark it as external to exclude it from the bundle)
    7 │ import { x } from "pkg-b";
      ╵                   ~~~~~~~

$ npm run parcel
@parcel/core: Failed to resolve 'pkg-b' from './pkg-a/hello.ts'
./pkg-a/hello.ts:7:19
  6 |
> 7 | import { x } from "pkg-b";
>   |                   ^^^^^^^

$ npm run webpack
ERROR in ./pkg-a/hello.ts
./pkg-a/hello.ts 7:18-25
[tsl] ERROR in ./pkg-a/hello.ts(7,19)
      TS2307: Cannot find module 'pkg-b' or its corresponding type declarations.
ts-loader-default_e3b0c44298fc1c14

$ npm run rollup
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
pkg-b (imported by pkg-a/hello.ts)
```
