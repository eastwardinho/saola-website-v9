export function basePath(p: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return prefix + p;
}
