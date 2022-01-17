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
                                                                                    /* essa função captura o evento de clique no botão "comentar"
                                                                                     e gera um alerta caso o valor seja nulo ou atualiza a constante "todososcomentarios"
                                                                                     com o valor contido no array [todos os comentarios + comentario (atual)] e exibe na lista 
                                                                                     não ordenada, cada valor como um item */
    {const todososcomentsanteriores = [...todososcomentarios, comentario]
    settodososcomentarios(todososcomentsanteriores)
    document.getElementById("coment-box").value = "";        /* Nessa linha, após clicar no botão e realizar as ações acima, eu peço para zerar o valor contido no coment box (valor atual) e com isso, eu limpo o input, após o submit do comentário desejado  */
    setcomentario() }
}

  function zerar() {
    const todososcomentsanteriores = []
    settodososcomentarios(todososcomentsanteriores)   /* essa funçao está encarregada de zerar o array que contém meus comentário anteriores e o comentário atual. */
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
