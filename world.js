var canvasElem = document.getElementById("game");
canvasElem.style.width = window.screen.width;

var world = boxbox.createWorld(canvasElem, {
  gravity: {x: 0, y: 20},
  scale: 20,
  collisionOutlines :true,
});

world.createEntity({
    name:"ground",
    shape:"square",
    type:"static",
    width:300 ,
    height:0.1,
    y:28,
    color:"transparent"

})
world.createEntity({
    name:"bow",
    shape:"square",
    image :"assets/imgs/bow.png",
    type:"static",
    width:2 ,
    height:3,
    y:28,
    x:4,
    color:"transparent",
    imageStretchToFit:true,
    imageOffsetX :-.5 ,
    imageOffsetY : -1.4,

})