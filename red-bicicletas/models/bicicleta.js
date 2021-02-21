var bicicleta = function(id,color,modelo,ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

bicicleta.prototype.toString = function(){
    return "id: " + this.id + "| color: " + this.color;
}


bicicleta.allBicis = [];
bicicleta.add = function(aBici){
    bicicleta.allBicis.push(aBici);
}

bicicleta.findById = function(aBiciID){
    var aBici = bicicleta.allBicis.find(x => x.id == aBiciID);
    if(aBici)
        return aBici;
    else
        throw new Error(`No existe esa bicicleta ${aBiciID}`);
}


bicicleta.removeById = function(aBiciID){
    //var aBici = bicicleta.findById(aBiciID);
    for(var i=0;i < bicicleta.allBicis.length;i++){
        if(bicicleta.allBicis[i].id == aBiciID){
            bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

var a = new bicicleta(1,'rojo','urbana',[-32.892808164003014, -68.85092380684412]);
var b = new bicicleta(2,'blanca','urbana',[-32.88942076219836, -68.84989383868012]);

bicicleta.add(a);
bicicleta.add(b);


module.exports = bicicleta;