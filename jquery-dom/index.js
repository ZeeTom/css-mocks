// function sayHi (){
//     console.log(`Let’s get ready to party with jQuery!`)
// }

//1.
$(console.log(`Let’s get ready to party with jQuery!`));

//2.
$('article img').addClass('image-center');

//3.
let lastParagraph = $('article p');
$('article p').eq(lastParagraph.length-1).remove();

//4.
$('#title').css('font-size', `${Math.random()*100}px`);

//5.
$('aside ol').append('<li>Hello</li>');

//6.
$('aside').empty().append('<p>Sorry for the list.</p>')

//7.
$('input').on('input', function(evt){
    let $red = $('input').eq(0).val();
    let $blue = $('input').eq(1).val();
    let $green = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${$red}, ${$blue}, ${$green})`);
})

//8.
$('img').on('click', function(evt){
    evt.target.remove();
})


