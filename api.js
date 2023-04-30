

$(document).ready(function() {
    $.get("https://randomuser.me/api/",
        function (data) {
            console.log(data);


            let imagen=data.results[0].picture.large;
            
            let parrafo = $("<img >");
            parrafo.src.text(imagen);
            $("#Foto").append(parrafo);

        }
    )
  });
