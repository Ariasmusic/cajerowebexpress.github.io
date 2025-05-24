
const PinCorrecto = "1234";
let saldo = 1000; // Ejemplo de saldo



function consultarSaldo() {
    const pin = document.getElementById("pin").value;
    if (pin === "") {
        alert("Debe Ingresar su PIN");
    } else {
        if (pin === PinCorrecto) {
            alert("PIN correcto");
            alert("Su saldo es: " + saldo);
            console.table("Su saldo es: " + saldo);

        } else {
            alert("PIN incorrecto");
        }
    }
}
function depositar() {
    const pin = document.getElementById("pin").value;
    const cant_monto = document.getElementById("cant").value;
    if (pin === "") {
        alert("Debe Ingresar su PIN");
    } else {
        if (pin === PinCorrecto) {
            alert("PIN correcto");
            if (cant_monto > 0) {
                saldo += parseFloat(cant_monto);
                console.table("Deposito de: " + cant_monto);

                alert("Deposito exitoso");
                console.table("Su saldo es: " + saldo);
                document.getElementById("cant").value = "";
            } else {
                alert("Monto no valido");
            }
        } else {
            alert("PIN incorrecto");
        }
    }
}
function retirar() {
    const pin = document.getElementById("pin").value;
    const cant_monto = document.getElementById("cant").value;
    if (pin === "") {
        alert("Debe Ingresar su PIN");
    } else {
        if (pin === PinCorrecto) {
            alert("PIN correcto");
            if (cant_monto > 0) {
                saldo -= parseFloat(cant_monto);
                console.table("Retiro de: " + cant_monto);

                console.table("Su saldo es: " + saldo);

                alert("Retiro exitoso");
                document.getElementById("cant").value = "";
            } else {
                alert("Monto no valido");
            }
        } else {
            alert("PIN incorrecto");
        }
    }
}