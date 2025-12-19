export interface PropsUseStateInterface {
    name: string;
}

export interface StateUseStateInterface {
    error: boolean;
    loading: boolean;
    value: string;
    confirmed: boolean;
    deleted: boolean;
}

//Como exportar las llaves de una interfaz
export type StateUseStateKeys = keyof StateUseStateInterface;