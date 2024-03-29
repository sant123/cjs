# cjs [![Deno](https://github.com/sant123/cjs/actions/workflows/deno.yml/badge.svg)](https://github.com/sant123/cjs/actions/workflows/deno.yml)

Create variables like `__dirname` and `__filename` in Deno. Their behavior is
the same as Node.js variables.

## Usage

```ts
// example.ts
import { getDirname, getFilename } from "https://deno.land/x/cjs/mod.ts";

const __dirname = getDirname(import.meta.url);
const __filename = getFilename(import.meta.url);

// Your code here...
```

## API

### getDirname(importMetaUrl: string): string

Returns the directory of the current module.

### getFilename(importMetaUrl: string): string

Returns the filename of the current module.

## Node.js support

This should work with the
[stable](https://nodejs.org/dist/latest-v15.x/docs/api/esm.html#esm_modules_ecmascript_modules)
Ecmascript modules implementation of Node.js. See this
[link](https://nodejs.org/dist/latest-v15.x/docs/api/esm.html#esm_no_filename_or_dirname)
for more information.

## Testing

This library is highly tested to provide the same variables behavior of Node.js.
If you see something is missing or ¿did you find a bug? pull requests are really
welcome.

## Benchmark

Tested with Deno v1.24.0:

![](benchmark/get_dirname.png)
