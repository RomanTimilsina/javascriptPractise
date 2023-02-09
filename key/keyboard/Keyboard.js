const Keyboard = {
    elements : {
        main: null,
        keysContainer: null,
        keys:[]
    },

    eventHandlers: {
        oninput:null,
        onclose:null
    },

    properties: {
        value:"",
        capslock: false
    },

    init(){
        // create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // setup main elements
        this.elements.main.classList.add('keyboard, keyboard--hidden');
        this.elements.keysContainer.add('keyboard__keys');

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.appendChild(this.elements.main)
    },

    _createKeys(){

    },

    _triggerEvent(handlerName){
        console.log( "trigger Event:" + handlerName)
    },

    _toggleCapsLock(){
        console.log( "toggle capslock")
    },

    open(initialValue, oninput, onclose){

    },

    close(){

    }
}