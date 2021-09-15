const removeProtocolAndFilenameRegex = /\w+:\/\/(.*)\/[^/]+$/;

/**
 * Returns the directory of the current module.
 *
 * ``` ts
 * import { getDirname } from './get_dirname.ts';
 * const __dirname = getDirname(import.meta.url);
 *
 * ```
 */
export function getDirname(importMetaUrl: string): string {
  return importMetaUrl.replace(removeProtocolAndFilenameRegex, "$1");
}
