import React from "react";
import Tela2 from "./Tela2";
import raio from "../assets/img/raio.png"

export default function TelaInicial() {
    const [clicked, setClicked] = React.useState(false);

    if (clicked === false) {
        return (
            <>
                <div className="organizaçãotela">
                    <div className="displayflex"><img className="raio" src={raio} alt=""/></div>
                    <div className="Zaprecall">ZapRcall</div>
                    <div className="button" onClick={() => setClicked(true)}>
                        <div className="txt">Iniciar Recall!</div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <Tela2 />
        )


    }



}