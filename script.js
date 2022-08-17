class Usuario {
    constructor(nombre, numero, email){
        this.nombre = nombre
        this.numero = numero
        this.email = email
    }
}


const formulario = document.getElementById("formulario")
const botonReserva= document.getElementById("botonReserva")
const contenedorUno = document.getElementById("contenedorUno")

const usuarios = []

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    const nombre = document.getElementById("nombre").value
    const numero = document.getElementById("numero").value
    const email = document.getElementById("email").value

    const usuarioN = new Usuario (nombre, numero, email)

    usuarios.push(usuarioN)

    formulario.reset()
    alert("Reserva Exitosa")
    console.log(usuarios)

})

botonReserva.addEventListener('click', () =>{
    contenedorUno.innerHTML = ""
    usuarios.forEach((usuarioN, indice) => {
        contenedorUno.innerHTML += `
        <div class="card" id="user${indice}" style="width: 18rem;margin:10px;">
                <div class="card-body">
                <h5> !! Felicitaciones Usted Reservo una cabaña </h5>
                    <h5 class="card-title"> a nombre de : ${usuarioN.nombre}</h5>
                    <p class="card-text">${usuarioN.email}</p>
                </div>
            </div>
        
        `
    })
})