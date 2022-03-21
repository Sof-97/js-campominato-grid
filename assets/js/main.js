let container = document.getElementById('grid');
let mode = 0;
//Click su play
document.getElementById('start').addEventListener('click',
    function(){
        let levels = document.getElementById('levels').value;
        switch (levels){
            case "uno":
                mode = 100;
                document.documentElement.style.setProperty('--column', '10');
                break;
            case "due":
                mode = 81;
                document.documentElement.style.setProperty('--column', '9');
                break;
            case "tre":
                mode = 49;
                document.documentElement.style.setProperty('--column', '7');
                break
        }
        //Rimozione dei div precedenti
        container.innerHTML = '';
        //Box creation
        box(mode)
    }    
)

function box(a){
    for(i = 1; i<=a; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = i;
        container.appendChild(box);
        box.addEventListener('click',
             function(){
                 this.classList.add('clicked');
             }
        )
    }
}