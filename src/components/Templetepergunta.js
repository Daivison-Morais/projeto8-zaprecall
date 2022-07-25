import React from "react"
import play from "../assets/img/play.png";
import buttonvirar from "../assets/img/virar.png"
import certo from "../assets/img/certo.png";
import duvida from "../assets/img/duvida.png";
import errado from "../assets/img/errado.png";

export default function Templetepergunta({ lstfeitos, setLstfeitos, pergunta, proxpergunta, resposta }) {

    const [clicked, setClicked] = React.useState(pergunta);
    const [virar, setVirar] = React.useState(play);
    const [mostraselecao,setMostraselecao] = React.useState("displaynone");
    const [somebutton, setSomebutton] = React.useState("");
    const [riscatexto, setRiscatexto] = React.useState("");
    const [cor, setCor] = React.useState("");

    let [contador, setContador] = React.useState(0);
    let [questoesfeitas, setQuestoesfeitas]=React.useState(Number(0));

    function PerguntaeDesvira (){
    
        setContador(contador=contador + 1)
        console.log(contador)

        if (contador === 2) {
            setClicked(resposta)
            setMostraselecao("")
            setSomebutton("displaynone")
            

        } if(contador < 2){
            setClicked(proxpergunta)
        setVirar(buttonvirar)
        }
        if(contador === 3){
            setClicked(pergunta)
            setMostraselecao("displaynone")
            setSomebutton("")
            setRiscatexto("linhatracada")

        }
    }
function contar (){

}
    function salvaresultados(resp){
        if(resp === "zap"){
            setSomebutton("")
            setVirar(certo)
            setCor("verde") 
            setQuestoesfeitas(questoesfeitas++)  
            setLstfeitos([...lstfeitos, ])
        }
        if(resp === "quasenaolembro"){
            setSomebutton("")
            setVirar(duvida)
            setCor("laranja")  
            setQuestoesfeitas(questoesfeitas++) 
            console.log("2", questoesfeitas)
        }
        if(resp === "naolembrei"){
            setSomebutton("")
            setVirar(errado)
            setCor("vermelho")
            setQuestoesfeitas(questoesfeitas++)
            console.log("3", questoesfeitas)
        }
    }

    return (
        <>
            <div className="caixapergunta" onClick={PerguntaeDesvira}>
                <div className="displayflex2">
                    <div className= {`txtpergunta ${riscatexto} ${cor}`}>{clicked}</div>
                    <div className= {`buttonplay ${somebutton}`}  ><img src={virar} alt="" /></div>
                </div>

                <div className= {`blocoselecao  ${ mostraselecao }`} >
                    <div className="naolembrei" onClick={() => salvaresultados("naolembrei")}>Não lembrei</div>
                    <div className="quasenaolembro" onClick={()=> salvaresultados("quasenaolembro")}>Quase não me lembro</div>
                    <div className="zap" onClick={() => salvaresultados("zap")}>Zap</div>
                </div>

            </div>


        </>
        
    )

    
}