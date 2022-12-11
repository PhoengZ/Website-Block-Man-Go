
const bar = document.querySelector('.bar > i')
console.log(bar);
bar.onclick =()=>{
    console.log("1")
    const menu = document.querySelector('nav');
    menu.classList.toggle('show')
}

const nav = document.querySelector('nav')
nav.onclick =()=>{
    const menunav = document.querySelector('nav')
    menunav.classList.toggle('show')
}








//const card = document.querySelector(".des1");
//
//card.addEventListener("mousemove",(e)=>{
//    let x1 = (window.innerWidth /2 - e.pageX)/5;
//    let y1 = (window.innerHeight /2 - e.pageY)/5;
//    
//    card.style.transform = `rotateY(${y1}deg) rotateX(${x1}deg)`;
//})
const Setmargin = document.getElementsByClassName('describeGame');
const Setslide = document.querySelector('.slide-main');
const SlideTest = document.querySelectorAll('.slide-main div');
const SetPic = document.querySelector('.Character');
const SlidePic = document.querySelectorAll('.Character Img');
// const SetBg = document.querySelector('.BackgroundBg1');
// const SlideBg = document.querySelectorAll('.BackgroundBg1 Img');


const NextBt = document.querySelector('#NextBt');
const PreviousBt = document.querySelector('#PreviousBt');

var count = 1;

const margin = getComputedStyle(SlideTest[count]).getPropertyValue("margin-right");
const margin1 = margin.slice(0,3)
const margin2 = getComputedStyle(SlideTest[count]).getPropertyValue("margin-left");
const margin3 = margin2.slice(0,3)
console.log(typeof(Number(margin1)));

const size = SlideTest[count].clientWidth + Number(margin1) ;
const size1 = 960;
const size2 = 1920;
//console.log(SlideTest[count].clientWidth + 200);
//console.log((getComputedStyle(SlideTest[count]).getPropertyValue("margin-right")));
console.log(size);

for(i = 0; i <= SlideTest.length - 1;i++){
    if(i == 1){
        SlideTest[i].style.opacity = '1';
        SlidePic[i].style.opacity = '1';
        
    }
    else{
        SlideTest[i].style.opacity = '0';
        SlidePic[i].style.opacity = '0';
    } 
}
Setslide.style.transform = 'translateX(' + (-size * count) + 'px)';
//SlideTest[count].style.opacity = '0';
SetPic.style.transform = 'translateX(' + (-size1*count)+ 'px)';
// SetBg.style.transform = 'translateX(' + (-size2*count)+ 'px)';

NextBt.addEventListener('click', () => {
    
    if(count >= 13) return;
    Setslide.style.transition = "transform 0.4s ease-in-out";
    SlideTest[count].style.transition = "0.4s";
    SlidePic[count].style.transition = "0.4s";
    SlideTest[count -1].style.transition = "0.4s";
    SlidePic[count-1].style.transition = "0.4s";
    SetPic.style.transition = "transform 0.4s ease-in-out";
    // SetBg.style.transition = "transform 0.4s ease-in-out";
    count++;
    Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
    SlideTest[count].style.opacity = '1';
    SlideTest[count -1].style.opacity = '0';
    SlidePic[count].style.opacity = '1';
    SlidePic[count -1].style.opacity = '0';
    SetPic.style.transform = 'translateX(' + (-size1*count) + 'px)';
    // SetBg.style.transform = 'translateX(' + (-size2*count)+ 'px)';
    //console.log(count);
    //console.log(SlideTest[count].className);

});
PreviousBt.addEventListener('click', () => {
    if(count <= 0) return;
    Setslide.style.transition = "transform 0.4s ease-in-out";
    SlideTest[count].style.transition = "0.4s";
    SlidePic[count].style.transition = "0.4s";
    SlideTest[count+1].style.transition = "0.4s";
    SlidePic[count+1].style.transition = "0.4s";
    SetPic.style.transition = "transform 0.4s ease-in-out";
    // SetBg.style.transition = "transform 0.4s ease-in-out";    
    count--;
    
    Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
    SlideTest[count].style.opacity = '1';
    SlideTest[count + 1].style.opacity = '0';
    SlidePic[count].style.opacity = '1';
    SlidePic[count + 1].style.opacity = '0';
    SetPic.style.transform = 'translateX(' + (-size1*count) + 'px)';
    // SetBg.style.transform = 'translateX(' + (-size2*count)+ 'px)';
    //console.log(count);
    //console.log(SlideTest[count].className);
    
});
Setslide.addEventListener('transitionend', () => {
    //console.log(SlideTest[2]);
    if(SlideTest[count].className ==="FirstdescribeGame"){
        
        //console.log(SlideTest[count].className);
        
        count = 1 ;
        Setslide.style.transition = "none";
        SlideTest[count].style.transition = "none";
        SlideTest[count].style.opacity = '1';
        SlidePic[count].style.transition = "none";
        SlidePic[count].style.opacity = '1';
        SetPic.style.transition = "none";
        // SetBg.style.transition = "none"; 
        Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
        SetPic.style.transform = 'translateX(' + (-size1*count) + 'px)';
        // SetBg.style.transform = 'translateX(' + (-size2*count)+ 'px)';
        console.log(count);
        //console.log(SlideTest[count].className);
    }      
    if(SlideTest[count].className ==="LastdescribeGame"){
        
        count = SlideTest.length - 2;
        Setslide.style.transition = "none";
        SlideTest[count].style.transition = "none";
        SlideTest[count].style.opacity = '1';
        SlidePic[count].style.transition = "none";
        SlidePic[count].style.opacity = '1';
        SetPic.style.transition = "none";
        // SetBg.style.transition = "none"; 
        Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
        SetPic.style.transform = 'translateX(' + (-size1*count) + 'px)';
        // SetBg.style.transform = 'translateX(' + (-size2*count)+ 'px)';
        console.log('inw');
        console.log(count);
        console.log(SlideTest[count].className);
    }
            
            
    
    //if(SlideTest[count].className === "FirstdescribeGame" ){
    //    console.log("inw");
    //    console.log(count);
    //    count = SlideTest.length - 2 ;
    //    
    //    Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
    //    
    //}
    //if(SlideTest[count].className === "LastdescribeGame" ){
    //    console.log(count);
    //    console.log("inw");
    //    count = 0;
    //    Setslide.style.transform = 'translateX(' + (-size*count) + 'px)';
    //    
    //}
    
});










// ---------------------------------------------



