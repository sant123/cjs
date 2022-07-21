import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.149.0/path/mod.ts";

import { getDirname } from "../mod.ts";

Deno.bench({
  name: "cjs",
  group: "dirname",
  baseline: true,
  fn() {
    getDirname(import.meta.url);
  },
});

Deno.bench({
  name: "std",
  group: "dirname",
  fn() {
    dirname(fromFileUrl(import.meta.url));
  },
});

Deno.bench({
  name: "url",
  group: "dirname",
  fn() {
    new URL(".", import.meta.url);
  },
});

Deno.bench({
  name: "resolve",
  group: "dirname",
  fn() {
    import.meta.resolve("./");
  },
});
