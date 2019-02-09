  var status = 0,
    currentModal = '';
  // algorithm function for homepage animated text
  var animateText = function() {
    switch (status) {
      case '0':
        document.getElementById('text-anim').innerText = 'We deliver meals to your doorstep';
        document.getElementById('jumbo').classList.remove('bg');
        document.getElementById('jumbo').classList.add('bg2');
        status = 1;
        break;
      case '1':
        document.getElementById('text-anim').innerText = 'Hot and spicy any day anytime';
        document.getElementById('jumbo').classList.remove('bg2');
        document.getElementById('jumbo').classList.add('bg3');
        status = 2;
        break;
      case '2':
        document.getElementById('text-anim').innerText = 'Option to pay on delivery or up front';
        document.getElementById('jumbo').classList.remove('bg3');
        document.getElementById('jumbo').classList.add('bg4');
        status = 3;
        break;
      case '3':
        document.getElementById('text-anim').innerText = 'Meals are affordable and hygienically prepared';
        document.getElementById('jumbo').classList.remove('bg4');
        document.getElementById('jumbo').classList.add('bg');
        status = 0;
        break;
      default:
        document.getElementById('text-anim').innerText = 'Delicious meals you can\'t resist';
        document.getElementById('jumbo').classList.remove('bg5');
        document.getElementById('jumbo').classList.add('bg');
        status = 0;
    }
  },
    // function for toggling login and signup modal
    toggleModal = function(e) {
      const elem = e.target.getAttribute('data-modal');
      if (currentModal && currentModal !== elem) {
        document.getElementById(currentModal).classList.add('hidden');
        document.getElementById(elem).classList.remove('hidden');
      } else {
        console.log('cool', elem, currentModal, document.getElementById(elem));
        document.getElementById(elem).classList.toggle('hidden');
      }
      currentModal = elem;
    },
  
    // function for dismissing modal
    dismissModal = function() {
      if (currentModal) {
        document.getElementById(currentModal).classList.add('hidden');
        currentModal = null;
      }
    },
  // function for page animation and modal script
  startAnimation = function() {
    var animText = document.getElementById('text-anim');
    if(animText) {
      const startAnim = setInterval(animateText, 3000);
    }
    const classname = document.getElementsByClassName('trigger');
    Array.from(classname).forEach( function(element) {
      element.addEventListener('click', toggleModal);
    });
    const dismissname = document.getElementsByClassName('dismiss');
    Array.from(dismissname).forEach( function(element) {
      element.addEventListener('click', dismissModal);
    });
  };
  // onload methods for ui animation and signup and login modal events
window.onload = () => {
  // checkIt();
  startAnimation();
};
