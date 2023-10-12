import { AVPlaybackSource, Audio } from "expo-av";

export const playSound = async (soundFile: AVPlaybackSource) => {
  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();
};
