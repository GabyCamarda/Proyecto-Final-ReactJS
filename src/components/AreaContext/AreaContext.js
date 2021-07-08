import React, {createContext, useState} from 'react';


export const AreaContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([   

        
        {id:1, image:"https://http2.mlstatic.com/D_NQ_NP_625859-MLA40763758065_022020-O.webp", title:"Black&Decker", price:"8500", description:"Herramienta de trabajo para construcción"},
        {id:2, image:"https://http2.mlstatic.com/D_NQ_NP_917528-MLA40771057919_022020-O.webp", title:"Atornillador Maquita", price:"10000", description:"Atornillador maquita de trabajo para el hogar"},
        {id:3, image:"https://http2.mlstatic.com/D_NQ_NP_681375-MLA40025568243_122019-O.webp", title:"Kit de herramientas", price:"10000", description:"SET DE HERRAMIENTAS Martillo  garra 80Z X 1vel torpeX 1"}
        
        
    ]);

    return(
        <AreaContext.Provider value={[cart, setCart]}>
            {props.children}
        </AreaContext.Provider>
        
    )
}
