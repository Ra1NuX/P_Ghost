
/*
const Players = {
    'Player0':{ 
        id: 0,
        name: 'Antonio',
        Inventario: 
            [
                'Espada','Flecha', 
            ],
            
        


    },
    'Player1':{ 
        id: 1,
        name: 'Pedro',
        inventario: 
            [
                'Arco', 'Cuerda',
            ],

    },
    
}
*/
var ID = 0;
var cont = 0 ; 
const Players = {   

    
}

const $Canvas = $('#Canvas');
$Canvas.html("<form id='BtnPName'><div style='background-color: black; width:200px; height:200px;'><input id='playerName'></input> <button>Pulsame</button></div></form>")


var i = 'Player0'; 
var aux = 0 ; 


const $PName = $('#playerName');
const $BtnPName = $('#BtnPName');


for(i in Players){
    aux ++; 
  //  console.log(Players[i]);
    i = 'Player' + aux + '';
    console.log(i);
};

$BtnPName.submit(e => {
        e.preventDefault();
        if(!$PName.val()) return;

        if(cont != 10){
            console.log($PName.val())
            
                Players[$PName.val() + ''] = {
                    id: ID,
                    inventory: 
                    {
                       Weapon: '',
                       Arrows: 0,


                    } }
            ID++ ; 
            cont++ ;

        }else{
CreateCanvas();
//StartGame(Players);


                // Podemos recorrer un Objeto con el siguiente bucle.
                /*  
                for(const i in Players){
                    if(Players[i].id == 3){console.log(i,  Players[i]);};
                        
                }
            */
        }
        
    //$Canvas.html('');
});


function CreateCanvas(){
    const height = screen.height;
    const CanvasXY = height - height * 0.2;
    $Canvas.html('<canvas id="canvasBase" class="canvasBase" height ="'+CanvasXY+'px" width="'+CanvasXY+'px"></canvas>');
    const NBox = 20; 
    const TBox = CanvasXY / NBox ; 

    // Borrar 

        const canvas_Draw = document.getElementById('canvasBase');
        var ctx = canvas_Draw.getContext("2d");
        for (var y=0; y<=CanvasXY; y=y+TBox){
            ctx.moveTo(0,y);
            ctx.lineTo(CanvasXY,y);
        }
        for (var x=0; x<=CanvasXY; x=x+TBox){
            ctx.moveTo(x,0);
            ctx.lineTo(x,CanvasXY);
        }
        ctx.strokeStyle = "#f00";
        ctx.stroke();
            const x = 'x'
            const o = 'o'
            const MtrzMap = [
                [0,o,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,x,x,x,x,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,],
                [x,0,0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,],
                [0,x,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,],
                [0,0,x,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,],
                [0,0,0,x,x,0,0,0,0,x,0,0,0,0,0,x,x,0,0,0,],
                [0,0,0,0,0,x,x,0,x,x,0,0,0,0,0,x,x,x,0,0,],
                [0,0,0,0,0,0,0,x,0,0,0,0,0,0,x,x,x,x,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,x,x,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],

            ]; 

                    
                
        //
}

