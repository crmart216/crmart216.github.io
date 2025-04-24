// sub.js
$(function() {
    const $form = $('form');
  
    $form.on('submit', function(e) {
      e.preventDefault();             // stop the real submission
      
      // a quick burst from both sides:
      const duration = 2 * 1000;
      const end = Date.now() + duration;
      (function frame() {
        // left side
        confetti({ 
          particleCount: 3, 
          angle: 60, 
          spread: 55, 
          origin: { x: 0 } 
        });
        // right side
        confetti({ 
          particleCount: 3, 
          angle: 120, 
          spread: 55, 
          origin: { x: 1 } 
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
      
      // --- now do your “subscribe” work: ajax post, show thank-you message, etc. ---
      // e.g.:
      // $.post('/subscribe', $form.serialize()).done(() => {
      //   alert('Thanks for subscribing!');
      // });
    });
  });
  