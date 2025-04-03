
// Animação dos elementos
const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach( entry =>{
        if(entry.isIntersecting){
            if(entry.target.classList.contains('hidden')) entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    })
});

window.addEventListener('scroll', function(){
    let scroll = this.document.querySelector('.scrollTop')
    scroll.classList.toggle('active',this.window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    })


}


const elements = document.querySelectorAll('.hidden');
elements.forEach((element)=> myObserver.observe(element));


// Dark Mode
const html = document.documentElement; 
const imgCard = document.querySelectorAll('.img-change')

const verifyDarkMode = () => {
    return html.classList.contains('dark-mode');
}

function lightMode(){
    if (verifyDarkMode()){
        html.classList.remove('dark-mode');

        imgCard.forEach(img => {
            let src = img.src;
            if (src.includes("assets/img/dark/")) {
                img.src = src.replace( "dark", "light");
            }
        });
    } 
}
    

function darkMode(){
    if (!verifyDarkMode()){
        html.classList.add('dark-mode');
        imgCard.forEach(img => {
            let src = img.src;
            if (src.includes("assets/img/light/")) {
                img.src = src.replace("light", "dark");
            }
        });
    }
}


new Swiper('.card-wrapper', {
    // Optional parameters

    loop: true,
    spaceBetween: 80,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
     
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

});



function showSidebar(){

    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";

}


function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}
