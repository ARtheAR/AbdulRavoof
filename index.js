  function oper_side_navigation() {
    document.getElementById("side-navigation-bar").style.display = "block";
  }
  
  function closer_side_navigation() {
    document.getElementById("side-navigation-bar").style.display = "None";
  }

//counter 

const counters = document.querySelectorAll('.counter');
const section2 = document.querySelector('.sc-2');


const countingCounters = function (entries, observer) {

  entries.forEach(entry => {

    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {


      counters.forEach(counter => {

        counter.innerText = '0';


        const updateCounter = function () {


          const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 350;
        
            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              setTimeout(updateCounter, 5);
            } else {
              counter.innerText = target;
            }
      }
      updateCounter();
      });
      observer.unobserve(section2);
  }
  });
};


const options = {
  root: null,
  threshold: 0.2
};


const observer = new IntersectionObserver(countingCounters, options);


observer.observe(section2);