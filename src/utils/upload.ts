export async function upload(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any
): Promise<{ filePath: string } | null> {
  try {
    const data = new FormData();
    data.append("file", file, file.name);

    const res = await fetch(`/api/admin/upload`, {
      method: "POST",
      body: data,
    });
    const result = await res.json();

    return result?.data || null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}
