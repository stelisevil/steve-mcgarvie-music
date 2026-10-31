import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface ChoirPlayerProps {
  url: string;
}

export const ChoirPlayer = ({ url }: ChoirPlayerProps) => {
  return (
    <AudioPlayer
      src={url}
      preload="none"
      autoPlay={false}
      showJumpControls={true}
      customAdditionalControls={[]}
      customVolumeControls={[]}
    />
  );
};
