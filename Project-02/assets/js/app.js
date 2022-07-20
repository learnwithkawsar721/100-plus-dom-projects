// 
window.onload =()=>{
    main();
}
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change_btn');
    const input = document.getElementById('input');
    btn.addEventListener('click',function(){
        const color = generateHexColor();
        root.style.background = color;
        input.value=color;
    });
}

function generateHexColor(){
    // #000000 to #ffffff
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}