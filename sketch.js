var database; // (P1)
var posicion;//(P2)

function setup(){
    database = firebase.database(); //(P3)
    console.log(database);//(P4)
    createCanvas(400,400);
    
}

function draw(){
    background("white");

    
    drawSprites();
}
function writePosition(x,y){
    database.ref('pelota/posicion').set({
        'x': posicion.x + x,
        'y': posicion.y + y
    })
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function readPosition(data){ //(P8) CREAR LA FUNCION CON posicion que es la base de datos que creamos
posicion = data.val();
console.log(posicion.x);
hypnoticBall.x = posicion.x;
hypnoticBall.y = posicion.y;
}

function showError(){ //(P9)
    console.log("Error in writing to the database");
  }