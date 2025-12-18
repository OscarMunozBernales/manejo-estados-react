import type { PropsUseStateInterface, StateUseStateInterface } from "@interfaces/use-state.interface";
import React from "react";

export const UseState = (props: PropsUseStateInterface): React.ReactElement => {

    const [{ error }, setError] = React.useState<StateUseStateInterface>({
        error: false
    }); 

    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>

            {
                error && (<p>Error: el código es incorrecto</p>)
            }

            <input placeholder="Código de seguridad" />
            <button
                onClick={() => 
                    setError((prev: StateUseStateInterface) => ({ error: !prev.error }))
                }
            >Comprobar</button>
        </div>
    );
};