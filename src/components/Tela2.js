import React from "react";
import raio from "../assets/img/raio.png";
import Templetepergunta from "./Templetepergunta"

export default function Tela2() {  
    const [lstfeitos, setLstfeitos] = React.useState([0]);   
    
    <Templetepergunta lstfeitos={lstfeitos} setLstfeitos={setLstfeitos}/>
    
    const lstperguntas = [
      {
        pergunta: "pergunta 1",
        proxpergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript",
      },
      {
        pergunta: "pergunta 2",
        proxpergunta: "O React é?",
        resposta: "uma biblioteca JavaScript para construção de interfaces",
      },
      {
        pergunta: "pergunta 3",
        proxpergunta: "Componentes devem iniciar com?",
        resposta: "letra maiúscula",
      },
      {
        pergunta: "pergunta 4",
        proxpergunta: "Podemos colocar?",
        resposta: "expressões",
      },
      {
        pergunta: "pergunta 5",
        proxpergunta: "O ReactDOM nos ajuda?",
        resposta:
          "interagindo com a DOM para colocar componentes React na mesma",
      },
      {
        pergunta: "pergunta 6",
        proxpergunta: "Usamos o npm para?",
        resposta: "gerenciar os pacotes necessários e suas dependências",
      },
      {
        pergunta: "pergunta 7",
        proxpergunta: "Usamos props para?",
        resposta: "passar diferentes informações para componentes ",
      },
      {
        pergunta: "pergunta 8",
        proxpergunta: "Usamos estado (state) para?",
        resposta:
          "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      },
    ];



    return (
        <>
            <div className="displayflex">
                <div><img className="raio2" src={raio} alt="" /></div>
                <div className="Zaprecall">ZapRcall</div>
            </div>
            <div className="blocoperguntas">

                {lstperguntas.map((perg, index) => <Templetepergunta key={index} pergunta={perg.pergunta} proxpergunta={perg.proxpergunta} resposta={perg.resposta} />)
                }
            </div>
            <div className="barrainfo">
                <div>
                <div>{lstfeitos.length}/8 CONCLUIDOS</div>
                    <div className="salvaresultados"></div>
                </div>


            </div>
        </>
    )


}