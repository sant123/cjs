const removeProtocolRegex = /\w+:\/\//;

/**
 * Returns the filename of the current module.
 *
 * ``` ts
 * import { getFilename } from './get_filename.ts';
 * const __filename = getFilename(import.meta.url);
 *
 * ```
 */
export function getFilename(importMetaUrl: string): string {
  return importMetaUrl.replace(removeProtocolRegex, "");
}
