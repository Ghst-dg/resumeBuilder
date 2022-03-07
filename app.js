const contentFeatures = ['Single page web application',
                        'Modular Forms',
                        'Multiple Template to Choose from',
                        'Live Preview'];

const contentImages = [ 'singlePage.png' ,' modularForm.png', ' multiTemp.png', ' livePre.png'];

const contentElement = document.querySelector('.content');

for(let i = contentFeatures.length - 1; i >= 0; i--)
{
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const cardFrame = document.createElement('div');
    const cardText = document.createElement('p');
    const cardImage = document.createElement('img');

    card.setAttribute('class', 'card');
    cardContent.setAttribute('class', 'cardContent');
    cardFrame.setAttribute('class', 'cardImageFrame');
    cardImage.setAttribute('class', 'cardImage');

    cardText.innerText = `${contentFeatures[i]}`;
    cardContent.appendChild(cardText);

    cardImage.setAttribute('src', `${contentImages[i]}`);
    cardFrame.appendChild(cardImage);

    if(i % 2 == 0)
    {
        card.appendChild(cardFrame);
        card.appendChild(cardContent);
    }

    else
    {
        card.appendChild(cardContent);
        card.appendChild(cardFrame);
    }

    contentElement.prepend(card);
}

toFormBttn = document.querySelectorAll('.nextHeaderBttn');
formElement = document.querySelector('.formViewPort');
landingElement = document.querySelector('.landing');

for(let i = 0; i < toFormBttn.length; i++)
{
    toFormBttn[i].addEventListener('click', ()=>{
        formElement.style.display = 'flex';
        landingElement.style.display = 'none';
    })
}