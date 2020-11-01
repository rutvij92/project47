var card1,card2,card3,card4,card5;
var card6,card7,card8,card9,card10;
var card11,card12,card13,card14,card15;
var card16,card17,card18,card19,card20;
var card21,card22,card23,card24,card25;
var card26,card27,card28,card29;

var backgroundimg,coverimg;
var pic1,pic2,pic3,pic4,pi5,pic6,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14;
var doneimg;
var myturn=0;
var play=1;
var next=2;
var gamestate=play;
var pressed=0;
var cardnumber;

var card1enabled=0;
var card2enabled=0;
var card3enabled=0;
var card4enabled=0;
var card5enabled=0;
var card6enabled=0;
var card7enabled=0;
var card8enabled=0;
var card9enabled=0;
var card10enabled=0;
var card11enabled=0;
var card12enabled=0;
var card13enabled=0;
var card14enabled=0;
var card15enabled=0;
var card16enabled=0;
var card17enabled=0;
var card18enabled=0;
var card19enabled=0;
var card20enabled=0;
var card21enabled=0;
var card22enabled=0;
var card23enabled=0;
var card24enabled=0;
var card25enabled=0;
var card26enabled=0;
var card27enabled=0;
var card28enabled=0;

var card1matched=0;
var card2matched=0;
var card3matched=0;
var card4matched=0;
var card5matched=0;
var card6matched=0;
var card7matched=0;
var card8matched=0;
var card9matched=0;
var card10matched=0;
var card11matched=0;
var card12matched=0;
var card13matched=0;
var card14matched=0;
var card15matched=0;
var card16matched=0;
var card17matched=0;
var card18matched=0;
var card19matched=0;
var card20matched=0;
var card21matched=0;
var card22matched=0;
var card23matched=0;
var card24matched=0;
var card25matched=0;
var card26matched=0;
var card27matched=0;
var card28matched=0;




function preload(){
backgroundimg=loadImage("pictures/background img.jpg");
coverimg=loadImage("pictures/cover img.png");
pic1=loadImage("pictures/pic1.jpg");
pic2=loadImage("pictures/pic2.jpg");
pic3=loadImage("pictures/pic3.jpg");
pic4=loadImage("pictures/pic4.jpg");
pic5=loadImage("pictures/pic5.png");
pic6=loadImage("pictures/pic6.jpg");
pic7=loadImage("pictures/pic7.jpg");
pic8=loadImage("pictures/pic8.jpg");
pic9=loadImage("pictures/pic9.jpg");
pic10=loadImage("pictures/pic10.jpg");
pic11=loadImage("pictures/pic11.jpg");
pic12=loadImage("pictures/pic12.jpg");
pic13=loadImage("pictures/pic13.jpg");
pic14=loadImage("pictures/pic14.jpg");
doneimg=loadImage("pictures/done.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  card1= createSprite(displayWidth/4-250,100, 80,80);
  card1.addImage(coverimg);
  card1.scale=0.7
  card2= createSprite(displayWidth/4-50,100, 200,200);
  card2.addImage(coverimg);
  card2.scale=0.7;
  card3= createSprite(displayWidth/4+150,100, 80,80);
  card3.addImage(coverimg);
  card3.scale=0.7;
  card4= createSprite(displayWidth/4+350,100, 80,80);
  card4.addImage(coverimg);
  card4.scale=0.7;
  card5= createSprite(displayWidth/4+550,100, 80,80);
  card5.addImage(coverimg);
  card5.scale=0.7;
  card6= createSprite(displayWidth/4+750,100, 80,80);
  card6.addImage(coverimg);
  card6.scale=0.7;
  card7= createSprite(displayWidth/4+950,100,150, 80,80);
  card7.addImage(coverimg);
  card7.scale=0.7
  card8= createSprite(displayWidth/4-250,300, 80,80);
  card8.addImage(coverimg);
  card8.scale=0.7
  card9= createSprite(displayWidth/4-50,300, 200,200);
  card9.addImage(coverimg);
  card9.scale=0.7;
  card10= createSprite(displayWidth/4+150,300, 80,80);
  card10.addImage(coverimg);
  card10.scale=0.7;
  card11= createSprite(displayWidth/4+350,300, 80,80);
  card11.addImage(coverimg);
  card11.scale=0.7;
  card12= createSprite(displayWidth/4+550,300, 80,80);
  card12.addImage(coverimg);
  card12.scale=0.7;
  card13= createSprite(displayWidth/4+750,300, 80,80);
  card13.addImage(coverimg);
  card13.scale=0.7
  card14= createSprite(displayWidth/4+950,300, 80,80);
  card14.addImage(coverimg);
  card14.scale=0.7
  card15= createSprite(displayWidth/4-250,500, 80,80);
  card15.addImage(coverimg);
  card15.scale=0.7
  card16= createSprite(displayWidth/4-50,500, 200,200);
  card16.addImage(coverimg);
  card16.scale=0.7;
  card17= createSprite(displayWidth/4+150,500, 80,80);
  card17.addImage(coverimg);
  card17.scale=0.7;
  card18= createSprite(displayWidth/4+350,500, 80,80);
  card18.addImage(coverimg);
  card18.scale=0.7;
  card19= createSprite(displayWidth/4+550,500, 80,80);
  card19.addImage(coverimg);
  card19.scale=0.7;
  card20= createSprite(displayWidth/4+750,500, 80,80);
  card20.addImage(coverimg);
  card20.scale=0.7
  card21 = createSprite(displayWidth/4+950,500, 80,80);
  card21.addImage(coverimg);
  card21.scale=0.7
  card22= createSprite(displayWidth/4-250,700, 80,80);
  card22.addImage(coverimg);
  card22.scale=0.7
  card23= createSprite(displayWidth/4-50,700, 200,200);
  card23.addImage(coverimg);
  card23.scale=0.7;
  card24= createSprite(displayWidth/4+150,700, 80,80);
  card24.addImage(coverimg);
  card24.scale=0.7;
  card25= createSprite(displayWidth/4+350,700, 80,80);
  card25.addImage(coverimg);
  card25.scale=0.7;
  card26= createSprite(displayWidth/4+550,700, 80,80);
  card26.addImage(coverimg);
  card26.scale=0.7;
  card27= createSprite(displayWidth/4+750,700, 80,80);
  card27.addImage(coverimg);
  card27.scale=0.7
  card28= createSprite(displayWidth/4+950,700, 80,80);
  card28.addImage(coverimg);
  card28.scale=0.7; 
  
 
  
  

  

 
}

function draw() {
  background(backgroundimg);  

if(gamestate===play&&myturn<2){
  


  if (mousePressedOver(card1)&&pressed===0&&card1enabled===0){ 
card1.addImage(pic1);
   card1enabled=1;
   myturn=myturn+1;

    }
    if (mousePressedOver(card2)&&pressed===0&&card2enabled===0){
// cardnumber=2;
// card2.destroy()
card2.addImage(pic5)
myturn=myturn+1;
  card2enabled=1;
     }
    if (mousePressedOver(card3)&&card3enabled===0){
       card3.addImage(pic8)
       myturn=myturn+1;
       card3enabled=1;
     }
     if (mousePressedOver(card4)&&card4enabled===0){
        card4.addImage(pic8)
        myturn=myturn+1;
        card4enabled=1;
     }
     if (mousePressedOver(card5)&&card5enabled===0){
          card5.addImage(pic9)
        myturn=myturn+1;
        card5enabled=1;
     }
    if (mousePressedOver(card6)&&card6enabled===0){
          card6.addImage(pic6)
          card6.scale=0.6;
        myturn=myturn+1;
        card6enabled=1;
      }
     if (mousePressedOver(card7)&&card7enabled===0){
          card7.addImage(pic7)
          card7.scale=0.85;
        myturn=myturn+1;
        card7enabled=1;
      }
      if (mousePressedOver(card8)&&card8enabled===0){
           card8.addImage(pic6)
           card8.scale=0.6
          myturn=myturn+1;
          card8enabled=1;
     }
      if (mousePressedOver(card9)&&card9enabled===0){
            card9.addImage(pic14)
            card9.scale=0.29;
          myturn=myturn+1;
          card9enabled=1;
     }
      if (mousePressedOver(card10)&&card10enabled===0){
           card10.addImage(pic2)
           card10.scale=0.7;
          myturn=myturn+1;
          card10enabled=1;
     }
     if (mousePressedOver(card11)&&card11enabled===0){
           card11.addImage(pic3)
           card11.scale=0.43;
          myturn=myturn+1;
          card11enabled=1;
     }
     if (mousePressedOver(card12)&&card12enabled===0){
            card12.addImage(pic11)
          myturn=myturn+1;
          card12enabled=1;
    }
    if (mousePressedOver(card13)&&card13enabled===0){
            card13.addImage(pic10)
          myturn=myturn+1;
          card13enabled=1;
    }
     if (mousePressedOver(card14)&&card14enabled===0){
    card14.addImage(pic14)
    card14.scale=0.29;
    myturn=myturn+1;
    card14enabled=1;
    }
    if (mousePressedOver(card15)&&card15enabled===0){
      card15.addImage(pic2)
      card15.scale=0.7;
    myturn=myturn+1;
    card15enabled=1;
     }
    if (mousePressedOver(card16)&&card16enabled===0){
       card16.addImage(pic12)
      myturn=myturn+1;
      card16enabled=1;   
     }
     if (mousePressedOver(card17)&&card17enabled===0){
        card17.addImage(pic13)
      myturn=myturn+1;
      card17enabled=1;
     }
     if (mousePressedOver(card18)&&card18enabled===0){
          card18.addImage(pic13)
        myturn=myturn+1;
        card18enabled=1;
     }
    if (mousePressedOver(card19)&&card19enabled===0){
          card19.addImage(pic12)
        myturn=myturn+1;
        card19enabled=1;
      }
     if (mousePressedOver(card20)&&card20enabled===0){
          card20.addImage(pic5)
        myturn=myturn+1;
        card20enabled=1;
      }
      if (mousePressedOver(card21)&&card21enabled===0){
           card21.addImage(pic9)
          myturn=myturn+1;
          card21enabled=1;
     }
      if (mousePressedOver(card22)&&card22enabled===0){
            card22.addImage(pic3)
            card22.scale=0.43;
          myturn=myturn+1;
          card22enabled=1;
     }
      if (mousePressedOver(card23)&&card23enabled===0){
           card23.addImage(pic11)
          myturn=myturn+1;
          card23enabled=1;
     }
     if (mousePressedOver(card24)&&card24enabled===0){
           card24.addImage(pic10)
          myturn=myturn+1;
          card24enabled=1;
     }
     if (mousePressedOver(card25)&&card25enabled===0){
            card25.addImage(pic7)
            card25.scale=0.85;
          myturn=myturn+1;
          card25enabled=1;
    }
    if (mousePressedOver(card26)&&card26enabled===0){
         card26.addImage(pic4)
        myturn=myturn+1;
        card26enabled=1;
    }                   
    if (mousePressedOver(card27)&&card27enabled===0){
      card27enabled=1;
      card27.addImage(pic1)
    myturn=myturn+1;
    card27enabled=1;
    }    
    if (mousePressedOver(card28)&&card28enabled===0){
      card28.addImage(pic4)
    myturn=myturn+1;
    card28enabled=1;
    }  
  /*if(pressed===1){
      updatecard(cardnumber);
      
    } */            
}
else if(myturn===2){
gamestate=next;
console.log("end");
console.log(myturn)
}

if(gamestate===next){
  if(card1enabled&&card27enabled){
card1.addImage(doneimg);
card27.addImage(doneimg);
card1matched=1
card27matched=1;
  }
  else if(card2enabled&&card20enabled){
    card2.addImage(doneimg);
    card20.addImage(doneimg);
      }
else if(card3enabled&&card4enabled){
  card3.addImage(doneimg);
  card4.addImage(doneimg);
    }
else if(card5enabled&&card21enabled){
          card5.addImage(doneimg);
          card21.addImage(doneimg);
            }    
else if(card6enabled&&card8enabled){
  card6.addImage(doneimg);
  card8.addImage(doneimg);
    }
    else if(card7enabled&&card25enabled){
      card1.addImage(doneimg);
      card27.addImage(doneimg);
  }
  else if(card9enabled&&card14enabled){
    card9.addImage(doneimg);
    card14.addImage(doneimg);
      }
else if(card10enabled&&card15enabled){
  card10.addImage(doneimg);
  card15.addImage(doneimg);
    }
else if(card11enabled&&card22enabled){
  card11.addImage(doneimg);
  card22.addImage(doneimg);
    }
else if(card12enabled&&card23enabled){
  card12.addImage(doneimg);
  card23.addImage(doneimg);
    }
else if(card13enabled&&card24enabled){
  card13.addImage(doneimg);
  card24.addImage(doneimg);
    }
else if(card16enabled&&card19enabled){
  card16.addImage(doneimg);
  card19.addImage(doneimg);
    }
 else if(card17enabled&&card18enabled){
   card12.addImage(doneimg);
   card23.addImage(doneimg);
     }
else if(card26enabled&&card28enabled){
  card26.addImage(doneimg);
  card28.addImage(doneimg);
  }
        else{
         if(card1matched===0){
           card1.addImage(coverimg);
           card1enabled=0;
         }
         if(card2matched===0){
            card2.addImage(coverimg);
            card2enabled=0;
         }
         if(card3matched===0){
          card3.addImage(coverimg);
          card3enabled=0;
       }
       if(card4matched===0){
        card4.addImage(coverimg);
        card4enabled=0;
     }
     if(card5matched===0){
      card5.addImage(coverimg);
      card5enabled=0;
   }
   if(card6matched===0){
    card6.addImage(coverimg);
    card6enabled=0;
 }
 if(card7matched===0){
  card7.addImage(coverimg);
  card7enabled=0;
}
if(card8matched===0){
  card8.addImage(coverimg);
  card8enabled=0;
}
if(card9matched===0){
  card9.addImage(coverimg);
  card9enabled=0;
}
if(card10matched===0){
  card10.addImage(coverimg);
  card10enabled=0;
}
if(card11matched===0){
  card11.addImage(coverimg);
  card11enabled=0;
}
if(card12matched===0){
  card12.addImage(coverimg);
  card12enabled=0;
}
if(card13matched===0){
  card13.addImage(coverimg);
  card13enabled=0;
}
if(card14matched===0){
  card14.addImage(coverimg);
  card14enabled=0;
}
if(card15matched===0){
  card15.addImage(coverimg);
  card15enabled=0;
}
if(card16matched===0){
  card16.addImage(coverimg);
  card16enabled=0;
}
if(card17matched===0){
  card17.addImage(coverimg);
  card17enabled=0;
}
if(card18matched===0){
  card18.addImage(coverimg);
  card18enabled=0;
}
if(card19matched===0){
  card19.addImage(coverimg);
  card1enabled=0;
}
if(card20matched===0){
  card20.addImage(coverimg);
  card20enabled=0;
}
if(card21matched===0){
  card21.addImage(coverimg);
  card21enabled=0;
}
if(card22matched===0){
  card22.addImage(coverimg);
  card22enabled=0;
}
if(card23matched===0){
  card23.addImage(coverimg);
  card23enabled=0;
}
if(card24matched===0){
  card24.addImage(coverimg);
  card24enabled=0;
}
if(card25matched===0){
  card25.addImage(coverimg);
  card25enabled=0;
}
if(card26matched===0){
  card26.addImage(coverimg);
  card26enabled=0;
}
if(card27matched===0){
  card27.addImage(coverimg);
  card27enabled=0;
}
if(card28matched===0){
  card28.addImage(coverimg);
  card28enabled=0;
}











            }
            }
drawSprites();
}



/*function updatecard(cardnumber){

switch(cardnumber){
         case 1:image(pic1,displayWidth/4-250,100, 200,200);
         break;
         case 2: image(pic5,displayWidth/4-50,100, 200,200);

         break;
         
}
myturn=myturn+1
pressed=0;

}*/