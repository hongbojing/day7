//1 circle
//define the paper to draw on
var paper1= Raphael("code-left-1",400,400);
//var cir = paper.circle(x,y,r);
var cir_1_1=paper1.circle(33,33,30);
var cir_1_2=paper1.circle(200,200,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

//2 rectangle
var paper2=Raphael("code-left-2",500,400);
//paper.rect(x,y,width,height,border-radius(optional));
var rect_2_1=paper2.rect(50,50,100,50);
var rect_2_2=paper2.rect(50,150,100,50,10);
var rect_2_3=paper2.rect(50,250,100,50,20);

var rect_2_4=paper2.rect(200,50,200,100,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

//3 ellipse

var paper3=Raphael("code-left-3",400,400);

//paper.ellipse(x,y,rX,rY);

var ellipse_3_1 = paper3.ellipse(150,100,130,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

//4 complex shape

var paper4=Raphael("code-left-4",400,400);

//paper.path("path-string");

var tri_4_1=paper4.path("M10,10L260,10L130,180L10,10").attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});

//create text
var paper5=Raphael("code-left-5",400,400);

//paper.text(x,y,"what do you want to say");

var text_5_1=paper5.text(20,20,"I am the text1 with text-anchor equals to start").attr({
  "fill":"#17A9C6",
  "font-size":30,
  "text-anchor":"start",
  "font-family":"century gothic"
});
var text_5_2=paper5.text(20,60,"I am the text2 with text-anchor equals to middle").attr({
  "fill":"#17A9C6",
  "font-size":30,
  "text-anchor":"middle",
  "font-family":"century gothic"
});
var text_5_3=paper5.text(20,100,"I am the text3 with text-anchor equals to end").attr({
  "fill":"#17A9C6",
  "font-size":30,
  "text-anchor":"end",
  "font-family":"century gothic"
});

//transform:t100,0
var paper6=Raphael("code-left-6",400,400);

var rectOrigin_6_1=paper6.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectTranslated_6_2=paper6.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("t100,0");

//transform:T100,0
var paper7=Raphael("code-left-7",400,400);

var rectOrigin_7_1=paper7.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectTranslated_7_2=paper7.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("T100,0");

//tranform:s1.5
var paper8=Raphael("code-left-8",400,400);

var rectOrigin_8_1=paper8.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectScaled_8_2=paper8.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("s1.5");

//tranform:s0.5
var paper9=Raphael("code-left-9",400,400);

var rectOrigin_9_1=paper9.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectScaled_9_2=paper9.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("s0.5");

//tranform:rotate 45
var paper10=Raphael("code-left-10",400,400);

var rectOrigin_10_1=paper10.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectRotated_10_2=paper10.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("r45");

//tranform:rotate -45
var paper11=Raphael("code-left-11",400,400);

var rectOrigin_11_1=paper11.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectRotated_11_2=paper11.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("r-45");

//transform:rotate -45 Translate 100,0
var paper12=Raphael("code-left-12",400,400);

var rectOrigin_12_1=paper12.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectTransformed_12_2=paper12.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("r-45T100,0");

//transform:rotate -45 translate 100,0
var paper13=Raphael("code-left-13",400,400);

var rectOrigin_13_1=paper13.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
var rectTransformed_13_2=paper13.rect(100,100,150,80,5).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.5,
  "stroke":"#2A6570",
  "stroke-width":8
}).transform("r-45t100,0");
