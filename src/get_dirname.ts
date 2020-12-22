const removeProtocolAndFilenameRegex = /\w+:\/\/(.*)\/[^/]+$/;

export function getDirname(importMetaUrl: string): string {
  return importMetaUrl.replace(removeProtocolAndFilenameRegex, '$1');
}
