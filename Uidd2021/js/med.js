//url : notify-detail

function next() {
    
    choices = check();
    if(choices){
        // display:none     classname="pillcheck" 
        $(".pillCheck")[0].style.display = 'none';

        // display & write  innerhtml of classname="pillDecision"
        $(".pillChosen")[0].style.display = 'initial';
        
        var string = '<div class="row row-cols-3">'
        choices.forEach(function(item) {
            string = string.concat('<div class="med-imgs col-sm-4 mt-3">');
            string = string.concat('<img src="../../src/img/notify/'+item+'">');
            //                        .medName.shadow(id="medName_"+index)
            // | #{nameData[index]}
            string = string.concat('<div class="medName shadow" id="medName_5">心臟藥</div>');
            string = string.concat('</div>');
        })
        string = string.concat('</div>');
        $(".pillChosen")[0].innerHTML = string
        console.log(string);
        // display:         timeCheck
        $(".timeCheck")[0].style.display = 'initial';
        
        // button display
        $("#nextbtn").css('display','none');
        $("#backbtn").css('display','initial');
        $("#submitbtn").css('display','initial');

    }
    
}


function back() {
    // display:     classname="pillcheck" 
    $(".pillCheck")[0].style.display = 'initial';
    // display:none classname="pillChosen"
    $(".pillChosen")[0].style.display = 'none';
    // display:none .timeCheck
    $(".timeCheck")[0].style.display = 'none';

    // button display
    $("#nextbtn").css('display','initial');
    $("#backbtn").css('display','none');
    $("#submitbtn").css('display','none');
}

function check(){
    var check_val = [];
    $('input[type="checkbox"]').each(function() {
        if(this.checked)
            check_val.push(this.id)  
    });
    return check_val;
}


//$('#submitbtn').on('click',      '')
