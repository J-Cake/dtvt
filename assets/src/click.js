const sound = new Audio('/assets/res/sound_effect.mp3');
const sofunny = new Audio('/assets/res/so-funny.mp3');

sound.addEventListener('canplaythrough', function () {
    window.addEventListener('click', _ => sound.play());
    document.querySelector('.sh, #sh, img.home-img')?.addEventListener('click', e => [e.stopPropagation(), sofunny.play()]);
});