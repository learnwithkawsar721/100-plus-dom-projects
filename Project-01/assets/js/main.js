window.onload = () => {
	main();
};

// create main function
main=()=>{
    const root = document.getElementById('root');
    const btn = document.getElementById('change_btn');
    btn.addEventListener('click',function(){
        const color = generateRGBColor();
        root.style.background = color;
    });
}
// create generateRGBColor function
function generateRGBColor(){
    // rgb(0,0,0) to rgb(255,255,255)
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}