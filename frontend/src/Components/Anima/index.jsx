import React from 'react';

import './anima.css';

const Anima = () => {

    setTimeout(() => {
        // logica
        document.getElementById('bg-anima').style = "display: none";

    }, 3000)

    return (

        <div className="bg-anima" id="bg-anima">

            <div className="anima">
                <h2>Luke Code</h2>
            </div>

        </div>

    )

}

export default Anima;