import { assertEquals } from 'https://deno.land/std@0.82.0/testing/asserts.ts';
import { getDirname } from '../mod.ts';

Deno.test('Get dirname from a simple directory', () => {
  const __dirname = getDirname(
    'file:///Users/santiago.aguilar/Desktop/index.ts',
  );

  assertEquals(__dirname, '/Users/santiago.aguilar/Desktop');
});

Deno.test('Get dirname with a directory with spaces', () => {
  const __dirname = getDirname(
    'file:///Users/santiago.aguilar/Desktop/dir%20with%20spaces/index.ts',
  );

  assertEquals(
    __dirname,
    '/Users/santiago.aguilar/Desktop/dir%20with%20spaces',
  );
});

Deno.test('Get dirname with a directory with dots', () => {
  const __dirname = getDirname(
    'file:///Users/santiago.aguilar/Desktop/dir.with.dots/index.ts',
  );

  assertEquals(__dirname, '/Users/santiago.aguilar/Desktop/dir.with.dots');
});

Deno.test('Get dirname with a directory with dashes', () => {
  const __dirname = getDirname(
    'file:///Users/santiago.aguilar/Desktop/dir-with-dashes/index.ts',
  );

  assertEquals(__dirname, '/Users/santiago.aguilar/Desktop/dir-with-dashes');
});

Deno.test('Get dirname with a file without extension', () => {
  const __dirname = getDirname('file:///Users/santiago.aguilar/Desktop/index');

  assertEquals(__dirname, '/Users/santiago.aguilar/Desktop');
});

Deno.test('Get dirname with a hidden file', () => {
  const __dirname = getDirname('file:///Users/santiago.aguilar/Desktop/.index');

  assertEquals(__dirname, '/Users/santiago.aguilar/Desktop');
});
