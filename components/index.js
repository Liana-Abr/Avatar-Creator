import Tmp from "./template.js";

export default class AvatarCreator extends HTMLElement{
    static get observedAttributes() {
        return []
    }

    connectedCallback() {
        this.innerHTML = Tmp.render();
        //тело
        const btnBody = document.querySelector(".btn-body");
        const btnBody2 = document.querySelector(".btn-body2");

        btnBody.addEventListener("click", this.AddBody);
        btnBody2.addEventListener("click", this.AddOtherBody);


        //волосы
        const btnHair = document.querySelector(".btn-hair");
        const btnHair2 = document.querySelector(".btn-hair2");

        btnHair.addEventListener("click", this.AddHair);
        btnHair2.addEventListener("click", this.AddOtherHair);

        //глаза
        const btnEyes = document.querySelector(".btn-eyes");
        const btnEyes2 = document.querySelector(".btn-eyes2");

        btnEyes.addEventListener("click", this.AddEyes);
        btnEyes2.addEventListener("click", this.AddOtherEyes);

        //рот
        const btnLips = document.querySelector(".btn-lips");
        const btnLips2 = document.querySelector(".btn-lips2");

        btnLips.addEventListener("click", this.AddLips);
        btnLips2.addEventListener("click", this.AddOtherLips);

        //брови
        const btnBrows = document.querySelector(".btn-brows");
        const btnBrows2 = document.querySelector(".btn-brows2");

        btnBrows.addEventListener("click", this.AddBrows);
        btnBrows2.addEventListener("click", this.AddOtherBrows);

        //очки
        const btnGlasses = document.querySelector(".btn-glasses");
        const btnGlasses2 = document.querySelector(".btn-glasses2");

        btnGlasses.addEventListener("click", this.AddGlasses);
        btnGlasses2.addEventListener("click", this.AddOtherGlasses);




    }
 
    AddHair(){
        const addHair = document.querySelector(".avatar-hair");
        const addHair2 = document.querySelector(".avatar-hair2");
    


        if(addHair.style.display === "none"){
            addHair2.style.display = "none";
            addHair.style.display = "block";
           
        } else{
            addHair.style.display = "none";
        }
    }


    AddOtherHair(){
        const addHair = document.querySelector(".avatar-hair");
        const addHair2 = document.querySelector(".avatar-hair2");

        if(addHair2.style.display === "none"){
            addHair.style.display = "none";
            addHair2.style.display = "block";
           
        } else{
            addHair2.style.display = "none";
        }
    }

    AddBody(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody = document.querySelector(".avatar-body");

        if(addBody3.style.display === "none"){
            addBody.style.display = "none";
            addBody3.style.display = "block";
           
        } else{
            addBody.style.display = "block";
            addBody3.style.display = "none";
        }
    }

    AddOtherBody(){
        const addBody = document.querySelector(".avatar-body");
        const addBody2 = document.querySelector(".avatar-body2");

        if(addBody2.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "block";
           
        } else{
            addBody.style.display = "block";
            addBody2.style.display = "none";
        }
    }


    AddEyes(){
        const addEyes = document.querySelector(".avatar-eyes");
        const addEyes2 = document.querySelector(".avatar-eyes2");
        


        if(addEyes.style.display === "none"){
            addEyes2.style.display = "none";
            addEyes.style.display = "block";
           
        } else{
            addEyes.style.display = "none";
        }
    }
        
    AddOtherEyes(){
        const addEyes = document.querySelector(".avatar-eyes");
        const addEyes2 = document.querySelector(".avatar-eyes2");

        if(addEyes2.style.display === "none"){
            addEyes.style.display = "none";
            addEyes2.style.display = "block";
           
        } else{
            addEyes2.style.display = "none";
        }
    }

    AddLips(){
        const addLips = document.querySelector(".avatar-lips");
        const addLips2 = document.querySelector(".avatar-lips2");
   
        if(addLips.style.display === "none"){
            addLips2.style.display = "none";
            addLips.style.display = "block";
           
        } else{
            addLips.style.display = "none";
        }
    }

    AddOtherLips(){
        const addLips = document.querySelector(".avatar-lips");
        const addLips2 = document.querySelector(".avatar-lips2");

        if(addLips2.style.display === "none"){
            addLips.style.display = "none";
            addLips2.style.display = "block";
           
        } else{
            addLips2.style.display = "none";
        }
    }

    AddBrows(){
        const addBrows = document.querySelector(".avatar-brows");
        const addBrows2 = document.querySelector(".avatar-brows2");
   
        if(addBrows.style.display === "none"){
            addBrows2.style.display = "none";
            addBrows.style.display = "block";
           
        } else{
            addBrows.style.display = "none";
        }
    }

    AddOtherBrows(){
        const addBrows = document.querySelector(".avatar-brows");
        const addBrows2 = document.querySelector(".avatar-brows2");

        if(addBrows2.style.display === "none"){
            addBrows.style.display = "none";
            addBrows2.style.display = "block";
           
        } else{
            addBrows2.style.display = "none";
        }
    }

    AddGlasses(){
        const addGlasses = document.querySelector(".avatar-glasses");
        const addGlasses2 = document.querySelector(".avatar-glasses2");
   
        if(addGlasses.style.display === "none"){
            addGlasses2.style.display = "none";
            addGlasses.style.display = "block";
           
        } else{
            addGlasses.style.display = "none";
        }
    }

    AddOtherGlasses(){
        const addGlasses = document.querySelector(".avatar-glasses");
        const addGlasses2 = document.querySelector(".avatar-glasses2");

        if(addGlasses2.style.display === "none"){
            addGlasses.style.display = "none";
            addGlasses2.style.display = "block";
           
        } else{
            addGlasses2.style.display = "none";
        }
    }

}