hamBttn = document.querySelector('.ham');
hamMenu = document.querySelector('.sideMenu');
previewPanel = document.querySelector('.previewMain');
let count = 0;

hamBttn.addEventListener('click', ()=>{
    if(count % 2 != 0)
    {
        hamMenu.style.display = 'block';
        previewPanel.style.width = '77%';
    }

    else
    {
        hamMenu.style.display = 'none';
        previewPanel.style.width = '97%';
    }

    ++count;
})

for(let i = 0; i < 2; i++)
{
    const imgCont = document.createElement('div');
    const imgTemp = document.createElement('img');

    imgCont.setAttribute('class', 'imageContainer');

    imgTemp.setAttribute('class', 'resumeImageBttn');
    imgTemp.setAttribute('src', `template${i + 1}.png`);

    // imgCont.appendChild(imgTemp);
    // hamMenu.appendChild(imgCont);

    imgCont.addEventListener('click', ()=>{
        const templateStyle = document.querySelector('link');
        templateStyle.setAttribute('href', `template${i + 1}.css`);
    })
}

document.querySelector('.goBackBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'flex';
    document.querySelector('.preview').style.display = 'none';

    const resumeName = document.querySelector('.resumeName');
    resumeName.removeChild(resumeName.lastChild);

    const resumeAbout = document.querySelector('.resumeAbout');
    resumeAbout.removeChild(resumeAbout.lastChild);

    const eep = document.querySelector('.resumeEEP');
    const aip = document.querySelector('.resumeAIP');
    const prof = document.querySelector('.resumeProf')

    while(eep.firstChild)
    {
        eep.removeChild(eep.lastChild);
    }

    while(aip.firstChild)
    {
        aip.removeChild(aip.lastChild);
    }

    while(prof.firstChild)
    {
        prof.removeChild(prof.lastChild);
    }
});

document.querySelector('.downloadBttn').addEventListener('click', ()=>{
    html2canvas(document.querySelector('.resume')).then(canvas => {
        document.body.appendChild(canvas);
        canvas.style.display = 'none';
        return canvas;
    })
    .then(canvas => {
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'resume.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
})