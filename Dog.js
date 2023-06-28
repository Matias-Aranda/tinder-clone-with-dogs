// Create the Dog class here

class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }
    getBadgeSrc(){
        return this.hasBeenLiked && this.hasBeenSwiped ? 
        `<img id="badge" src="images/badge-like.png">` : this.hasBeenSwiped ? 
        `<img id="badge" src="images/badge-nope.png">` : ""
    }
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped,} = this
        return `<div id="profile" style='background: url("${avatar}");background-size: cover;'>
                    ${this.getBadgeSrc()}
                    <div id="info-container">
                        <h1 id="name">${name},${age}</h1>
                        <p id="bio">${bio}</p>
                    </div>
                </div>`
    }
}

export default Dog