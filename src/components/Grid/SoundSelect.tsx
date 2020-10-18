import React, { useEffect, useRef, useState } from "react";
import { fetchPreview } from "@lib/sound";
import { Button, Dropdown } from "semantic-ui-react";

interface SoundSelectProps {
  isPlaying: boolean;
  tick: number;
}

const soundOptions = [
  { key: "kick01", value: "171104", text: "kick 01" },
  { key: "kick02", value: "250547", text: "kick 02" },
  { key: "hithat01", value: "271405", text: "hithat 01" },
  { key: "hithat02", value: "112491", text: "hithat 02" },
  { key: "snare01", value: "387186", text: "snare 01" },
  { key: "snare02", value: "387187", text: "snare 02" },
];

const SoundSelect: React.FC<SoundSelectProps> = ({ isPlaying, tick }) => {
  const [loading, setLoading] = useState(false);
  const [sound, setSound] = useState("");
  const audioRef = useRef(null);

  const fetchSound = async (id: number) => {
    setLoading(true);
    const sound = await fetchPreview(id);
    setSound(sound);
    setLoading(false);
  };

  useEffect(() => {
    const audio: HTMLAudioElement = audioRef.current!;

    if (audio) {
      if (tick) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (isPlaying === true) {
        audio.play();
      }
    }
  }, [tick]);

  return (
    <>
      <Button basic color="black">
        <Dropdown
          item
          placeholder="Select sound"
          scrolling
          loading={loading}
          options={soundOptions}
          onChange={(e, data) => fetchSound(data.value as number)}
        />
      </Button>
      <audio src={sound} ref={audioRef} />
    </>
  );
};

export default SoundSelect;
