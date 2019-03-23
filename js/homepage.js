function setStarsColor(elem, number, color){
    if ( number <= elem.childElementCount ){
        for( var i = 0; i < number; i++ ){
            elem.children[i].style.color = color;
        }
    } else{
        console.log("number more than elem.childElementCount");
    }
}

const sld1 = document.getElementById("slide1");
        sld2 = document.getElementById("slide2"),
        sld3 = document.getElementById("slide3"),
        sld4 = document.getElementById("slide4"),
        sld5 = document.getElementById("slide5"),
        sld6 = document.getElementById("slide6"),
        sld7 = document.getElementById("slide7"),
        sld8 = document.getElementById("slide8"),
        sld9 = document.getElementById("slide9");

setStarsColor(sld1, 4, "#6e774a");
setStarsColor(sld2, 4, "#6e774a");
setStarsColor(sld3, 3, "#6e774a");
setStarsColor(sld4, 5, "#6e774a");
setStarsColor(sld5, 2, "#6e774a");
setStarsColor(sld6, 1, "#6e774a");
setStarsColor(sld7, 5, "#aab384");
setStarsColor(sld8, 4, "#aab384");
setStarsColor(sld9, 3, "#aab384");

$( "#accordion" ).accordion();
