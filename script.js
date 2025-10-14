
      const style1 = document.createElement('style');
      style1.textContent = `

    #form-container {
      position: fixed;
      top: calc(50% - 170px);
      left: calc(50% - 210px);
      z-index: 11111111;
      border: 1px solid #d4ae37;
      width: 420px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px;
      box-sizing: border-box;
      background: black;
    }

    h1 {
      color: white;
      font-size: 16px;
      margin: 0;
       gap: 5px;
    }

    p.description {
      color: white;
      font-size: 12px;
      margin: 0 0 2px;
      padding: 0;
      gap: 5px;
    }

    .close-btn {
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

    input, select, button {
      padding: 12px;
      background: black;
      color: white;
      border: 1px solid white;
      font-size: 14px;
      width: 100%;
      box-sizing: border-box;
    }

    .row {
      display: flex;
      gap: 10px;
    }

    .row input, .row select {
      flex: 1;
    }

    button {
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: white;
      color: black;
    }
  `;
      document.head.appendChild(style1);
      const formContainer = document.createElement('div');
      formContainer.id = 'form-container';
      document.body.appendChild(formContainer);

      const closeButton = document.createElement('button');
      closeButton.className = 'close-btn';
      closeButton.innerHTML = 'CLOSE &times;';
      closeButton.onclick = () => {
        formContainer.style.display = 'none';
      };
      formContainer.appendChild(closeButton);

      const currentScript = document.currentScript;
      
      if (currentScript) {
        const scriptSrc = currentScript.src;
        const url = new URL(scriptSrc);
        const params = url.searchParams;
        const myParam = params.get('id');
        const myParam1 = params.get('slug');

      const title = document.createElement('h1');
      title.textContent = myParam +' - ' +myParam1;
      formContainer.appendChild(title);
      }

      const description = document.createElement('p');
      description.className = 'description';
      description.textContent = 'Friday, October 23 at 7.00 PM';
      formContainer.appendChild(description);

      const description1 = document.createElement('p');
      description1.className = 'description';
      description1.textContent = 'Dolby Burbank';
      formContainer.appendChild(description1);

      const row1 = document.createElement('div');
      row1.className = 'row';

      const firstName = document.createElement('input');
      firstName.placeholder = 'FIRST NAME';

      const lastName = document.createElement('input');
      lastName.placeholder = 'LAST NAME';

      row1.appendChild(firstName);
      row1.appendChild(lastName);

      const email = document.createElement('input');
      email.type = 'email';
      email.placeholder = 'EMAIL ADDRESS';

      const row2 = document.createElement('div');
      row2.className = 'row';

      const guests = document.createElement('select');
      ['GUESTS', '0', '1', '2', '3'].forEach(val => {
        const option = document.createElement('option');
        option.textContent = val;
        guests.appendChild(option);
      });

      const guild = document.createElement('select');
      ['GUILD', 'Warriors', 'Mages', 'Rogues'].forEach(val => {
        const option = document.createElement('option');
        option.textContent = val;
        guild.appendChild(option);
      });

      row2.appendChild(guests);
      row2.appendChild(guild);

      // --- 9. Кнопка CONFIRM RSVP ---
      const button = document.createElement('button');
      button.textContent = 'CONFIRM RSVP';
      button.onclick = () => {
        alert('RSVP confirmed!');
      };

      // --- 10. Додати всі елементи у форму ---
      formContainer.appendChild(row1);
      formContainer.appendChild(email);
      formContainer.appendChild(row2);
      formContainer.appendChild(button);
