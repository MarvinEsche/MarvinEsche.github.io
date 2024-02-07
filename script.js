const topLvl = document.getElementById("topLvl");
const imgcon = document.getElementById("imgcon");
const landing = document.getElementById("landing");
const imgResume = document.getElementById("imgResume");
const arrow = document.getElementById("arrow");



function adjustContent(){
    let imgSpace;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let ratio = width / height;
    let vh = height/100;
    let vw = width/100;

    if(ratio <= 1){
        //vertical
        imgSpace = 5 * vh + landing.clientHeight + window.scrollY * 1/7;
        let landingSpace = 85 * vh - landing.clientHeight - window.scrollY * 3 / 2;
        landing.style.marginBottom = landingSpace +"px";
        imgcon.style.top =  imgSpace +"px";
        imgResume.src = "./img/lebenslaufVert.png";
    }else{
        //horisontal
        imgSpace = 10 * vh + window.scrollY * 1/10
        let landingSpace = 80 * vh - window.scrollY * 3/4;
        landing.style.height = landingSpace +"px"
        imgcon.style.top =  imgSpace +"px"
        imgResume.src = "./img/lebenslauf.png"
    }

    if(window.scrollY <= 150){
        let v = 1 - window.scrollY / 150;
        arrow.style.color = "rgba( 255, 255, 255, " + v + ")"
    }
    

}


window.addEventListener("scroll", adjustContent);
window.addEventListener('resize', adjustContent);
adjustContent();