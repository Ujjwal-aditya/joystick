var database,Touches,position,updatePosition;

function setup()
{
    createCanvas(600,600);
    database = firebase.database();
    touches= [];

    var touchesRef = database.ref('touches');
    touchesRef.on("value",function(data){
        position  = data.val();
    })
    
    updatePosition = createButton("update position")
    updatePosition.position(50,50);
    //updatePosition.mousePressed(UpdatePosition)
}

function draw()
{
   // console.group(touches);
    for( var i =0 ; i<touches.length ; i++)
    {   position.x = touches[i][1];
        console.log(position.x+","+position.y);
        position.y = touches[i][2];
    }

   
}

function UpdatePosition(x,y)
{
    database.ref('touches').update({
        'x' : position.x+x,
        'y' : position.y+y
    })
}

function keyPressed()
{
    if(keyCode==32)
    {
        UpdatePosition(50,60);
    }
}