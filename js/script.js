const $emojiCodes = ["128570", "128568", "128569", "128571", "128572", "128573", "128576", "128575", "128574", "128527", "128579", "128548"]
const $emojiGallery = document.getElementById("emoji")

let $emojiCards = []

function showEmojis(count = $emojiCodes.length){
    
    for (let i = count; i < $emojiCodes.length; i++){
        $emojiCards.push(`<div class="emojicard">
            <div class="actualemoji">
            &#${$emojiCodes[i]}
            </div><div class="code">Emoji Code:${$emojiCodes[i]}</div></div>`)
    }
    $emojiGallery.innerHTML = ""
    $emojiGallery.insertAdjacentHTML("beforeend", $emojiCards.join(''))
}   

showEmojis(length)
