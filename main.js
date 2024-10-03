import data from "./data.json" with {type: "json"};
const datas = data[1]
console.log (datas)
let cambio = document.getElementById("cambio")



function actualizarCaja(){
    let caja = document.getElementById("jj")
    caja.innerHTML = `
    <p>${datas[0]}<p>
    `
}
document.addEventListener("DOMContentLoaded", actualizarCaja)

cambio.addEventListener("change", () =>{
    let selecIndex = cambio.value
    fetch ("./infor.json")
        .then(Response => Response.json())
        .then(data =>{
            let selectedSuper = data(selecIndex)
            actualizarCaja(selectedSuper) 
        })
})

class P1Element extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= `
        <div id="jj">

        </div>
        `
    }
}

customElements.define("p1-element", P1Element)