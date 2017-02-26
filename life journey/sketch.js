var dis = 0;

var pos = 0;
var intPos=0;
var ratio = 0;
var posInd = 0;

var startButton = false;

var timelineColor = [//earth
                     "#FFC857",
                     //water
                     "#345995",
                     //cell
                     "#03CEA4",
                     //air
                     "#78ABFF",
                     //jellyfish
                     "#E0EBFF",
                     //fish
                     "#FB4D3D",
                     //Land plants
                     "#7AC74F",
                     //insects
                     "#FE5F55",
                     //Forest
                     "#7CA704",
                     //Amphibians
                     "#F45D01",
                     //Reptiles
                     "#4F518C",
                     //Dinosaurs
                     "#7D1128",
                     //Mammals
                     "#43291F",
                     //Birds
                     "#FFD400",
                     //Flower
                     "#D90368",
                     //Humans
                     "#F3D9B1"];

var i = 0;
var info = ["The Earth is born",
            "The origin of water on Earth",
            "Simple cell life forms appeared \nafter 1000 million years",
            "Photosynthesis generates an oxygen atmosphere",
            "Life began to appear in a complex form ",
            "Fish start to fill the waters",
            "Life from the ocean to land",
            "Insect and vegetation start to flourish",
            "Forests became the dominant terrestrial \n ecosystem of Earth",
            "The amphibians evolved from fish with lungs \n that were helpful in adapting to dry land.",
            "Reptiles rise from the water and dominate the land",
            "Dinosaurs become the overlord of the earth",
            "Small mammals appear alongside the dinosaurs",
            "Early birds evolve in the Jurassic period",
            "Flowers are modified leaves possessed \n only by the angiosperms",
            "The earliest human beings appeared"]
var img = [];
var imgMouse;
var imgPosx = 0;
var imgPosy = 0;
var speedx = 2;
var speedy = 2;
var back = false;

function preload() {  // preload() runs once
  img[0] = loadImage("images/earth.png");
  img[1] = loadImage("images/water.png");
  img[2] = loadImage("images/cells.png");
  img[3] = loadImage("images/oxygen.png");
  img[4] = loadImage("images/jellyfish.png");
  img[5] = loadImage("images/fish.png");
  img[6] = loadImage("images/landplant.png");
  img[7] = loadImage("images/insect.png");
  img[8] = loadImage("images/forest.png");
  img[9] = loadImage("images/amphibians.png");
  img[10] = loadImage("images/reptile.png");
  img[11] = loadImage("images/dinosaur.png");
  img[12] = loadImage("images/mammals.png");
  img[13] = loadImage("images/bird.png");
  img[14] = loadImage("images/flower.png");
  img[15] = loadImage("images/human.png");
  imgMouse = loadImage("images/cursor.png");

}

function setup() {
    var cnv = createCanvas(windowWidth,windowHeight);
    
}

function draw() {
  background("#2E4052");
  
  // click to start
  if(startButton){
    move();
    keyPressed();
    distance();
  }
    
    information();
    leftSidebar();
    timeline();
    indicator();
    // wander();
    title();
    stop();
    changeColor();
    
};


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
function title(){
    
    //title
    fill("#2E4052");
    textSize(40);
    textAlign(LEFT);
    textStyle(BOLD);
    text("THE JOURNEY",width/6-150,120);
    text("OF LIFE",width/6-150,170);
    
    // line
    stroke("#2E4052");
    line(width/6-150,190,width/6+150,190);
    // start hint
    noStroke();
    textSize(18);
    textLeading(24);
    textStyle(ITALIC);
    text("feel the timeflow of life evolution \nwith your mouse ",width/6-150,height/2-160);
    // textStyle(NORMAL);
    textLeading(20);
    fill("red");
    text("Click to start your journey",width/6-150,height/2-40);
    // text("click to start your journey",width/6,height/2)
} 

// function wander(){
//   image(imgMouse,imgPosx,imgPosy, imgMouse.width/3, imgMouse.height/3);
  
//   imgPosx = imgPosx + speedx;
//   imgPosy = imgPosy + speedy;
  
//   if(imgPosx == 450 || imgPosx == 0 ){
//     speedx = speedx * -1;
//   }
  
//   if(imgPosy == height - 30 || imgPosy == 0){
//     speedy = speedy * -1;
//   }
// }

function indicator(){
    
    if(pos>0){
      
      fill("#FCFAF9")
      noStroke();
      ellipse(width/3+pos,height,250,250);
      
      fill("#0A2342");
      textAlign(CENTER);
      textStyle(NORMAL);
      textSize(22);
      text(nfc(intPos),width/3+pos,height-50);
      textSize(20);
      text("YEARS",width/3+pos,height-20);
      
      // indicator at start point
    } else{
      fill("#FCFAF9")
      noStroke();
      ellipse(width/3,height,250,250);
      
      fill("#0A2342");
      textAlign(CENTER);
      textStyle(NORMAL);
      textSize(22);
      text("0",width/3,height-50);
      textSize(20);
      text("YEAR",width/3,height-20);
    }
}
  
function leftSidebar(){
  fill("#FFC857");
  noStroke();
  rect(0,0,width/3,height);
}

function timeline(){
  fill(timelineColor[i]);
  noStroke();
  rect(width/3,0,pos,height);
}

function stop(){
 
  textSize(20);
  textAlign(CENTER);
  
  // earth
  fill("#5BC0EB");
  ellipse(width/3,height/2-30,100,100);
  fill("WHITE");
  textStyle(BOLD);
  text("EARTH",width/3,height/2-22);
  
  //hint
  text("\“Let there be light, and there was light.\"",width/6+2500,height/2);
  text("YOU CAN PRESS YOUR MOUSE TO SEE MORE INFORMATION",width/6+6500,height/2);
  text("THE FASTER YOU'LL MOVE, THE MORE TIME YOU WILL PASS",width/6+9500,height/2);
  text("WHEN YOU ENTER THE NEXT STAGE OF LIFE, THE COLOR OF TIMELINE WILL CHANGE",width/6+20000,height/2);
  text("YOU CAN PRESS THE LEFT ARROW KEY TO GO BACK, BUT TIME CAN'T" , width/6+30000,height/2);
  text("LIQUID WATER HAVE EXISTED VERY SOON AFTER THE FORMATION OF EARTH",width/6+40000,height/2);
  text("THE JOURNEY OF LIFE HAS JUST BEGUN",width/6+50000,height/2);
  //700
  text("LIFE ARISES FROM NON-LIVING MATTER",width/6+60000,height/2);
  //860
  text("YOU STILL HAVE A LONG WAY TO GO",width/6+70000,height/2);
  //920
  text("LIFE ITSELF IS DEPENDENT UPON THE SPECIALIZED CHEMISTRY OF CARBON AND WATER",width/6+80000,height/2);
  //1240 simple cell
  text("ROOT OF THE TREE OF LIFE IS A MONOPHYLETIC DOMAIN BACTERIA",width/6+100000,height/2);
  // now we need 15 text // 1560
  text("THAT ONE FORM OF LIFE DERIVED FROM A DIFFERENT FORM",width/6+130000,height/2);
  //1880
  text("THE ATMOSPHERE, EXPOSED TO ENERGY IN VARIOUS FORMS, PRODUCED SIMPLE ORGANIC COMPOUNDS - MONOMERS",width/6+160000,height/2);
  //2200 oxidation
  text("BY FURTHER TRANSFORMATION, MORE COMPLEX ORGANIC POLYMERS - AND ULTIMATELY LIFE - DEVELOPED WITH THE TIME",width/6+190000,height/2);
  //2520
  text("BEFORE PHOTOSYNTHESIS EVOLVED, EARTH'S ATMOSPHERE HAD NO FREE OXYGEN",width/6+220000,height/2);
  //2840
  text("THE PRESENCE OF OXYGEN PROVIDED LIFE WITH NEW OPPORTUNITIES.",width/6+250000,height/2);
  //3160
  text("RISING OXYGEN CONCENTRATIONS HAVE BEEN CITED AS A DRIVER FOR EVOLUTIONARY DIVERSIFICATION", width/6+280000,height/2);
  //3480
  text("COMPLEX MULTICELLULAR LIFE IS FIRST ARISED",width/6+310000,height/2);
  //3800 4020 arise the jellyfish
  //4120 
  
  
  
}

function information(){
  if(mouseIsPressed && pos > 1000){
    
    image(img[i], width/2+50+pos, height/2-200);
    fill("WHITE");
    textAlign(CENTER);
    text(info[i],width/12*7+pos, height/2+50);
  }
}



function move(){
  if(pos<width/6){
    translate(0,0);
  } else {
    translate(width/6-pos,0);
  }
  
}

function distance() {
  
  if(intPos <= 4600000000){
    pos = pos + dis/10;
    
  } else {
    pos = pos;
  }

  if(dis<10){
    ratio = dis;
  
  }else if(dis<50){
    ratio = dis*10;
    
  }else if(dis<100){
    ratio = dis*50;
    
  }else if(dis<200){
    ratio = dis*200;
    
  }else if(dis<300){
    ratio = dis*500;
    
  }else {
    ratio = dis*2000;
    
    //text
    // ratio = dis*20000;
  }
  
  // less than 100000 move with the mouse distance
  if(posInd < 100000){
    posInd = posInd + dis;
    
  } else if(posInd > 100000 && posInd < 4600000000){
    posInd = posInd + ratio;
    
  } else if(posInd >= 4600000000){
    posInd = posInd;
  }
  
  intPos = round(posInd);
}



function mouseClicked(){
  startButton = true;
}


function changeColor(){
  if(posInd < 100000000){
    i = 0;
    
  } else if( posInd > 100000000 && posInd < 1000000000){
    i = 1;
    
  } else if( posInd > 1000000000 && posInd < 2100000000){
    i = 2;
    
  } else if( posInd > 2100000000 && posInd < 4020000000){
    i = 3;
    
  } else if( posInd > 4020000000 && posInd < 4070000000){
    i = 4;
    
  } else if( posInd > 4070000000 && posInd < 4125000000){
    i = 5;
    
  } else if( posInd > 4125000000 && posInd < 4200000000){
    i = 6;
    
  } else if( posInd > 4200000000 && posInd < 4215000000){
    i = 7;
    
  } else if( posInd > 4215000000 && posInd < 4230000000){
    i = 8;
    
  } else if( posInd > 4230000000 && posInd < 4280000000){
    i = 9;
    
  } else if( posInd > 4280000000 && posInd < 4375000000){
    i = 10;
    
  } else if( posInd > 4375000000 && posInd < 4400000000){
    i = 11;
    
  } else if( posInd > 4400000000 && posInd < 4450000000){
    i = 12;
    
  } else if( posInd > 4450000000 && posInd < 4470000000){
    i = 13;
    
  } else if( posInd > 4470000000 && posInd < 4599800000){
    i = 14;
    
  } else if( posInd > 4599800000){
    i = 15;
  }
}


 function keyPressed(){
  if(keyIsPressed == true){
    
    dis = - dist(mouseX,mouseY,pmouseX,pmouseY);
    
  }else {
    
    dis = dist(mouseX,mouseY,pmouseX,pmouseY);
  }
  
  return false;
}

















