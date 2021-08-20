var ball;
var hypnoticBall, database; // (P1)
var posicion;//(P2)

function setup(){
    database = firebase.database(); //(P3)
    console.log(database);//(P4)
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10); //(P5 cambiar ball por hypnoticBall)
    hypnoticBall.shapeColor = "red";
    
    var hypnoticBallPosition = database.ref('pelota/posicion');//(P6)
    hypnoticBallPosition.on("value",readPosition,showError);//(P7)
}

function draw(){
    background("white");

    if(posicion !== undefined){ //(E1)
        if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
    }
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