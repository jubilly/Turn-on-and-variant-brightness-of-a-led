$(document).ready(function() {

    $("#buttonn").click(function() {
        var a = $("#quantidade").val();
        var numero = parseInt(a);
        for (var b = 0; b < numero; b++) {
        //  $('#divcriacao').append("<input type='range'>  "+"  </br></br>  "); 
         // $('#divcriacao').append("<button id='button"+b+"'>botao numero "+b+"</button>");
         //<button id="button">Gerar</button>
         //<form oninput=x.value=parseInt(a.value)>0 
        $('#divcriacao').append(
            "<form oninput=x.value=parseInt(a.value)><input type= 'range' id='a' class= 'custom display-value' min= '0' max='100' value ='0'><output name = x for=a>0</output>%</form></br></br>");
         
        }
        
    });
});