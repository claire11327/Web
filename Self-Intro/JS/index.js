var i = 1;
function onloadImg(){
    setInterval('changeImg()',3000);
}

function changeImg(){
    var img = new Image();
    var path = "SRC/IMG/1. Home/";
    var imgs = new Array('IMG01.jpg', 'IMG02.jpg', 'IMG03.jpg');
    var element = document.getElementById("HomeImg");
    var elementOrders = document.getElementById("HomeImgContainer").getElementsByTagName('svg');
    
    img.src = path+imgs[i];
    element.src = img.src;
    if(elementOrders) {
        for(var j = 0; j < 3; j++){
            elementOrders[j].style.backgroundColor = '#E7DDDE';    
        }
        setTimeout(function(){},500);
        elementOrders[i].style.backgroundColor = '#AAAEB5';
    }
    
    i ++;
    i %= 3;
}


  