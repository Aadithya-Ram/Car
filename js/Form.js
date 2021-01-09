class Form {
    constructor(){}
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(200,100)
        var input = createInput('Enter Name')
        input.position(200,200)
        var button = createButton('Play')
        button.position(300,200)
        var greeting = createElement('h2')
        button.mousePressed(function(){
         input.hide()
         button.hide()
         var name = input.value()
         playerCount = playerCount + 1
         player.update(name)
         player.updateCount(playerCount)
         greeting.html("Welcome" + name)
         greeting.position(200,200)

        }
      )
    }
}