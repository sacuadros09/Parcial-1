class Card extends HTMLElement{


    static get observedAttributes(){
        return ["name","specie","gender","house","yearofbirth"]
    }


    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,_,NewValue){
        this[propName] = NewValue;
        this.render()
    }

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }


    render(){
        this.shadowRoot.innerHTML = `

        <section>
        <p>${this.name}</p>
        <h1>${this.specie}</h1>
        <h1>${this.gender}</h1>
        <h1>${this.house}</h1>
        <h1>${this.yearofbirth}</h1>
        </section>
        `
        
    }


}
customElements.define("my-card",Card)
export default Card