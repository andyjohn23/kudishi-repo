const counters = document.querySelectorAll(".counter");
const speed = 20;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerHTML;

      const inc = target / speed;

      if(count < target){
          counter.innerHTML = Math.round(count + inc);
          setTimeout(updateCount, 1);
      }else{
          count.innerHTML = target;
      }
    }

    updateCount();
});
