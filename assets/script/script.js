const tema = document.querySelector('.tema');


const mostrarMenuTemas = ()=>{
    const showThemes = document.querySelectorAll('.showThemes')
    // Revisar comentarios abajo para después optimizar
    for(let i = 0; i < showThemes.length; i += 1){
        showThemes[i].addEventListener('mouseenter', ()=>{
            themes.classList.add('showContThemes')
            themeTxt.classList.add('hideTxt')
        })
    }
    for(let i = 0; i < showThemes.length; i += 1){
        showThemes[i].addEventListener('mouseleave', ()=>{
            themes.classList.remove('showContThemes')
            themeTxt.classList.remove('hideTxt')
        })
    }
}

const cambiarTemas = ()=>{
    const btnTheme = document.querySelectorAll('.theme')

    const cambiarTema = (e)=>{
        const targetTema = e.target.id;
        const bordeTarget = e.target;
        console.log(targetTema)

        tema.className = 'tema '  + targetTema
        // document.querySelector('.selected').classList.remove('selected')
        // bordeTarget.classList.add('selected')
        guardarEnStorage(targetTema)
    }

    for(let i = 0; i < btnTheme.length; i += 1){
        btnTheme[i].addEventListener('click', cambiarTema)
    }
}
const guardarEnStorage = (targetTema)=>{
    if(tema.classList.contains(targetTema)){
        localStorage.setItem('tema', targetTema)
    }else{
        localStorage.setItem('tema', 'light')
    }
}

const cargarTema = ()=>{
    const temaGuardado = localStorage.getItem('tema')

    // const btnTema = document.getElementById(temaGuardado)

        if(temaGuardado === 'pink'){
        tema.classList.add('pink')
        btnTema.classList.add('selected')
    }else if(temaGuardado === 'dark'){
        tema.classList.add('dark')
        btnTema.classList.add('selected')
    }else if(temaGuardado === 'premium'){
        tema.classList.add('premium')
        btnTema.classList.add('selected')
    }else if(temaGuardado === 'light'){
        tema.className = 'tema'
        btnTema.classList.add('selected')
    }

    // if(temaGuardado === btnTema.id){
    //     tema.classList.add(btnTema.id)
    //     btnTema.classList.add('selected')
    // }
}
mostrarMenuTemas()

cambiarTemas()
cargarTema()



// themeTxt.addEventListener('mouseenter', ()=>{
//     themes.classList.add('showContThemes')
// })
// themes.addEventListener('mouseenter', ()=>{
//     themes.classList.add('showContThemes')
// })
// themeTxt.addEventListener('mouseleave', ()=>{
//     themes.classList.remove('showContThemes')
// })
// themes.addEventListener('mouseleave', ()=>{
//     themes.classList.remove('showContThemes')
// })



// const cambiarTema = (e)=>{
//     const targetTema = e.target.id;
//     const bordeTarget = e.target;
//     console.log(targetTema)
//     // if(targetTema === 'dark'){
//     //     tema.classList.add('dark')
//     //     tema.classList.remove('light')
//     //     tema.classList.remove('pink')
//     //     tema.classList.remove('')
//     // }else if(targetTema === 'light'){
//     //     tema.classList.remove('dark')
//     //     // tema.classList.add('light')
//     //     tema.classList.remove('pink')
//     //     tema.classList.remove('premium')
//     // }else if(targetTema === 'pink'){
//     //     tema.classList.remove('dark')
//     //     tema.classList.remove('light')
//     //     tema.classList.add('pink')
//     //     tema.classList.remove('premium')
//     // }else if(targetTema === 'premium'){
//     //     tema.classList.remove('dark')
//     //     tema.classList.remove('light')
//     //     tema.classList.remove('pink')
//     //     tema.classList.add('premium')
//     //     bordeTarget.classList.add('selected')
//     // }
//     tema.className = 'tema '  + targetTema
//     document.querySelector('.selected').classList.remove('selected')
//     bordeTarget.classList.add('selected')

//     if(tema.classList.contains(targetTema)){
//         localStorage.setItem('tema', targetTema)
//     }else{
//         localStorage.setItem('tema', 'light')
//     }

//     // if(tema.classList.contains('pink')){
//     //     localStorage.setItem('tema', 'pink')
//     // }else if(tema.classList.contains('dark')){
//     //     localStorage.setItem('tema', 'dark')
//     // }else if(tema.classList.contains('premium')){
//     //     localStorage.setItem('tema', 'premium')
//     // }else{
//     //     localStorage.setItem('tema', 'light')
//     // }
// }

    // if(temaGuardado === 'pink'){
    //     tema.classList.add('pink')
    //     btnTema.classList.add('selected')
    // }else if(temaGuardado === 'dark'){
    //     tema.classList.add('dark')
    //     btnTema.classList.add('selected')
    // }else if(temaGuardado === 'premium'){
    //     tema.classList.add('premium')
    //     btnTema.classList.add('selected')
    // }else if(temaGuardado === 'light'){
    //     tema.className = 'tema'
    //     btnTema.classList.add('selected')
    // }




/* SECCIÓN OBTENIENDO LA HORA */

// let fecha = new Date()
// console.log(fecha)

// let hora = fecha.getHours()
// // let hora = 18
// console.log(hora)

// if(hora >= 18 ){
//     tema.classList.add('dark')
// }



/* SEGUNDA PÁGINA */
// const enviar = document.getElementById('enviar')
// const firstAnd = document.getElementById('firstAnd')
// console.log(firstAnd)
// // console.log(firstAnd.checked)
// const secondAnd = document.getElementById('secondAnd')
// const resAnd = document.getElementById('resAnd')

// console.log(typeof firstAnd)