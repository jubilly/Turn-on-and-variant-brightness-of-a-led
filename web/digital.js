$(document).ready(function() {

    $("#button").click(function() {
        var a = $("#quantidade").val();
        var numero = parseInt(a);
        for (var b = 0; b < numero; b++) {
           // $('#secundaria').append("<button id = button " + b + "> Entrada " + b + "</button> <button id = button2 " + b + "> Saída " + b + "</button></br></br>");
        //    $('#secundaria').append(" <button id='lampada'" + " data-state='' " + '>' + "Led 01 </button>");   
           $('#secundaria').append('<button id="lampada" data-state="off" alt="off" > Led 01 </button>');   
        }
    });
});
