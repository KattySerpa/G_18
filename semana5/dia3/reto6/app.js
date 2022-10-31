//primero dar valor por defector

let count= 0;

//seleccionar los botones (atraparlos)
//selecotr simple con query selctor, tambien podria ser con getElementbyId

//atraaremos
const value = document.querySelector("#value"); //michi por el id
const item = document.querySelectorAll(".btn"); //punto por ser clase

item.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;        
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count===0){
            value.style.color="#222";
        }
        value.textContent=count;
    })
})

