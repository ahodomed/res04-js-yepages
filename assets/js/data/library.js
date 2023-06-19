// import Book

// import{Book}from "./book.js";

class Library{
      #shelf;
     
     constructor(shelf){
         this.shelf = [];
     }
     
     set shelf(){
        this.#shelf = shelf;
     }
     
     get shelf(){
         return this.#shelf;
     }
     
      load(bookList){
          
          for(let book of bookList){
              book = new book( 'titre', 'auteur', 'categirie')
              this.#shelf.push(book);
          }
        
        //   this.#shelf = bookList;
        //   for(let book of bookList ){
        //       this.#shelf.push(book);
         // }
      }
      
      addBook(book){
          this.#shelf.push(book);
      }
      
      removeBook(book){
          for(let book of shelf ){
              this.#shelf.splice(book);
          }
          
      }


    findBookByTitle(title){
    
    for (let book of shelf){
        
        if( this.#shelf.titre === title){
            
            return book;
        }
    }
    }


    findBooksByAuthor(author){
        for(let book of shelf){
            if(this.#shelf.auteur === author){
                return book;
            }
        }
    }


    findBooksByCategory(category){
        for(let book of shelf){
            if(this.#shelf.categirie === category){
                return book;
            }
        }
    }

}

export{Library};


 