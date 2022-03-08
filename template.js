const resumeCardContent = ['Experience', 'Education', 'Skills', 'Projects', 'Contacts', 'Achievement' ,'Interests'];
const resumeCardList = ['Hi', 'Hello', 'Bonjour', 'Namaste', 'Konichiwa', 'Ni Hao'];
const resumeCardAppend = document.querySelector('.resumeContent');

for(let i = 0; i < resumeCardContent.length; i++)
{
    let card = document.createElement('div');
    card.setAttribute('class', 'resumeCard');

    let cardHeader = document.createElement('div');
    let header = document.createElement('p');

    cardHeader.setAttribute('class', 'resumeCardHeader');
    header.innerText = `${resumeCardContent[i]}`;
    cardHeader.appendChild(header);

    let cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'resumeCardContent');

    for(let j = 0; j < resumeCardList.length; j++)
    {
        let cardList = document.createElement('p');
        cardList.innerText = `${j + 1}. ${resumeCardList[j]}`

        cardContent.appendChild(cardList);
    }

    card.appendChild(cardHeader);
    card.appendChild(cardContent);
    resumeCardAppend.appendChild(card);
}