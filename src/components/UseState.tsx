import type { PropsUseStateInterface, StateUseStateInterface } from "@interfaces/use-state.interface";
import React from "react";

const SECURITY_CODE = "paradigma";

export const UseState = (props: PropsUseStateInterface): React.ReactElement => {

    const INITIAL_STATE: StateUseStateInterface = {
        error: false,
        loading: false,
        value: "",
        confirmed: false,
        deleted: false,
    };

    const [{ error, loading, value, confirmed, deleted }, setState] = React.useState<StateUseStateInterface>(INITIAL_STATE);

    const changeInputValue = (newValue: string) => {
        setState((prev: StateUseStateInterface) => ({
            ...prev,
            error: false,
            value: newValue,
        }));
    }

    const searchValue = () => {
        setState((prev: StateUseStateInterface) => ({
            ...prev,
            loading: !prev.loading,
        }));
    }

    React.useEffect(() => {
        if (!!loading) {
            setTimeout(() => {
                setState((prev: StateUseStateInterface) => ({
                    ...prev,
                    loading: false,
                    error: prev.value !== SECURITY_CODE,
                    confirmed: prev.value === SECURITY_CODE,
                }));
            }, 3000);
        }
    }, [ loading ]); // useEffect se vuelve a ejecutar cuando cambia "loading"

    if ( !confirmed && !deleted ) {
    return (
        <div>
            <h2>Eliminar {props.name}</h2>

            <p>Por favor, escribe el código de seguridad.</p>

            { error && (<p>Error: el código es incorrecto</p>) }

            { loading && (<p>Cargando...</p>) }

            <input 
                placeholder="Código de seguridad" 
                value={value}
                onChange={(event) => changeInputValue(event.target.value)}
            />
            <button
                onClick={() => searchValue()}
            >Comprobar</button>
        </div>
    );
    } else if ( confirmed && !deleted ) {
        return (
            <div>
                <h2>Eliminar {props.name}</h2>

                <p>¿Estás seguro de que quieres eliminarlo?</p>

                <button
                    onClick={() => setState((prev: StateUseStateInterface) => ({
                        ...prev,
                        deleted: true,
                    }))}
                >Sí, eliminar</button>
                <button
                    onClick={() => setState((prev: StateUseStateInterface) => ({
                        ...prev,
                        confirmed: false,
                        value: "",
                    }))}
                >No, me arrepentí</button>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Eliminar {props.name}</h2>

                <p>Eliminado con éxito.</p>

                <button
                    onClick={() => setState({...INITIAL_STATE})}
                >Volver</button>
            </div>
        );
    }
};