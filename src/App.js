import React from 'react'
import image from './img/people.svg'

import './App.css';

function App() {

  const [comentario, setcomentario] = React.useState()
  const [todososcomentarios, settodososcomentarios] = React.useState([])  
  

  function digitei(event){
      setcomentario(event.target.value)      /* essa função armazena cada valor digitado na text area, dentro da const setcomentario */
  }
  

  function cliqueinobotao() {
    if (comentario == null)
         window.alert("digite um comentário antes de prosseguir.")

    else

    {const todososcomentsanteriores = [...todososcomentarios, comentario]
    settodososcomentarios(todososcomentsanteriores)
    document.getElementById("coment-box").value = "";
    setcomentario() }
}

  function zerar() {
    const todososcomentsanteriores = []
    settodososcomentarios(todososcomentsanteriores)
  }




  return (
    <div id = "page" > 
      <section id= "container">
        <img src={image} alt="imagem-pessoas" />
        <textarea onChange={digitei} placeholder = "Seu comentário aqui." id = "coment-box" ></textarea>
        <button onClick={cliqueinobotao} >Comentar</button>
        <nav>
          <ul>
            {todososcomentarios.map(coment => (
          
               <li key = {coment}> {coment} </li>
          
            ))}
          </ul>
        </nav>

        <button id= "resetbutton" onClick= {zerar}>RESET</button>
      </section>

      
    </div>
  );
}

export default App;
