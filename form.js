const inputList = ["Skill", "Edu", "Exp", "Ach", "Int", "Proj", "Cont"];
const inputTypes = ["Skills", "Education", "Experience", "Achievements", "Interests", "Projects", "Contacts"];
const formContainer = document.querySelector('.form');

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

document.querySelector('.nextBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'none';
    document.querySelector('.preview').style.display = 'flex';

    let resumeName = document.createElement('p');
    resumeName.innerText = document.querySelector('.inputName').value;
    document.querySelector('.Name').appendChild(resumeName);

    let resumeAbout = document.createElement('p');
    resumeAbout.innerText = document.querySelector('.inputAbout').value;
    document.querySelector('.About').appendChild(resumeAbout);
});
