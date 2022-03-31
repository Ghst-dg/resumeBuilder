

const inputList = ["Skill", "Edu", "Exp", "Ach", "Int", "Proj", "Cont"];
const inputTypes = ["Skills", "Education", "Experience", "Achievements", "Interests", "Projects", "Contacts"];
const formContainer = document.querySelector('.form');
const resumeCardAppend = document.querySelector('.resumeContent');

for(let i = 0; i < inputList.length; i++)
{
    const inputBox = document.createElement('input');
    inputBox.setAttribute('class', `input${inputList[i]}`);
    const appBttn = document.createElement('button');
    appBttn.setAttribute('class', 'appendBttn');
    appBttn.innerText = '+';

    const inputContainerBox = document.createElement('div');
    inputContainerBox.setAttribute('class', 'inputList');
    const inputLegend = document.createElement('legend');
    inputLegend.innerText = `${inputTypes[i]}`;

    const inputFS = document.createElement('fieldset');
    inputFS.setAttribute('class', 'inputContainer');

    inputContainerBox.appendChild(inputBox);
    inputContainerBox.appendChild(appBttn);

    inputFS.appendChild(inputLegend);
    inputFS.appendChild(inputContainerBox);

    formContainer.appendChild(inputFS);

    appBttn.addEventListener('click', ()=>{
        const appInputBox = document.createElement('input');
        appInputBox.setAttribute('class', `input${inputList[i]}`);

        const appInputContainerBox = document.createElement('div');
        appInputContainerBox.setAttribute('class', 'inputList');

        const removeInput = document.createElement('button');
        removeInput.setAttribute('class', 'appendBttn');
        removeInput.innerText = '-';

        appInputContainerBox.appendChild(appInputBox);
        appInputContainerBox.appendChild(removeInput);
        inputFS.appendChild(appInputContainerBox);

        removeInput.addEventListener('click', ()=>{
            appInputContainerBox.remove();
        })
    })
}




//This Important Function Move to Next Page as well as create resume
document.querySelector('.nextBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'none';
    document.querySelector('.preview').style.display = 'flex';

    let resumeName = document.createElement('p');
    resumeName.innerHTML = document.querySelector('.inputName').value;
    document.querySelector('.Name').appendChild(resumeName);

    let resumeAbout = document.createElement('p');
    resumeAbout.innerHTML = document.querySelector('.inputAbout').value;
    document.querySelector('.About').appendChild(resumeAbout);

    for(let i = 0; i < inputTypes.length; i++)
    {
        //let parentNode = document.querySelector(`.${resumeCardContent[i]}`);
        let parentSource = document.querySelectorAll(`.input${inputList[i]}`);
        if(parentSource[0].value)
        {
            let card = document.createElement('div');
            card.setAttribute('class', 'resumeCard');

            let cardHeader = document.createElement('div');
            let header = document.createElement('p');

            cardHeader.setAttribute('class', 'resumeCardHeader');
            header.innerText = `${inputTypes[i]}`;
            cardHeader.appendChild(header);

            let cardContent = document.createElement('div');
            cardContent.setAttribute('class', `${inputTypes[i]}`);

            for(let j = 0; j < parentSource.length; j++)
            {
                const text = document.createElement('p');
                const value = parentSource[j].value;
                text.innerHTML = `${j + 1}. ${value}`;
                cardContent.appendChild(text);
            }

            card.appendChild(cardHeader);
            card.appendChild(cardContent);
            resumeCardAppend.appendChild(card);
        }
    }
});

document.querySelector('.closeBttn').addEventListener('click', ()=>{
    formElement.style.display = 'none';
    landingElement.style.display = 'flex';
})