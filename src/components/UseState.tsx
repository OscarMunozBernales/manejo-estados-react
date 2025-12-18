import type { PropsUseStateInterface, StateUseStateInterface } from "@interfaces/use-state.interface";
import React from "react";

const SECURITY_CODE = "paradigma";

export const UseState = (props: PropsUseStateInterface): React.ReactElement => {

    const [{ error, loading, value }, setState] = React.useState<StateUseStateInterface>({
        error: false,
        loading: false,
        value: "",
    });

    React.useEffect(() => {
        if (!!loading) {
            setTimeout(() => {
                setState((prev: StateUseStateInterface) => ({
                    ...prev,
                    loading: false,
                    error: prev.value !== SECURITY_CODE,
                }));
            }, 3000);
        }
    }, [ loading ]); // useEffect se vuelve a ejecutar cuando cambia "loading"

    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>

            {
                error && (<p>Error: el código es incorrecto</p>)
            }

            {
                loading && (<p>Cargando...</p>)
            }

            <input 
                placeholder="Código de seguridad" 
                value={value}
                onChange={(event) => {
                    setState((prev: StateUseStateInterface) => ({
                        ...prev,
                        error: false,
                        value: event.target.value,
                    }));
                }}
            />
            <button
                onClick={() =>
                    setState((prev: StateUseStateInterface) => ({
                        ...prev,
                        loading: !prev.loading
                    }))
                }
            >Comprobar</button>
        </div>
    );
};