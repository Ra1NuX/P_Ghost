function CreateCanvas(){
    const $CanvasDiv =  $("#CanvasDiv");
    const height = screen.height;
    const CanvasXY = height - height * 0.2;
    //$Canvas.html(' ');
    //$Canvas.html('<canvas id="canvasBase" class="canvasBase" height ="'+CanvasXY+'px" width="'+CanvasXY+'px"></canvas>');
    const NBox = 20; 
    const TBox = CanvasXY / NBox ; 

    // Borrar 
    $CanvasDiv.html('<div class="bgmap"><canvas id="canvasBase"></canvas></div>')

  
   

    var canvas = document.getElementById('canvasBase');
    var divcanvas = document.getElementsByClassName('bgmap');
    var ctx = canvas.getContext('2d');
     

    canvas.width = CanvasXY + 24 ;
    canvas.height = CanvasXY - 101 ; 
    

    var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        sideLength = 25,
        boardWidth = 20,
        boardHeight = 20;

    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

  
        ctx.strokeStyle = "rgba(255,255,255,0.13)";
        ctx.lineWidth = 1;

        drawBoard(ctx, boardWidth, boardHeight);

        canvas.addEventListener("mousemove", function(eventInfo) {
            var x,
                y,
                hexX,
                hexY,
                screenX,
                screenY,
                rect;

            rect = canvas.getBoundingClientRect();

            x = eventInfo.clientX - rect.left;
            y = eventInfo.clientY - rect.top ;

            hexY = Math.floor(y / (hexHeight + sideLength));
            hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

            screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
            screenY = hexY * (hexHeight + sideLength);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawBoard(ctx, boardWidth, boardHeight);

            // Check if the mouse's coords are on the board
            if(hexX >= 0 && hexX < boardWidth) {
                if(hexY >= 0 && hexY < boardHeight) {
                    
                    ctx.fillStyle = "rgba(128,128,0,0.5)";
                    drawHexagon(ctx, screenX, screenY, true);
                    
                }
            }
            
        });
        canvas.addEventListener('click', function(e){
            var x,y,hexX,hexY,rect;

            rect = canvas.getBoundingClientRect();

            x = e.clientX - rect.left;
            y = e.clientY - rect.top ;

            hexY = Math.floor(y / (hexHeight + sideLength));
            hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);
            console.log(hexX + ', ' +hexY);




        });
    }nan

    function drawBoard(canvasContext, width, height) {
        var i,
            j;

        for(i = 0; i < width; ++i) {
            for(j = 0; j < height; ++j) {
                drawHexagon(
                    ctx, 
                    i * hexRectangleWidth + ((j % 2) * hexRadius), 
                    j * (sideLength + hexHeight), 
                    false
                );
            }
        }
    }

    function drawHexagon(canvasContext, x, y, fill) {           
        var fill = fill || false;

        canvasContext.beginPath();
        canvasContext.moveTo(x  + hexRadius, y );
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
        canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
        canvasContext.lineTo(x, y + sideLength + hexHeight);
        canvasContext.lineTo(x, y + hexHeight);
        canvasContext.closePath();

        if(fill) {
            canvasContext.fill();
        } else {
            canvasContext.stroke();
        }
    }






   
            const x = 'Collider';
            const o = 'Player';
            const m = 'movement';
            const MtrzMap = [

                [0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,x,0,0,0,0,0,0,0,0,0,0,],
                [0,0,0,0,0,0,0,0,0,0,x,x,x,0,0,0,0,0,0,0,],
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
               
                    
                const MovPlayerTo = (XAct, YAct, XDest, YDest) => {
                    this.x = XAct ; 
                    this.y = YAct;
                    this.mx = XDest;
                    this.my = YDest;

                    MtrzMap[this.x][this.y] = o;
                    MtrzMap[this.mx][this.my] = m;

                    
                    const list = new ObjList()
                    var contI = 0;
                    var xii = this.x;
                    var yii = this.y;
                        while( contI != 1){
                            if(MtrzMap[xii][yii] == m){
                                contI = 1 ; 
                            }
                        }
                } 
                
                
        // MovPlayerTo(1,2,3,4);
}
