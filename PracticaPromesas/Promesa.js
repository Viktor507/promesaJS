
const target1 = document.getElementById("txt1")
const target2 = document.getElementById("btn1")
const target3 = document.getElementById("et1")
const target4 = document.getElementById("txt2")
const target5 = document.getElementById("txt3")
let valor


function activarPromesa() {
    
    target1.style.visibility = "hidden"
    target2.style.visibility = "hidden"
    target3.style.visibility = "hidden"
    target4.style.visibility = "hidden"
    target5.style.visibility = "visible"

    valor = parseInt(target3.value)

    if (valor >= 0 & valor <= 10) {
        const tiempo = 5000
        const promise = new Promise((resolve, reject) => {
            const number = Math.floor(Math.random() * 10);
            contadorPromesa(tiempo)
            setTimeout(
                () => number == valor
                    ? resolve(number)
                    : reject(error = 'No lo has adivinado. El número era: ' + number + ". \nTú ingresaste: " + valor),
                tiempo
            );
        });

        promise
            .then(number => Swal.fire({
                title: '¡Ganaste!',
                text: "Lo has adivinado. El número es: " + number,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }))
            .catch(error => Swal.fire({
                title: '¡Perdiste!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            }))

    } else {

        Swal.fire({
            title: '¡Faltan datos!',
            text: "No se ha ingresado ningún valor",
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
        restablecer()
    }

    if (valor < 0 | valor > 10) {

        Swal.fire({
            title: '¡Fuera de rango!',
            text: "El valor ingresado no se encuentra en el rango",
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })

        restablecer()
    }


}

async function contadorPromesa(tiempo) {
    let x = tiempo / 1000
    for (let i = 0; i < x; i++) {
        target5.innerText = x - i
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    Promise
        .finally(restablecer())
}

function restablecer() {
    target1.style.visibility = "visible"
    target2.style.visibility = "visible"
    target3.style.visibility = "visible"
    target4.style.visibility = "visible"
    target5.style.visibility = "hidden"
    target3.value = "0"
}


