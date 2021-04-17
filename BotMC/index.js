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

function pw(checked) {
    const passel = document.getElementById("McPass")
    if (checked == false) {
        passel.setAttribute("disabled", checked)
        passel.placeholder = "CRACKED"
    }
    if (checked == true) {
        passel.removeAttribute("disabled")
        passel.value = ""
        passel.placeholder = "Your Minecraft Account Password"
    }
}
function genout(){
    document.getElementById("OUT").innerHTML = `
    {
        "Dtoken": "${valueof("DToken")}",
        "prefix": "${valueof("Dprefix")}",
        "username": "${valueof("McEmail")}",
        "password":"${valueof("McPass")}",
        "ip":"${valueof("McServerIP")}",
        "version": "${document.getElementById("McServerVer").options[document.getElementById("McServerVer").selectedIndex].value}",
        "scid": "${valueof("CHIDSC")}",
        "jc" : "${valueof("McJC")}"
      }`
    console.log("one of them changed")
}

function valueof(id){
    return document.getElementById(id).value
}