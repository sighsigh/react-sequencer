export const fetchPreview = async (id: string | number): Promise<string> => {
  const res = await fetch(
    `https://freesound.org/apiv2/sounds/${id}/?fields=previews&token=${process.env.FREESOUND_API_KEY}`
  );
  const { previews } = await res.json();
  return previews["preview-lq-mp3"];
};
