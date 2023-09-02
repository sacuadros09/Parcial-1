class Button extends HTMLElement {
    static get observedAttributes(){
        return["message"]
    }
    
    
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
    
    
    mount(){
        this.render()
        this.addListeners()
    }
    
    
    connectedCallback(){
        this.mount()
    }
    
    
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.mount();
    }
    
    
    
    
    addListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked)
    }
    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <p>${this.message||"Name"}</p>
        <button>Cambiar Nombre</button>
        </section>
    
    
        `
    }
    
    
    
    
    onButtonClicked(){
        const currentValue = this.getAttribute("message")
        this.setAttribute("message","alternative name")
       
    }
    }
    
    
    customElements.define("my-button",Button)
    export default Button
    