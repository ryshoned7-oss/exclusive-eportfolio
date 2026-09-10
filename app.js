// template_azfdpct
// service_oacepcj
// NO4QBPxX4fPT7zNA9

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += ' modal__overlay--visible';
  emailjs
    .sendForm(
      'service_oacepcj',
      'template_azfdpct',
      event.target,
      'NO4QBPxX4fPT7zNA9'
    ).then(() => {
      loading.classList.remove('modal__overlay--visible')
      success.classList += ' modal__overlay--visible'
    }).catch(() => {
      loading.classList.remove('modal__overlay--visible')
      alert(
        'The email service is temporarily unavailble. Please contact me directly at RyshoneD7@gmail.com'
      );
    })
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open')
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open"
}