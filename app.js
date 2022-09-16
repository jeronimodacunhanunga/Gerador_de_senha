let senhaelemento = document.querySelector('div.gerador-senha p')
const btngerador_senha = document.querySelector('div.gerador-senha button')
const caracter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","10","11","12","13"
,"#","$","%","&","*","@"]

let senha = "",intervalo

const geradorsenha = ()=> {
 for (let i = 1; i <= 12; i++) {
    
        senha += caracter[Math.floor(Math.random() * caracter.length)]
    }
    senhaelemento.textContent = senha
    senha = ""
   // console.log(senha)
}
const efeito = (btn, loop, tempo)=> {
intervalo = setInterval(() => {
    geradorsenha()
}, 100);

setTimeout(() => {
    clearInterval(intervalo)
}, 10*50);
 }

btngerador_senha.addEventListener('click', () => {
   efeito()
})

senhaelemento.onclick = () => {
    navigator.clipboard.writeText(senhaelemento.textContent)
senhaelemento.classList.add("copiada")

setTimeout(() => {
    senhaelemento.classList.remove("copiada")
}, 2000);

}