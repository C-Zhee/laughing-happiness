// Your code here

// See all characters names in a div with the id of "character-bar". Create a span tag with the 
// character's name and add it the div#character-bar once you have retrieved the character data 
// from the server. You will need to make a GET request to the following endpoint to retrieve the character data:

// When the character in the div#character-bar is clicked, display the character's details in the 
// div#detailed-info. You can either use the character information from your first request, or 
// make a new request to this endpoint to get the character's details:

// When the form#votes-form is submitted, add the number of votes from the input field to the 
// character displayed in the div#detailed-info. No persistence is needed. The number of votes 
// should be cumulative. For example, if a character currently has 5 votes, and a user adds another 
// 5 votes via the form, the number of votes displayed for the character should increase to 10.


const characterBar = document.getElementById("character-bar")
const detailedInfo = document.getElementById("detailed-info")
const characterName = document.getElementById("character-name")
const characterImage = document.getElementById("image")
const votes = document.getElementById("votes")
const text = document.getElementById("text")

let voteForm = document.querySelector("#votes-form")
let enterVotes = document.querySelector("#votes")
let voteCount = document.querySelector("#vote-count")

const characterForm = document.getElementById("character-form")
const newImage = document.getElementById("new-image")

characterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let img = document.createElement("img")
    img.src = newImage.image.value
    characterBar.append(img)
})

const request = async () => {
    let req = await fetch ("http://localhost:3000/characters")
    let res = await req.json()
    res.forEach((character, i) => {
        let hi = document.createElement("hi")
        hi.innerText = character.name
        let span = document.createElement("span") 
        span.src = character.image
        characterBar.append(span)
        span.append(hi)
        hi.addEventListener("click", () => {
            characterImage.src = character.image
            voteCount.innerText = character.votes
        })
        })
    }

    const addVotes = (e) =>{
    e.preventDefault()
    let inputVotes = parseInt(voteCount.textContent)
    let defaultVotes = parseInt(enterVotes.value)
    voteCount.innerText =inputVotes + defaultVotes
}
voteForm.addEventListener("submit", addVotes)   

    request()


// First Bonus Deliverable!
//When the Reset Votes button is clicked, reset the votes back to 0.

// Second Bonus Deliverable!
// When the form#character-form is submitted, add a new character to the div#character-bar.
// The new character in the character bar should behave the same as the other characters
// when clicked (its details should be displayed below, and it should have functionality to add votes).

// Third Bonus Deliverable!
// In addition to adding the character to the div#character-bar upon submitting the form, the 
// character's details should show up immediately in the div#detailed-info.