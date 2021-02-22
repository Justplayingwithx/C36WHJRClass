class Form{
    constructor(){

    }

    displayForm(){
        console.log("hi")

        var title = createElement('h2');

        title.html("Racing game");

        title.position(130,20);

        var inputBox = createInput("Type in your name here!");
        var button = createButton("Play!");

        inputBox.position(130,50);
        button.position(150,50);

        button.mousePressed(function(){
             inputBox.hide();
             button.hide();

             var username = inputBox.value();

             playerCount = playerCount + 1;

             player.update(username);

             player.updateCount(playerCount);

             var greeting = createElement('h3');

             greeting.html("Hello "+ username);

             greeting.position(130,160)



             
        })

        

    }

};