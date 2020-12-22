const removeProtocolRegex = /\w+:\/\//;

export function getFilename(importMetaUrl: string): string {
  return importMetaUrl.replace(removeProtocolRegex, '');
}
