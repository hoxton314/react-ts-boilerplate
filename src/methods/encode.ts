export const encodeString = (str: string): string => {
  return str.replace(/\//g, '%2F')
}
