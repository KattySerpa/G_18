/*sera posible desde js a html 
asi como obtenemos elementos tambien puedo crearlos
*/

document.write("hola genteee");
document.write("hola gente con temblores");





const input=Array.from(document.querySelectorAll("input"))

const contenedor = document.querySelector("#container-list")

const ul = document.createElement("ul")

input.map((element)=>{
    const li=document.createElement("li");
    const elementText=document.createTextNode(element.value);
    li.appendChild(elmentText)
    ul.appendChild(li);
})