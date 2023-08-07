const navEl = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 200) {
                navEl.classList.add('navbar-scrolled');
            } else {
                navEl.classList.remove('navbar-scrolled');
            }
        });
  
        const logoEl = document.querySelector('.logo');
        window.addEventListener('scroll', () => {
          if (window.scrollY >=200) {
            logoEl.classList.add('logo-scrolled'); 
          } else {
            logoEl.classList.remove('logo-scrolled')
          }
        });
        
        const togglerEl = document.querySelector('.navbar-toggler');
        const headersEl = document.querySelectorAll('#header, #second-header');
        
        togglerEl.addEventListener('click', () => {
            const isCollapsed = document.querySelector('.navbar-collapse').classList.contains('show');
        
            headersEl.forEach(header => {
                if (isCollapsed) {
                    header.classList.remove('toggler-clicked');
                } else {
                    header.classList.add('toggler-clicked');
                }
        
                if(window.scrollY >= 200) {
                    header.classList.remove('toggler-clicked');
                }   
            });
        });

          // Get the modal
let modal = document.getElementById('modal');

// Get the button that opens the modal
let btn = document.getElementById('openModal');

// Get the <span> element that closes the modal
let span = document.getElementById('closeModal');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');  // Change 'no-scroll' to 'modal-open'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');  // Change 'no-scroll' to 'modal-open'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');  // Change 'no-scroll' to 'modal-open'
  }
}

  