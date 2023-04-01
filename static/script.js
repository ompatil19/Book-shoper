let typed=new Typed( ".auto-input", {
    strings: ["Welcome To Fictionary","Welcome To Fictionary","Turn The Page, Start a Journey","Escape Reality, One Book At a Time"],
    typeSpeed :50, 
    backSpeed:50, 
    loop:true
})

let t=document.getElementsByClassName("content")

console.log(t)

const myDiv = document.getElementById('navres');

function setDivWidth() {
    myDiv.style.width = document.documentElement.clientWidth+ 'px'; // set width to half of the document width
  }
  
  window.addEventListener('resize', setDivWidth); // set width on window resize
  setDivWidth(); // set initial width


  function scrollToSection() {
    // Get the section element you want to scroll to
    const section = document.getElementById('aboutus');
    
    // Scroll to the section using the scrollTo method
    section.scrollIntoView({ behavior: 'smooth' });
  }
  