import { AVPlaybackSource, Audio } from "expo-av";
import * as sounds from "../assets/sounds";

export const playSound = async (soundFile: AVPlaybackSource) => {
  const { sound } = await Audio.Sound.createAsync(soundFile);
  await sound.playAsync();
};

export const getRandomSound = () => {
  const soundArray = Object.values(sounds);
  const randomIndex = Math.floor(Math.random() * soundArray.length);
  return soundArray[randomIndex];
};
