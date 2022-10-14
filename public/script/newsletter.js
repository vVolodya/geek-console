const $newsletterAlert = document.querySelector('#newsletter-alert');
const $emailSpinnerButon = document.querySelector('#spinner-button');
const $sendEmailButton = document.querySelector('#send-email-button');

const showEl = (el) => {
  el.classList.remove('hidden');
  el.classList.add('block');
};

const hideEl = (el) => {
  el.classList.remove('block');
  el.classList.add('hidden');
};

const getUsersEmail = async (e) => {
  e.preventDefault();

  showEl($emailSpinnerButon);
  hideEl($sendEmailButton);

  const emailAddress = e.target.email.value;

  const API = 'uSs5QVtmgdZlc68IQ9DzvQ';

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ api_key: API, email: emailAddress }),
  };

  const response = await fetch('https://api.convertkit.com/v3/forms/3697247/subscribe', options);

  if (response.ok) {
    hideEl($emailSpinnerButon);
    showEl($sendEmailButton);
    e.target.email.value = '';
    showEl($newsletterAlert);
    setTimeout(() => hideEl($newsletterAlert), 5000);
  }
};

document.newsletter.addEventListener('submit', getUsersEmail);
