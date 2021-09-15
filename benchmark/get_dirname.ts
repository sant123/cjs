import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.107.0/path/mod.ts";

import { getDirname } from "../mod.ts";

const loops = 1000;

export function testURL(): void {
  console.time("URL");

  for (let i = 0; i < loops; i++) {
    new URL(".", import.meta.url);
  }

  const __url = new URL(".", import.meta.url);
  console.log(__url.pathname);

  console.timeEnd("URL");
  console.log();
}

export function testPathSTD(): void {
  console.time("STD");

  for (let i = 0; i < loops; i++) {
    dirname(fromFileUrl(import.meta.url));
  }

  const __dirname = dirname(fromFileUrl(import.meta.url));
  console.log(__dirname);

  console.timeEnd("STD");
  console.log();
}

export const testCJS = () => {
  console.time("CJS");

  for (let i = 0; i < loops; i++) {
    getDirname(import.meta.url);
  }

  const __dirname = getDirname(import.meta.url);
  console.log(__dirname);

  console.timeEnd("CJS");
  console.log();
};
