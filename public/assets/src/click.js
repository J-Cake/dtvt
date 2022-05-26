const sound = new Audio('/assets/res/sound_effect.mp3');
const sofunny = new Audio('/assets/res/so-funny.mp3');
const auuuuuuugh = new Audio('/assets/res/auuuuuuugh.mp3');
const waduhek = new Audio('/assets/res/waduhek.mp3');
const michaelrosen = new Audio('/assets/res/michael-rosen.mp3');

const getClosest = function (elem, selector) {

    for (; elem && elem !== document; elem = elem.parentNode) {
        const attrs = [...elem.attributes].map(i => `${i.name.toLowerCase()}: ${i.value.toLowerCase()}`).join(', ');
        if (selector.some(i => attrs.includes(i)))
            return elem;
    }

    return null;

};

sound.addEventListener('canplaythrough', function () {

    window.addEventListener('click', function (event) {
        const el = event.target;

        event.stopPropagation();

        if (getClosest(el, ['steph', 'sh', 'home-img']))
            sofunny.play();
        else if (getClosest(el, ['clayton', 'cp']))
            auuuuuuugh.play();
        else if (getClosest(el, ['phi', 'pb']))
            waduhek.play();
        else if (getClosest(el, ['jacob', 'jake', 'js']))
            michaelrosen.play();
        else if (getClosest(el, ['junior', 'nuulaiti', 'lale', 'njl']))
            sound.play();

    });

    
});