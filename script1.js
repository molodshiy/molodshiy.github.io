const script1 = () => {
    const style1 = document.createElement('style');
style1.textContent = `

    #form-container123 {
     position: fixed;
      top: calc(50% - 170px);
      left: calc(50% - 210px);
      z-index: 11111111;
      border: 1px solid #d4ae37;
      border: 1px solid gold;
      width: 420px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      box-sizing: border-box;
      background: black;
    }

    .h1123 {
      color: white;
      font-size: 16px;
      margin: 0;
       gap: 5px;
    }

    p.description123 {
      color: white;
      font-size: 12px;
      margin: 0 0 2px;
      padding: 0;
      gap: 5px;
    }

    .close-btn123 {
      position: absolute;
      width: 80px;
      top: 10px;
      right: 10px;
      color: white;
      font-size: 12px;
      cursor: pointer;
      border: none;
      background: none;
      font-weight: bold;
    }

    .input123, .select123, .button123 {
      padding: 12px;
      background: black;
      color: white;
      border: 1px solid white;
      font-size: 14px;
      width: 100%;
      box-sizing: border-box;
    }

    .row123 {
      display: flex;
      gap: 10px;
    }

    .row .input123, .row .select123 {
      flex: 1;
    }

    .button123 {
      cursor: pointer;
      transition: background 0.3s;
    }

    .button123:hover {
      color: white;
    }
  `;
document.head.appendChild(style1);
const formContainer1 = document.createElement('div');
formContainer1.id = 'form-container123';
document.body.appendChild(formContainer1);

const closeButton1 = document.createElement('button');
closeButton1.className = 'close-btn123';
closeButton1.innerHTML = 'CLOSE &times;';
closeButton1.onclick = () => {
  formContainer1.style.display = 'none';
};
formContainer1.appendChild(closeButton1);

const currentScript1 = document.currentScript;


  const url = new URL(window.location.href);
  const params = url.searchParams;
  const myParam = params.get('group');
  const myParam1 = params.get('id');
const title = document.createElement('h1');
title.className = 'h1123';
title.textContent = myParam +' - ' +myParam1;
formContainer1.appendChild(title);


const description = document.createElement('p');
description.className = 'description123';
description.textContent = 'Monday, October 23 at 7.00 PM';
formContainer1.appendChild(description);

const description1 = document.createElement('p');
description1.className = 'description123';
description1.textContent = 'Dolby Burbank';
formContainer1.appendChild(description1);

const row1 = document.createElement('div');
row1.className = 'row123';

const firstName = document.createElement('input');
firstName.placeholder = 'FIRST NAME';
firstName.className = 'input123';

const lastName = document.createElement('input');
lastName.placeholder = 'LAST NAME';
lastName.className = 'input123';

row1.appendChild(firstName);
row1.appendChild(lastName);

const email = document.createElement('input');
email.type = 'email';
email.className = 'input123';
email.placeholder = 'EMAIL ADDRESS';

const row2 = document.createElement('div');
row2.className = 'row123';

const guests = document.createElement('select');
guests.className = 'select123';
['GUESTS', '0', '1', '2', '3'].forEach(val => {
  const option = document.createElement('option');
  option.textContent = val;
  guests.appendChild(option);
});

const guild = document.createElement('select');
guild.className = 'select123';
['GUILD', 'Warriors', 'Mages', 'Rogues'].forEach(val => {
  const option = document.createElement('option');
  option.textContent = val;
  guild.appendChild(option);
});

row2.appendChild(guests);
row2.appendChild(guild);

const button = document.createElement('button');
button.className = 'button123';
button.textContent = 'CONFIRM RSVP';
button.onclick = () => {
  alert('RSVP confirmed!');
};

formContainer1.appendChild(row1);
formContainer1.appendChild(email);
formContainer1.appendChild(row2);
formContainer1.appendChild(button);
}

script1();
