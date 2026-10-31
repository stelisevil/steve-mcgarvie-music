import { supabase } from "../utils/supabaseClient";

export interface TrackFile {
  name: string;
  url: string;
}

export interface TrackFolder {
  folder: string;
  files: TrackFile[];
}

export async function getChoirTracks(bucket: string): Promise<TrackFolder[]> {
  // List all folders in the bucket root
  const { data: folders, error: folderError } = await supabase.storage
    .from(bucket)
    .list("");

  if (folderError) throw folderError;

  const folderNames = folders?.map((f) => f.name) || [];

  // Fetch each folder's files in parallel
  return Promise.all(
    folderNames.map(async (folder) => {
      const { data: files, error: fileError } = await supabase.storage
        .from(bucket)
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
          }/storage/v1/object/public/${bucket}/${folder}/${file.name}`,
        }));

      return {
        folder,
        files: fileList,
      };
    })
  );
}
