let chvars = document.querySelectorAll('[ch-var]')
//let liveUpdate = false
//let liveUpdateInterval = 1000

chvars.forEach(item => {
    item.addEventListener('change', change => {
        let commonVar = item.getAttribute("ch-var")
        let linked = document.querySelectorAll('[ch-var="' + commonVar + '"]')
        if (needsValue(item)) {
            linked.forEach(el => {
                if (needsValue(el)) {

                    el.value = item.value

                } else {

                    el.innerHTML = item.value

                }
            })
        } else {
            linked.forEach(el => {
                if (needsValue(el)) {

                    el.value = item.innerHTML

                } else {

                    el.innerHTML = item.innerHTML

                }
            })
        }
    })
})

function needsValue(element){
    let elName=element.nodeName.toUpperCase()
    if(elName == "INPUT" || elName == "PROGRESS"){
        return true
    }   else{
        return false
    }
}

/*

Maybe later if i find a way to make it work.

if(liveUpdate) {
    var liveVars = setInterval(updateVars(), liveUpdateInterval)
}

function updateVars(){
    if(!liveUpdate){
        clearInterval(liveVars)
    }
    chvars.forEach(item => {
        let commonVar = item.getAttribute("ch-var")
        let linked = document.querySelectorAll('[ch-var="' + commonVar + '"]')
        if (item.nodeName.toUpperCase() == "INPUT") {
            linked.forEach(el => {
                if (el.nodeName.toUpperCase() == "INPUT") {

                    el.value = item.value

                } else {

                    el.innerHTML = item.value

                }
            })
        } else {
            linked.forEach(el => {
                if (el.nodeName.toUpperCase() == "INPUT") {

                    el.value = item.innerHTML

                } else {

                    el.innerHTML = item.innerHTML

                }
            })
        }
    })
}
*/