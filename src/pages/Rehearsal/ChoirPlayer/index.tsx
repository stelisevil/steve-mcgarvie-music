import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface ChoirPlayerProps {
  url: string;
}

export function ChoirPlayer({ url }: ChoirPlayerProps) {
  return (
    <AudioPlayer
      src={url}
      autoPlay={false}
      showJumpControls={true}
      customAdditionalControls={[]}
      customVolumeControls={[]}
    />
  );
}
