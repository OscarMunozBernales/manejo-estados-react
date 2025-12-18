import type { PropsUseStateInterface, StateUseStateInterface } from "@interfaces/use-state.interface";
import React from "react";

export const UseState = (props: PropsUseStateInterface): React.ReactElement => {

    const [{ error, loading }, setState] = React.useState<StateUseStateInterface>({
        error: false,
        loading: false,
    });

    React.useEffect(() => {
        console.log("Empezando el efecto");

        if (!!loading) {
            setTimeout(() => {
                console.log("Haciendo la comprobación");

                setState((prev: StateUseStateInterface) => ({
                    ...prev,
                    loading: false,
                }));

                console.log("Terminando la comprobación");
            }, 3000);
        }

        console.log("Terminando el efecto");
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

            <input placeholder="Código de seguridad" />
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