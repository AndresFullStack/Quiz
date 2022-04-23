const lienzo = document.querySelector('#lienzo')

const ctx = lienzo.getContext('2d')

const cuadradoYrectangulo = (x, y, w, h, colorC, colorS) => {

    ctx.beginPath()
    ctx.fillStyle = colorC
    ctx.fillRect(x, y, w, h)

    // ctx.lineWidth = 6
    // ctx.stokeStyle = colorS

    //se puede ahorrar una linea de codigo con esta funcion strokeRect
    // ctx.rect(x, y, w, h)

    // ctx.stroke()
    // ctx.beginPath()
}

const circulo = (x, y) => {

    ctx.beginPath()
    ctx.arc(x, y, 100, 0, 2 * Math.PI)
    ctx.fillStyle = 'cyan'
    ctx.fill()
    ctx.lineWidth = 6
    ctx.strokeStyle = 'cyan'
    ctx.stroke()
}

const triangulo = () => {
    ctx.fillStyle = "green"
    ctx.fillRect(10, 10, 500, 100)

    ctx.lineWidth = 6
    ctx.stokeStyle = "rgba(255, 0, 255, 1)"

    ctx.rect(10, 10, 500, 100)
    ctx.stroke()
}

//rectangulo
cuadradoYrectangulo(480, 330, 500, 150, 'red', 'red')

//cuadrado
cuadradoYrectangulo(10, 10, 180, 180, 'green', 'green')

//circulo
circulo(110, 360)




// //Relleno
// ctx.fillStyle = "green"
// ctx.fillRect(10, 10, 500, 100)
//     /*
//         primer: posicion en x, segundo: posicion en y
//         tercer: el width para la forma que se va a dibujar, que no se pase del width del padre
//         cuarto: el height para la forma
//     */

// //Contorno
// //tamaño de grosor (de la linea del contorno)
// ctx.lineWidth = 6
// ctx.stokeStyle = "rgba(255, 0, 255, 1)"

// // el contexto sea una linea recta, con estos tamaños
// ctx.rect(10, 10, 500, 100)
// ctx.stroke()