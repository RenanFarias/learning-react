import './index.css' //import relativo para elementos da mesma pasta
import ReactDOM from 'react-dom' //para renderizar elementos
import React from 'react'//para usar o JSX

import Primeiro from './components/basics/Primeiro'



/*Pega o elemnto do html (index.html) e adiciona o 
texto no elemento

const el = document.getElementById('root')
ReactDOM.render('Olá React!!!', el)*/


const tag = <strong>Olá React</strong>
ReactDOM.render(
    //isso eh renderizado gracas ao JSX que converte via React para mostrar em tela
    <div>
       <Primeiro></Primeiro>       
    </div>,
    document.getElementById('root')
)

