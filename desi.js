// onload handelar
window.onload=()=>{
    main();
}
function main(){
    const main= document.getElementById('main');
    const btn = document.getElementById('btn');

    btn.addEventListener('click' , function(){
        const bgcolour = generateRGB();
        main.style.backgroundcolour=bgcolour;
    });
}

// random rgb colour ganarator 
function generateRGB(){
  const red =  Math.floor(Math.random()*255);
  const green =  Math.floor(Math.random()*255);
  const blue =  Math.floor(Math.random()*255);
  
return`rgb(${red} , ${green} , ${blue})`;
}



// refarence connect


// click event
