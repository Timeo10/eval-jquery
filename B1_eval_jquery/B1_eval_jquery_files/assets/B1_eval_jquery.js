/* --------------------------------------------------------------------------

Votre code ici

-------------------------------------------------------------------------- */
function switchRedSquare() {

    $('.custom-control').on('click', function () {
        $('.custom-control').addClass('is-active');
        $(this).removeClass('is-active');


    })


}

function controlRedSquare() {
    $('.redsquare-controls').removeAttr("disabled", false);

}


function jumbotron() {

   $('.jumbotron ul').addClass('list-group');
   $(' .jumbotron li').addClass('list-groupe-item');

}