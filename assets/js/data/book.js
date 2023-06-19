class Book{
    #titre;
    #categirie;
    #auteur;
    #image;
    
    constructor(titre, categirie, auteur, image){
        this.#titre = titre;
        this.#categirie = categirie;
        this.#auteur = auteur;
        this.#image = image
        
    }
    
    set titre(){
        this.#titre = titre;
    }
    
    get titre(){
        return this.#titre;
    }
    
      set categirie(){
        this.#categirie = categirie;
    }
    
    get categirie(){
        return this.categirie;
    }
    
    
      set auteur(){
        this.#auteur = auteur;
    }
    
    get auteur(){
        return this.#auteur;
    }
    
    
     set image(){
        this.#image = image;
    }
    
    get image(){
        return this.#image;
    }
    
    
    
    
}

// export

export{Book}