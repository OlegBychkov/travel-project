"use strict"

window.onload = function(){
    const parallax = document.querySelector('.parallax');
    const girl = document.querySelector('.parallax__girl');

    if(parallax) {

        const forGirl = 70;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0; 

        function setMouseParalaxStyle(){
            const distX =  coordXprocent - positionX;
            const distY =  coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            girl.style.cssText = `transform:translate(${positionX / forGirl}%,${positionY / forGirl}% );`;
            
            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();

        parallax.addEventListener('mousemove', (e)=>{
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;  
            console.log(coordXprocent)
        })
    }
}