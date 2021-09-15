import { testCJS, testPathSTD, testURL } from './get_dirname.ts';

// new URL('.', import.meta.url);
testURL();

// dirname(fromFileUrl(import.meta.url));
testPathSTD();

// getDirname(import.meta.url);
testCJS();
