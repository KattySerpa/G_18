//existe dentro de js el documento Object model (dom) este atributo de js me permite obtener elemntos del html

/* para obtener elementos segun nombre de su ETIQUETA
TAG = etiqueta en ingles, ejemplo
h1 -div -input
*/

const inputs= document.getElementsByTagName("input");
console.log("input",inputs);

const newInputs=Array.from(inputs);
console.log("newInputs",newInputs)

newInputs.map((newInput)=>{
    console.log("nueva forma ",newInput.value)
}
)

for (let i = 0; i < inputs.length; i++) {
    console.log("input", inputs[i].value);
}


const password = document.getElementById('input_password')
console.log("password",password)

password.style.backgroundColor="#000"
password.style.color="#fff"

//por calses
const inputsName = document.getElementsByClassName("last_name");
console.log(inputsName)

const inputName = Array.from(inputsName);
console.log("inputName")

// for (let i = 0; i < texto.length; i++) {
//     //console.log("input", inputs[i].value);
//     texto[i].style.backgroundColor="#000"
//     style.color="#000"
    
// }
// newInputs.map((newInput)=>{
//     console.log("nueva forma ",newInput.value)
// }
// )



//otro ejemplo

const form=document.getElementsByTagName("form")
console.log(form)

const input2 = document.querySelectorAll('input')
console.log(input2);

