
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
const Players = {}

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
            $Canvas.html('');
//StartGame(Players);


                // Podemos recorrer un Objeto con el siguiente bucle.
                /*  
                for(const i in Players){
                    if(Players[i].id == 3){console.log(i,  Players[i]);};
                        
                }
            */
        }
        

});



