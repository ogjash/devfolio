export function addQueryParams(
  url: string,
  params: Record<string, string>
): string {
  const urlObj = new URL(url)
  for (const [key, value] of Object.entries(params)) {
    urlObj.searchParams.set(key, value)
  }
  return urlObj.toString()
}
