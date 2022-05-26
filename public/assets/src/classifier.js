window.addEventListener('load', async function () {

    const preview = document.querySelector('#preview');
    const video = document.querySelector('#preview ~ video');

    if (!preview || !video || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
        return;

    const ctx = preview.getContext('2d');

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    video.setAttribute('autoplay', true);
    video.setAttribute('muted', true);

    video.srcObject = stream;

    let model;
    cocoSsd.load().then(mod => model = mod);

    video.addEventListener('loadeddata', async function () {
        preview.width = video.videoWidth;
        preview.height = video.videoHeight;

        console.log(preview.width, preview.height);

        while (true) {
            ctx.clearRect(0, 0, preview.width, preview.height);
            
            if (model)
                for (const i of await model.detect(video))
                    if (i.score > .66) {
                        ctx.strokeStyle = '#ff0000';
                        ctx.lineWidth = 2;
                        ctx.strokeRect(i.bbox[0], i.bbox[1], i.bbox[2], i.bbox[3]);
                        ctx.font = '16px sans-serif';
                        ctx.fillStyle = '#ff0000';
                        ctx.fillText(i.class, i.bbox[0], i.bbox[1]);
                    }

            await new Promise(resolve => requestAnimationFrame(resolve));
        }
    });
});