import React, { useState } from 'react';
import ModalTeste from './modal';

function App() {
    const [json, setJson] = useState(undefined);

    function handleRequest() {
        
        fetch('http://cosmosnethomo.pmenos.com.br/apifarmaciapopularally/api/Solicitacao')
            .then(http => {
                if(http.ok && http.status === 200) {
                    return http.json();
                } else {
                    throw new Error(http.statusText);
                }
            })
            .then(json => {
                setJson(json);
            })
            .catch(error => {
                alert(error);
            });
    }

    return <>
        <ModalTeste />
        <button id="btn01">Request</button>
        {json && (json.result ? 
            <ul>
                {json.content.map(solicitacao => <li>{solicitacao.usuarioVendedor}</li>)}
            </ul>
            : json.message )}
    </>;
}

export default App;