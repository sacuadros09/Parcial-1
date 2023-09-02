import * as components from "./components/index.js"
import {data} from "./data.js"


class AppContainer extends HTMLElement{


    connectedCallback(){
        this.render();
    }


    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    render(){
        data.forEach((s)=>{

        this.shadowRoot.innerHTML += `<my-card name="${s.name}"specie="${s.specie}"gender="${s.gender}"house="${s.house}"gender="${s.yearofbirth}" ></my-card>
        <my-button></my-button>
  `
    })
}



}
customElements.define("app-container",AppContainer)
