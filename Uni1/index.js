const date = new Date()
const hour = date.getHours()
const welcomer = document.getElementById("Welcomer")
if (hour < 12) {
    welcomer.innerHTML = "Good Morning"
}
if (hour >= 12 && hour < 18) {
    welcomer.innerHTML = "Good Afternoon"
}
if (hour >= 18) {
    welcomer.innerHTML = "Good Night"
}


function genout(){
    document.getElementById("OUT").innerHTML = `
    {
        "Dtoken": "${valueof("DToken")}",
        "prefix": "${valueof("Dprefix")}",
        "scid": "${valueof("CHIDSC")}"
      }`
    console.log("one of them changed")
}

function valueof(id){
    return document.getElementById(id).value
}