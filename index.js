// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

let dogsArray = dogs.map((dog) => dog.name)
let cooldown = false

function getNewDog() {
    let nextDog = dogsArray.shift()
    const nextDogData = dogs.filter(dog => dog.name == nextDog)
    return nextDogData[0] ? new Dog(nextDogData[0]) : {}
    
}

function interact() {
    dog.getBadgeSrc()
    render()
    cooldown = true
}

function render(){
    document.getElementById("profile-container").innerHTML = dog.getDogHtml()
    cooldown = false
}

let dog = getNewDog()


document.addEventListener("click",function(e){
    if(!cooldown){
        if (e.target.id === "like-btn"){
        e.target.classList.toggle("liked")
        dog.hasBeenLiked = true
        dog.hasBeenSwiped = true
        interact()  
        setTimeout(function(){
            if(dogsArray[0]){
                dog = getNewDog()
                render()
                e.target.classList.toggle("liked")
            }    
        }, 2000)
        
        } else if (e.target.id === "nope-btn"){
            e.target.classList.toggle("swiped")
            dog.hasBeenSwiped = true
            interact()
            setTimeout(function(){
                if(dogsArray[0]){
                    dog = getNewDog()
                    render()
                    e.target.classList.toggle("swiped")
                }
            }, 2000)
        }
    }
    
})

render()