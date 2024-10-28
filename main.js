import './assets/styles/main.scss';
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#app').innerHTML = /*html*/`
    <div class="container">
      <nav>
        <div class="logo"><span class="header-text">Edwardtonnn</span></div>
        <div class="nav">
          <div class="desktop">
            <a href="#">Work</a>
            <a href="#">Service</a>
            <a href="#">About</a>
          </div>
          <div class="mobile">
          <a href="#">menu</a>
          </div>
        </div>
      </nav>

      <div class="container-primary-text">
      <img class="background" src="/assets/images/background.jpg" alt="Background image">
      <img class="subject" src="/assets/images/subject.jpg" alt="Subject image">
        <h1 class="header-text split">Dedicated to Excellence</h1>
        <p class="split mw-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt molestiae animi doloribus debitis. Rem consequatur libero, alias sunt rerum in odit ipsa, fugiat tempore laborum exercitationem, eos esse quis excepturi.</p>
      </div>

      <p class="text-footer split">Art is supposed to lift you by the shoulders, bring you to newer heights and yell, <em>feel something!</em></p>

      <p class="text-project">Project 01 | Split Text</p>
    </div>
  `;

  // Select all elements with the 'split' class
  const splitElements = document.querySelectorAll('.split');

  splitElements.forEach(element => {
    // Split the text content into words or characters (customize as needed)
    const words = element.innerHTML.split(' ').map(word => {
      return `<span class="line">${word}</span>`;
    }).join(' ');

    // Update the element with spans
    element.innerHTML = words;
  });

  // Select all line elements for animation
  const lineElements = document.querySelectorAll('.line');

  // Animate each line
  gsap.from(lineElements, { 
    duration: 0.2, 
    opacity: 0, 
    y: "50%", 
    stagger: 0.2, // Stagger the animation between lines
    ease: "power2.in"
  });
});
