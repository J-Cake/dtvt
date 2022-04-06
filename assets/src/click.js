const sound = new Audio('/assets/res/sound_effect.mp3');
sound.addEventListener('canplaythrough', function (e) {
    window.addEventListener('click', () => sound.play());
});