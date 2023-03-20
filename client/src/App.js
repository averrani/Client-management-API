//on dit a react qu'on utilise les hooks useState et useEffect par defaut
import React, {useEffect, useState} from 'react'

function App() {
    // use state permet de creer un etat, ici avec un objet vide par defaut
    //, la valeur de l'etat est save dans backendData
    //setbackendData est un callback qu'on peut appeler pour modifier l'etat
    //a l'appel du callback, le rendu est redeclenché( l'appel a la fonction app() eest redeclenche)
    //apres le redeclenchement, la valeur de backendData est changé avec la valeur qu'on a mis en parametre du callback
    // ici backendata prend la valeur data

    const[backendData, setbackendData] = useState([{}])
    useEffect(() => {
        //fetch api permet de recuperer ce qui a ete recupéré du backend dans la commande app.get 
        // puis avec l'appel a setbackendData stocke ce qu'il a recupéré dans backendData
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {  
                setbackendData(data)
            }
        )
    }, [])// le code de useEffect est reexecuté si l'une des valeurs du tableau est modifié
    //ici le tableau est vide : le code est executé que qd le code est monté, 1 seule fois 
    return (
    <div>
        app
    </div>
    )
}

export default App


