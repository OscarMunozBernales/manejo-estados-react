

import type { PropsClassStateInterface, StateClassStateInterface } from "@interfaces/index";
import React from "react";
import Loading from "./Loading.component";

class ClassState extends React.Component<PropsClassStateInterface, StateClassStateInterface> {

    constructor(props: PropsClassStateInterface) {
        super(props);
        this.state = {
            error: false,
            loading: true,
        } as StateClassStateInterface;
    }

    /**
     * Ciclo de vida de un componente de clase
     * Desactualizado, obsoleto en las versiones recientes de React.
     */
    // componentWillMount(): void {
    //     // Lógica antes de que el componente se monte
    // }

    // Este metodo es como si le pasaramos un useEffect con un array de dependencias vacío []
    // componentDidMount(): void {
    //     console.log("El componente de ClassState se ha montado");
    // }

    /**
     *  Ciclo de vida de un componente de clase
     * @param prevProps 
     * @param prevState 
     * @param snapshot 
     */
    componentDidUpdate(prevProps: Readonly<PropsClassStateInterface>, prevState: Readonly<StateClassStateInterface>, snapshot?: any): void {
        console.log("🚀 ~ ClassState ~ componentDidUpdate ~ snapshot:", snapshot);
        console.log("El componente de ClassState se ha actualizado");

        if (this.state.loading && !prevState.loading) {
            console.log("Haciendo la comprobación del código de seguridad");

            setTimeout(() => {
                this.setState((prev: StateClassStateInterface) => ({ 
                    ...prev,
                    loading: !prevState.loading,
                }));

                console.log("Terminando la comprobación del código de seguridad");
            }, 3000);
        }
    }

    componentWillUnmount(): void {
        // Lógica antes de que el componente se desmonte
    }

    render(): React.ReactElement {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {
                    this.state.error && (<p>Error: el código es incorrecto</p>)
                }

                {
                    this.state.loading && (<Loading />)
                }

                <input placeholder="Código de seguridad" />
                <button 
                    onClick={() => 
                        this.setState((prev: StateClassStateInterface) => ({ 
                            ...prev,
                            loading: !prev.loading
                        })
                    )}
                >Comprobar</button>
            </div>
        );
    }
}

export default ClassState;