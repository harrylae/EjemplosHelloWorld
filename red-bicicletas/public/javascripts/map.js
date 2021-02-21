var mymap = L.map('main_map').setView([-32.8967174,-68.836055], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "API/bicicletas",
    success: function(result){
        console.log(result);

        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion,{title: bici.id}).addTo(mymap)
        });
    }
})