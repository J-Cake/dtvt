const sound = new Audio('/assets/res/sound_effect.mp3');
const sofunny = new Audio('/assets/res/so-funny.mp3');

sound.volume = 0.5;
sofunny.volume = 0.5;

sound.addEventListener('canplaythrough', function () {
    window.addEventListener('click', _ => sound.play());
    for (const i of document.querySelectorAll('.sh, #sh, img.home-img, #collapse-Stephanie'))
        if (i)
            i.addEventListener('click', e => [e.stopPropagation(), sofunny.play()]);
});