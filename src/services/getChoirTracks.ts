import { supabase } from "../utils/supabaseClient";

export interface TrackFile {
  name: string;
  url: string;
}

export interface TrackFolder {
  folder: string;
  files: TrackFile[];
}

export async function getChoirTracks(): Promise<TrackFolder[]> {
  // List all folders in the bucket root
  const { data: folders, error: folderError } = await supabase.storage
    .from("choir-tracks")
    .list("");

  if (folderError) throw folderError;

  // Filter to keep only folder entries (type === 'folder')
  const folderNames =
    folders?.filter((item) => item.id && item.name)?.map((f) => f.name) || [];

  const result: TrackFolder[] = [];

  for (const folder of folderNames) {
    const { data: files, error: fileError } = await supabase.storage
      .from("choir-tracks")
      .list(folder, { limit: 1000 });

    if (fileError) throw fileError;

    const fileList: TrackFile[] = files
      .filter(
        (file) => file.name.endsWith(".mp3") || file.name.endsWith(".wav")
      )
      .map((file) => ({
        name: file.name,
        url: `${
          import.meta.env.VITE_SUPABASE_URL
        }/storage/v1/object/public/choir-tracks/${folder}/${file.name}`,
      }));

    result.push({
      folder,
      files: fileList,
    });
  }

  return result;
}
