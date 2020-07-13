"use strict";
var gl;
var points;
var pos = 0.1;
var go = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  ];
var speed = [ 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  ];
var modelViewMatrixLoc;
var leftright = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0  ];
var initpos;
var bufferId;
var index = 0; // 버퍼인ㄷ
var objectnum = 1;
var make = 0;
var vertices = [];
var newx;
var newy;
var col = 40;
var life = 3;
var cBuffer;
var vColor;
var vBuffer;
var vPosition;
var tBuffer;
var vTexCoord;
//var image;
var program;
var texCoordsArray = [];

var texture;
var texture1;

function configureTexture( image ) {
   texture = gl.createTexture();
   gl.bindTexture( gl.TEXTURE_2D, texture );
   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
   gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA,
         gl.RGBA, gl.UNSIGNED_BYTE, image );
   gl.generateMipmap( gl.TEXTURE_2D );
   gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
         gl.NEAREST_MIPMAP_LINEAR );
   gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

}

function configureTexture1( image ) {
   texture1 = gl.createTexture();
   gl.bindTexture( gl.TEXTURE_2D, texture1 );
   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
   gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA,
         gl.RGBA, gl.UNSIGNED_BYTE, image );
   gl.generateMipmap( gl.TEXTURE_2D );
   gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
         gl.NEAREST_MIPMAP_LINEAR );
   gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

}

function move() {
   var canvas = document.querySelector('canvas#mine');
   var ctx = canvas.getContext('2d');
   var paddleHeight = Number(document.getElementById("size").innerHTML);
   var paddleWidth = Number(document.getElementById("size").innerHTML);
   var paddleX = (canvas.width - paddleWidth) / 2;
   var paddleY = (canvas.height - paddleHeight) / 2;
   var rightPressed = false;
   var leftPressed = false;
   var upPressed = false;
   var downPressed = false;
   var img = new Image;
   img.src = 'smallFish.png';
   document.addEventListener("keydown", keyDownHandler, false);
   document.addEventListener("keyup", keyUpHandler, false);

   function keyDownHandler(e) {
      if (e.keyCode == 39) {
         rightPressed = true;
      }
      if (e.keyCode == 37) {
         leftPressed = true;
      }
      if (e.keyCode == 38) {
         downPressed = true;
      }
      if (e.keyCode == 40) {
         upPressed = true;
      }
   }
   function keyUpHandler(e) {
      if (e.keyCode == 39) {
         rightPressed = false;
      }
      if (e.keyCode == 37) {
         leftPressed = false;
      }
      if (e.keyCode == 38) {
         downPressed = false;
      }
      if (e.keyCode == 40) {
         upPressed = false;
      }
   }

   function drawPaddle() {
      ctx.beginPath();
      if(rightPressed)
         img.src = 'smallFish.png';
      if(leftPressed)
         img.src = 'smallFish1.png';
      //ctx.drawImage(image,0,0,512,512);
      paddleHeight = Number(document.getElementById("size").innerHTML);
      paddleWidth = Number(document.getElementById("size").innerHTML);
      document.getElementById("X").innerHTML=(paddleX+paddleWidth);
      document.getElementById("Y").innerHTML=(paddleY+paddleHeight);
      ctx.drawImage(img, paddleX, paddleY, paddleWidth, paddleHeight);

      ctx.closePath();
   }

   function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPaddle();
      if (rightPressed && paddleX < canvas.width - paddleWidth +50) {
         paddleX += 5;
      }
      if (leftPressed && paddleX > 0-50) {
         paddleX -= 5;
      }
      if (upPressed && paddleY < canvas.height - paddleHeight + 50) {
         paddleY += 5;
      }
      if (downPressed && paddleY > 0 -50) {
         paddleY -= 5;
      }
   }

   setInterval(draw, 10);

}
function start() {
   move();
}
window.onload = function init() {

   var canvas = document.getElementById("gl-canvas");
   gl = WebGLUtils.setupWebGL(canvas);
   if (!gl) {
      alert("WebGL isn't available");
   }
   initpos = -pos;

   gl.viewport(0, 0, canvas.width, canvas.height);
   gl.clearColor(1.0, 1.0, 1.0, 1.0);
   program = initShaders(gl, "vertex-shader", "fragment-shader");
   gl.useProgram(program);

   // Load the data into the GPU

   modelViewMatrixLoc = gl.getUniformLocation(program, "mvm");

   var image = document.getElementById("texImage");    
   configureTexture( image );

   var image1 = document.getElementById("texImage1");
   configureTexture1( image1 );

   vertices.push(vec2(-1.0,-1.0));
   vertices.push(vec2(-1.0,1.0));
   vertices.push(vec2(1.0,-1.0));
   vertices.push(vec2(1.0,1.0));

   texCoordsArray.push(vec2(0.0,0.0));
   texCoordsArray.push(vec2(0.0,1.0));
   texCoordsArray.push(vec2(1.0,0.0));
   texCoordsArray.push(vec2(1.0,1.0));

   bufferId = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
   gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

   vPosition = gl.getAttribLocation(program, "vPosition");
   gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
   gl.enableVertexAttribArray(vPosition);

   tBuffer = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
   gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

   vTexCoord = gl.getAttribLocation( program, "vTexCoord" );
   gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
   gl.enableVertexAttribArray( vTexCoord );

   document.getElementById('start').addEventListener('click', function() {
      render();
      start();
      document.getElementById("etc").style.display="block";
      document.getElementById("start").style.display = "none";

   });
};

function render() {
   gl.clear(gl.COLOR_BUFFER_BIT);
   index = 0;
   if(life!= 0){
      if (make >= 80) {
         leftright[objectnum] = Math.floor(Math.random() * 2);
         speed[objectnum] = Math.random()/80;
         var ranpos = Math.floor(Math.random() * 20) / 10 - 1;
         var cursize = Number(document.getElementById("size").innerHTML)*2/512;
         var ransize = parseInt(Math.floor(Math.random()*3));
         if (leftright[objectnum] == 0)
            var vertice = [ vec2(-1, ranpos), vec2(-1, ranpos),
               vec2(-1, ranpos), vec2(-1,ranpos)];
         else
            var vertice = [ vec2(0.8, ranpos), vec2(0.8, ranpos),
               vec2(0.8, ranpos), vec2(0.8, ranpos) ];
         if(ransize==0){
            vertice[1][1] = Number(vertice[1][1])+Number(cursize)*0.9*0.85;
            vertice[3][1] = Number(vertice[3][1])+Number(cursize)*0.9*0.85;
            vertice[2][0] = Number(vertice[2][0])+Number(cursize)*0.9*0.85;
            vertice[3][0] = Number(vertice[3][0])+Number(cursize)*0.9*0.85;
         }

         if(ransize==1){
            vertice[1][1] = Number(vertice[1][1])+Number(cursize)*0.85;
            vertice[3][1] = Number(vertice[3][1])+Number(cursize)*0.85;
            vertice[2][0] = Number(vertice[2][0])+Number(cursize)*0.85;
            vertice[3][0] = Number(vertice[3][0])+Number(cursize)*0.85;
         }
         if(ransize==2){
            vertice[1][1] = Number(vertice[1][1])+Number(cursize)*1.05;
            vertice[3][1] = Number(vertice[3][1])+Number(cursize)*1.05;
            vertice[2][0] = Number(vertice[2][0])+Number(cursize)*1.05;
            vertice[3][0] = Number(vertice[3][0])+Number(cursize)*1.05;
         }
         vertices.push(vertice[0]);
         vertices.push(vertice[1]);
         vertices.push(vertice[2]);
         vertices.push(vertice[3]);

         texCoordsArray.push(vec2(0.0,0.0));
         texCoordsArray.push(vec2(0.0,1.0));
         texCoordsArray.push(vec2(1.0,0.0));
         texCoordsArray.push(vec2(1.0,1.0));

         bufferId = gl.createBuffer();
         gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
         gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
         // Associate out shader variables with our data buffer

         vPosition = gl.getAttribLocation(program, "vPosition");
         gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
         gl.enableVertexAttribArray(vPosition);

         tBuffer = gl.createBuffer();
         gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
         gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

         vTexCoord = gl.getAttribLocation( program, "vTexCoord" );
         gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
         gl.enableVertexAttribArray( vTexCoord );

         objectnum = objectnum+1;
         make = 0;
      }
      ctm = mat4();
      gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(ctm));
      
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture1); 
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      for (var i = 1; i < objectnum; i++) {   
         if (go[i] < 2 || go[i] > 2){
            var ctm = mat4();
            newx = 2*Number(document.getElementById("X").innerHTML)/512-1;
            newy = 2*(512-Number(document.getElementById("Y").innerHTML))/512-1;

            ctm = mult(ctm, translate(go[i], 0, 0));
            gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(ctm));

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture); 

            if (leftright[i] == 0)
               go[i] += speed[i];
            else
               go[i] += -speed[i];
            gl.drawArrays(gl.TRIANGLE_STRIP, i * 4, 4);
            if(col>50){
               if((vertices[4*i+1][1]+0.38)>(Number(newy)+0.43)&&(vertices[4*i+2][1]-0.38)<(Number(newy)-0.05)){
                  if((vertices[4*i+2][0]+0.38+Number(go[i]))>(Number(newx)+0.05)&&(vertices[4*i+1][0]-0.38+Number(go[i]))<(newx-0.43)){
                     if((Number(document.getElementById("size").innerHTML)*2/512)<Math.abs((Number(vertices[4*i][0])-Number(vertices[4*i+2][0])))){
                        document.getElementById("C").innerHTML = (i+1+col)*200;
                        document.getElementById("size").innerHTML = Number(document.getElementById("size").innerHTML) -1 ;
                        life = life-1;
                        document.getElementById("heart"+Number(Number(life)+1)).src="heartx.png";
                     }
                     else{
                        document.getElementById("C").innerHTML = (i+1+col)*200;
                        document.getElementById("size").innerHTML = Number(document.getElementById("size").innerHTML) +1.5 ;
                        for(var q=0;q<4;q++){
                           for(var w=0;w<2;w++){
                              vertices[4*i+q][w] = 2.0;
                           }
                        }
                        gl.drawArrays(gl.TRIANGLE_STRIP, i * 4, 4);
                        document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Number(document.getElementById("size").innerHTML)*2;
                     }
                     col=0;
                  }

               }
            }
         }
      }
      col+=1;
      make += 1;
      if(life==0){
         alert("game finish");
      }
      requestAnimFrame(render);
   }
}