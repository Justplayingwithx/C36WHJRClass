class Game{
    constructor(){


    }
    readState(){
        var referenceToState;

        // create event listener for the value change, and change the client gameState accordingly.

        referenceToState = database.ref('gameState').on("value", function(data){
            gameState = data.val()
        }, function(){
            console.log("error")
        })
} 


 updateState(state){

    //changes the server gamestate to the recived state when the function was called
database.ref('/').update({
    gameState:state
})

}

startGame(){
    //if the state = 0, then execute this code
if(gameState === 0){
    player = new Player();
    player.getCount();
    console.log("reached here")
    form = new Form();
    form.displayForm();
    console.log("other reached here")
}



}


};