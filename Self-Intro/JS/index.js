var i = 1;
function onloadImg(){
    setInterval('changePage()',3000);
    setInterval('changeImg()',3000);
}

function changeImg(){
    var img = new Image();
    var path = "SRC/IMG/1. Home/";
    var imgs = new Array('IMG01.jpg', 'IMG02.jpg', 'IMG03.jpg');
    var element = document.getElementById("HomeImg");
    
    img.src = path+imgs[i];
    element.src = img.src;
    
    i ++;
    i %= 3;
}

function changePage(){
    var elementOrders = document.getElementById("HomeImgContainer").getElementsByTagName('svg');
    var j = i > 0 ? i-1: 2;
    elementOrders[i].style.backgroundColor = '#AAAEB5';
    elementOrders[j].style.backgroundColor = '#E7DDDE';    


}

  