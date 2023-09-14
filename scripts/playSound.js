function soundPlay(isPlay) {
  if (isPlay) {
    const audio = new Audio('./assets/key-down.mp3');
    audio.play();
  }
}

export default soundPlay;
