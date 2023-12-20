let bulbEl=document.getElementById("bulb");
let catEl=document.getElementById("cat")
let switchStatus=document.getElementById("switchStatus")
let switchOffEl=document.getElementById("switchOff")
let switchOnEl=document.getElementById("switchOn");

function switchOff(){
    switchStatus.textContent="Switched Off"
    bulbEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchOffEl.style.backgroundColor="#cbd2d9"
    switchOnEl.style.backgroundColor="#22c55e"

}
function switchOn(){
    switchStatus.textContent="Switched On"
    bulbEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchOnEl.style.backgroundColor="#cbd2d9"
    switchOffEl.style.backgroundColor="#e12d39"

}