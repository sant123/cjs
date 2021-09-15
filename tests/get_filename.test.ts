import { assertEquals } from "https://deno.land/std@0.82.0/testing/asserts.ts";
import { getFilename } from "../mod.ts";

Deno.test("Get filename from a simple directory", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/index.ts",
  );

  assertEquals(__filename, "/Users/santiago.aguilar/Desktop/index.ts");
});

Deno.test("Get filename with a directory with spaces", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/dir%20with%20spaces/index.ts",
  );

  assertEquals(
    __filename,
    "/Users/santiago.aguilar/Desktop/dir%20with%20spaces/index.ts",
  );
});

Deno.test("Get filename with a directory with dots", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/dir.with.dots/index.ts",
  );

  assertEquals(
    __filename,
    "/Users/santiago.aguilar/Desktop/dir.with.dots/index.ts",
  );
});

Deno.test("Get filename with a directory with dashes", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/dir-with-dashes/index.ts",
  );

  assertEquals(
    __filename,
    "/Users/santiago.aguilar/Desktop/dir-with-dashes/index.ts",
  );
});

Deno.test("Get filename without extension", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/index",
  );

  assertEquals(__filename, "/Users/santiago.aguilar/Desktop/index");
});

Deno.test("Get filename in a hidden file", () => {
  const __filename = getFilename(
    "file:///Users/santiago.aguilar/Desktop/.index",
  );

  assertEquals(__filename, "/Users/santiago.aguilar/Desktop/.index");
});
