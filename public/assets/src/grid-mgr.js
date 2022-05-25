const resize = window.resize = function () {
    // const buffer = [document.querySelector('#buffer'), ...document.querySelectorAll('.tab .info')];
    const sh = [document.querySelector('#sh'), ...document.querySelectorAll('.tab .sh')];
    const pb = [document.querySelector('#pb'), ...document.querySelectorAll('.tab .pb')];
    const js = [document.querySelector('#js'), ...document.querySelectorAll('.tab .js')];
    const cp = [document.querySelector('#cp'), ...document.querySelectorAll('.tab .cp')];
    const njl = [document.querySelector('#njl'), ...document.querySelectorAll('.tab .njl')];
    const td = [document.querySelector('#td'), ...document.querySelectorAll('.tab .td')];
    const extra = [document.querySelector('#extra'), ...document.querySelectorAll('.tab .extra')];

    for (const i of [sh, pb, js, cp, njl, td, extra]) {
        for (const j of i)
            j.style.minHeight = `0px`;

        const maxHeight = Math.ceil(i.reduce((a, i) => Math.max(a, i.clientHeight), 0));

        for (const j of i)
            j.style.minHeight = `${maxHeight}px`;
    }

}

window.addEventListener('load', function () {
    resize();
    window.addEventListener('resize', resize);
});