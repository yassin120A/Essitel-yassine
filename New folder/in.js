document.addEventListener("mousemove", function(e) {
    const light = document.querySelector(".light");
    
    // Update the position of the light effect based on mouse movement
    light.style.left = e.pageX + "px";
    light.style.top = e.pageY + "px";
});


let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById('backBtn')
let nextBtn = document.getElementById('nextBtn')


scrollContainer.addEventListener('wheel', (evt) =>{
    scrollContainer.style.scrollBehavior = 'auto'
    scrollContainer.scrollLeft += evt.deltaY
})

nextBtn.addEventListener('click' ,()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 1000
})

backBtn.addEventListener('click' ,()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 1000
})




let abaut = document.querySelectorAll('.abaut')

window.addEventListener('scroll',checkBoxs)

function checkBoxs(){
    const tregerButtem = window.innerHeight/5*4;
    abaut.forEach(abaut =>{
        const boxTop = abaut.getBoundingClientRect().top

        if(abaut < tregerButtem){
            abaut.classList.add('show')
        }
        else{
            abaut.classList.remove('show')
        }
    })
}

sidBar = document.getElementById('navBarSid')

function openbar(){
    sidBar.style.display = 'flex'
}

function closeBar(){
    sidBar.style.display = 'none'
}



function scrollWin(){
    window.scrollTo(0 , 500)
}