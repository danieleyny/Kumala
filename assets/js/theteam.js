/*===== Nav Bar =====*/

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click', ()=> {
      // TOGGLE NAV
      nav.classList.toggle('nav-active');

  //ANIMATE LINKS 
  navLinks.forEach((link, index)=>{
      if(link.style.animation){
          link.style.animation = '';
      }   else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
      }
  });

  //burger animation
  burger.classList.toggle('toggle');

  });

}
navSlide();

/*===== Nav Bar End =====*/



  // gallery item filter
  
  const filterButtons = document.querySelector("#filter-btns").children;
  const items = document.querySelector(".container__team").children;

  for(let i =0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(){
      for (let j =0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active2")
      }
      this.classList.add("active2");
      const target = this.getAttribute("data-target")

      for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        if (target == items[k].getAttribute("data-id")) {
          items[k].style.display = "block";
        }
        if (target == "all") {
          items[k].style.display = "block";
        }
      }
    })
  }