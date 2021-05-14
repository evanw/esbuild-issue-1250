// this is usually resolved to `dist/index.js` (see below, pkg-b/package.json -> main)
// however, in a monorepo, these files are not always built, or if they are, are likely out of date.

// the project reference above tells TypeScript to look at the tsconfig.json of `pkg-b/`,
// and seamlessly build or update the built files if they are out of date

import { x } from "pkg-b";

console.log(x);
