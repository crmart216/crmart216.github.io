document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // hide all the inputs, textarea and the button
      form.querySelectorAll('input, textarea, button')
          .forEach((el) => el.style.display = 'none');
  
      // create a big, bold "Thank You!!" message
      const thankYou = document.createElement('div');
      thankYou.textContent = 'Thank You!!';
      thankYou.style.fontSize   = '2.5rem';
      thankYou.style.fontWeight = '700';
      thankYou.style.textAlign  = 'center';
      thankYou.style.marginTop  = '1rem';
      thankYou.style.margin = '0 auto';
      thankYou.style.textALign = 'Center';
  
      form.appendChild(thankYou);
    });
  });