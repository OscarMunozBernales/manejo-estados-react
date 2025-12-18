

import type { PropsClassStateInterface, StateClassStateInterface } from "@interfaces/index";
import React from "react";

class ClassState extends React.Component<PropsClassStateInterface, StateClassStateInterface> {

    constructor(props: PropsClassStateInterface) {
        super(props);
        this.state = {
            error: false
        } as StateClassStateInterface;
    }

    render(): React.ReactElement {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>

                <p>Por favor, escribe el código de seguridad.</p>

                {
                    this.state.error && (<p>Error: el código es incorrecto</p>)
                }

                <input placeholder="Código de seguridad" />
                <button 
                    onClick={() => 
                        this.setState((_prev: StateClassStateInterface) => ({ error: !_prev.error })
                    )}
                >Comprobar</button>
            </div>
        );
    }
}

export default ClassState;