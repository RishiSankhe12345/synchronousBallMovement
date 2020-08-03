class Form{
    constructor(){

    }
display(){
 var title = createElement('h3')
 title.html("Car Racing Game");
 title.position(130,0);
 var input = createInput('Name');
 var button = createButton('Play');
 var greeting = createElement('h4');
 input.position(380,340);
 button.position(380,370);
 button.mousePressed(function(){
     input.hide();
     button.hide();
     var name = input.value();
     playerCount=playerCount+1;
     player.update(name);
     player.updateCount(playerCount);
     greeting.html("Hello "+name)
     greeting.position(400,300);
 });
}
}