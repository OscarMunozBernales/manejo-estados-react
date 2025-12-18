
import React from "react";

/**
 * Clase de ejemplo para ver comportameinto de ciclo de vida de un componente de clase.
 * No tiene props ni estado.
 * 
 */
class Loading extends React.Component {

    componentWillUnmount(): void {
        console.log("El componente de Loading ha sido desmontado");
    }

    render(): React.ReactElement {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
}

export default Loading;