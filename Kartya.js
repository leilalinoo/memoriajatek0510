class Kartya {
  #kep;
  #id;
  #divelem;
  #kepElem;
  constructor(kartya, id, szuloElem) {

    this.#id = id
    
    this.#kepElem.on("click", ()=>{
        this.kattTrigger()
    })


  }

  getKep() {
    this.#kep = kep;
    return kep;
  }

  getId() {
    this.#id = id;
    return id;
  }

  setKepElem(kep) {
    this.#kep = kep;
  }

  kattTrigger() {
    const esemeny = new CustomEvent("elemKivalasztas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Kartya;
