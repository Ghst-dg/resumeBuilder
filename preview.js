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

    imgCont.appendChild(imgTemp);
    hamMenu.appendChild(imgCont);

    imgCont.addEventListener('click', ()=>{
        const templateStyle = document.querySelector('link');
        templateStyle.setAttribute('href', `template${i + 1}.css`);
    })
}

document.querySelector('.goBackBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'flex';
    document.querySelector('.preview').style.display = 'none';
})