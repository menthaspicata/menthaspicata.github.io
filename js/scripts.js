$( document ).ready(function() {

    $(".main").onepage_scroll();


    $('.portfolio').slick({
        nextArrow: '<i class="fa fa-chevron-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left"></i>',
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});



//skills  bar

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();





$( document ).ready(function() {

//*************************************** HTML-circle progress bar **********************************//

    var canvas = document.getElementById("HTML");
    var cxtHTML = canvas.getContext('2d');

    var width = 300;
    var height = 230;
    canvas.width = width;
    canvas.height = height;

    var center = {x: width/2, y: height/2};
    var value = .90;
    var initialValue = 0;

    var rotation =   Math.PI /2;



    function drawHTML(){

        if (Math.abs(initialValue - value) < .0)
            initialValue = value;

        if (initialValue != value) {
            initialValue += (value - initialValue)/50;
            $('.widgetHTML h2').html(Math.round(initialValue * 100) + '%');
        }

        cxtHTML.clearRect(0,0,width,height);
        cxtHTML.save();

        cxtHTML.translate(center.x,center.y);
        cxtHTML.rotate(rotation);

        cxtHTML.lineWidth = 18;
        cxtHTML.beginPath();
        cxtHTML.arc(0,  0, 100, 0, Math.PI*2, false);
        cxtHTML.strokeStyle ='#dadada';
        cxtHTML.shadowBlur = 10;
        cxtHTML.shadowColor="rgba(0,0,0,.5)";
        cxtHTML.shadowOffsetX = 0;
        cxtHTML.shadowOffsetY = 4;
        cxtHTML.stroke();

        cxtHTML.beginPath();
        cxtHTML.arc(0, 0, 100, rotation, Math.PI * 2 * initialValue + rotation, false);
        cxtHTML.strokeStyle = '#005F2E';
        cxtHTML.shadowBlur = 10;
        cxtHTML.shadowColor="rgba(0,0,0,.5)";
        cxtHTML.shadowOffsetX = 0;
        cxtHTML.shadowOffsetY = 4;
        cxtHTML.stroke();

        cxtHTML.restore();
        requestAnimFrame(drawHTML);
    };

//*************************************** CSS-circle progress bar **********************************//

    var canvasCSS = document.getElementById("CSS");
    var cxtCSS = canvasCSS.getContext('2d');
    canvasCSS.width = width;
    canvasCSS.height = height;
    var valueCSS = .86;
    var initialValueCSS = 0;

    function drawCSS(){

        if (Math.abs(initialValueCSS - valueCSS) < .0)
            initialValueCSS = valueCSS;

        if (initialValueCSS != valueCSS) {
            initialValueCSS += (valueCSS - initialValueCSS)/50;
            $('.widgetCSS h2').html(Math.round(initialValueCSS * 100) + '%');
        }

        cxtCSS.clearRect(0,0,width,height);
        cxtCSS.save();

        cxtCSS.translate(center.x,center.y);
        cxtCSS.rotate(rotation);

        cxtCSS.lineWidth = 18;
        cxtCSS.beginPath();
        cxtCSS.arc(0,  0, 100, 0, Math.PI*2, false);
        cxtCSS.strokeStyle ='#dadada';
        cxtCSS.shadowBlur = 10;
        cxtCSS.shadowColor="rgba(0,0,0,.5)";
        cxtCSS.shadowOffsetX = 0;
        cxtCSS.shadowOffsetY = 4;
        cxtCSS.stroke();

        cxtCSS.beginPath();
        cxtCSS.arc(0, 0, 100, rotation, Math.PI * 2 * initialValueCSS + rotation, false);
        cxtCSS.strokeStyle = '#005F2E';
        cxtCSS.shadowBlur = 10;
        cxtCSS.shadowColor="rgba(0,0,0,.5)";
        cxtCSS.shadowOffsetX = 0;
        cxtCSS.shadowOffsetY = 4;
        cxtCSS.stroke();

        cxtCSS.restore();
        requestAnimFrame(drawCSS);
    };


//*************************************** WP-circle progress bar **********************************//


    var canvasWP = document.getElementById("WP");
    var cxtWP = canvasWP.getContext('2d');
    canvasWP.width = width;
    canvasWP.height = height;
    var valueWP = .70;
    var initialValueWP = 0;

    function drawWP(){

        if (Math.abs(initialValueWP - valueWP) < .0)
            initialValueWP = valueWP;

        if (initialValueWP != valueWP) {
            initialValueWP += (valueWP - initialValueWP)/50;
            $('.widgetWP h2').html(Math.round(initialValueWP * 100) + '%');
        }

        cxtWP.clearRect(0,0,width,height);
        cxtWP.save();

        cxtWP.translate(center.x,center.y);
        cxtWP.rotate(rotation);

        cxtWP.lineWidth = 18;
        cxtWP.beginPath();
        cxtWP.arc(0,  0, 100, 0, Math.PI*2, false);
        cxtWP.strokeStyle ='#dadada';
        cxtCSS.shadowBlur = 10;
        cxtWP.shadowColor="rgba(0,0,0,.5)";
        cxtWP.shadowOffsetX = 0;
        cxtWP.shadowOffsetY = 4;
        cxtWP.stroke();

        cxtWP.beginPath();
        cxtWP.arc(0, 0, 100, rotation, Math.PI * 2 * initialValueWP + rotation, false);
        cxtWP.strokeStyle = '#005F2E';
        cxtWP.shadowBlur = 10;
        cxtWP.shadowColor="rgba(0,0,0,.5)";
        cxtWP.shadowOffsetX = 0;
        cxtWP.shadowOffsetY = 4;
        cxtWP.stroke();

        cxtWP.restore();
        requestAnimFrame(drawWP);
    };

//*************************************** JS-circle progress bar **********************************//


    var canvasJS = document.getElementById("JS");
    var cxtJS = canvasJS.getContext('2d');
    canvasJS.width = width;
    canvasJS.height = height;
    var valueJS = .69;
    var initialValueJS = 0;

    function drawJS(){

        if (Math.abs(initialValueJS - valueJS) < .0)
            initialValueJS = valueJS;

        if (initialValueJS != valueJS) {
            initialValueJS += (valueJS - initialValueJS)/50;
            $('.widgetJS h2').html(Math.round(initialValueJS * 100) + '%');
        }

        cxtJS.clearRect(0,0,width,height);
        cxtJS.save();

        cxtJS.translate(center.x,center.y);
        cxtJS.rotate(rotation);

        cxtJS.lineWidth = 18;
        cxtJS.beginPath();
        cxtJS.arc(0,  0, 100, 0, Math.PI*2, false);
        cxtJS.strokeStyle ='#dadada';
        cxtJS.shadowBlur = 10;
        cxtJS.shadowColor="rgba(0,0,0,.5)";
        cxtJS.shadowOffsetX = 0;
        cxtJS.shadowOffsetY = 4;
        cxtJS.stroke();

        cxtJS.beginPath();
        cxtJS.arc(0, 0, 100, rotation, Math.PI * 2 * initialValueJS + rotation, false);
        cxtJS.strokeStyle = '#005F2E';
        cxtJS.shadowBlur = 10;
        cxtJS.shadowColor="rgba(0,0,0,.5)";
        cxtJS.shadowOffsetX = 0;
        cxtJS.shadowOffsetY = 4;
        cxtJS.stroke();

        cxtJS.restore();
        requestAnimFrame(drawJS);
    };

    //*************************************** PHP-circle progress bar **********************************//


    var canvasPHP = document.getElementById("PHP");
    var cxtPHP = canvasPHP.getContext('2d');
    canvasPHP.width = width;
    canvasPHP.height = height;
    var valuePHP = .67;
    var initialValuePHP = 0;

    function drawPHP(){

        if (Math.abs(initialValuePHP - valuePHP) < .0)
            initialValuePHP = valuePHP;

        if (initialValuePHP != valuePHP) {
            initialValuePHP += (valuePHP - initialValuePHP)/50;
            $('.widgetPHP h2').html(Math.round(initialValuePHP * 100) + '%');
        }

        cxtPHP.clearRect(0,0,width,height);
        cxtPHP.save();

        cxtPHP.translate(center.x,center.y);
        cxtPHP.rotate(rotation);

        cxtPHP.lineWidth = 18;
        cxtPHP.beginPath();
        cxtPHP.arc(0,  0, 100, 0, Math.PI*2, false);
        cxtPHP.strokeStyle ='#dadada';
        cxtPHP.shadowBlur = 10;
        cxtPHP.shadowColor="rgba(0,0,0,.5)";
        cxtPHP.shadowOffsetX = 0;
        cxtPHP.shadowOffsetY = 4;
        cxtPHP.stroke();

        cxtPHP.beginPath();
        cxtPHP.arc(0, 0, 100, rotation, Math.PI * 2 * initialValuePHP + rotation, false);
        cxtPHP.strokeStyle = '#005F2E';
        cxtPHP.shadowBlur = 10;
        cxtPHP.shadowColor="rgba(0,0,0,.5)";
        cxtPHP.shadowOffsetX = 0;
        cxtPHP.shadowOffsetY = 4;
        cxtPHP.stroke();

        cxtPHP.restore();
        requestAnimFrame(drawPHP);
    };


    drawHTML();
    drawCSS();
    drawWP();
    drawJS();
    drawPHP();

});