class Validator {
    constructor(){
        this.validations = [
            'data-min-length', 
        ]
    }
    // iniciar a validação dos campos
    validate(form){

        //pegar inputs
        let inputs = form.getElementsByTagName('input');

        //HTMLColeection -> array
        let inputArray = [...inputs];
        inputArray.forEach(function(input) {
            console,log(input);
            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) = null) {
                    console.log('achou validação');
                }
            }

        }, this);


    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submt");

let validator = new Validator();


//elemento que dispara as validações
submit.addEventListener('click', function(e){

    e.preventDefault();

    validator.validate(form);

});