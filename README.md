# cjs ![Deno](https://github.com/sant123/cjs-vars/workflows/Deno/badge.svg)

Create variables like `__dirname` and `__filename` in Deno. Their behavior is the same as Node.js variables.

## Usage

```ts
// example.ts
import { getDirname, getFilename } from 'https://deno.land/x/cjs/mod.ts';

const __dirname = getDirname(import.meta.url);
const __filename = getFilename(import.meta.url);

// Your code here...
```

## API

### getDirname(importMetaUrl: string): string

The directory name of the current module.

### getFilename(importMetaUrl: string): string

The file name of the current module. This is the current module file's absolute path.

## Node.js support

This should work with the [stable](https://nodejs.org/dist/latest-v15.x/docs/api/esm.html#esm_modules_ecmascript_modules) Ecmascript modules implementation of Node.js. See this [link](https://nodejs.org/dist/latest-v15.x/docs/api/esm.html#esm_no_filename_or_dirname) for more information.

## Testing

This library is highly tested to provide the same variables behavior of Node.js. If you see something is missing or ¿did you find a bug? pull requests are really welcome.
