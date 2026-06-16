import React, { createContext, useState, useContext } from 'react';
import { Jugador } from '../models/Jugador';
import prelistaData from '../data/prelista.json';


interface SeleccionContextType {
    preseleccionados: Jugador[] ;
    seleccionadosFinales: Jugador[] ; 
    moverAPreseleccionados: (jugador: Jugador) => void;
    moverASeleccionadosFinales: (jugador: Jugador) => void;
    puedeCargarListaFinal: () => string | null;
}

const SeleccionContext = createContext<SeleccionContextType | undefined>(undefined);

export function SeleccionProvider({ children }: { children: React.ReactNode }) {

    const [preseleccionados, setPreseleccionados] = useState<Jugador[]>(
        prelistaData.map( j => new Jugador(j.numero, j.nombreCompleto, j.equipo, j.posicion, j.codigoPosicion)
    ));
    
    const [seleccionadosFinales, setSeleccionadosFinales] = useState<Jugador[]>([]);    

    const moverAPreseleccionados = (jugador: Jugador) => {
        setSeleccionadosFinales(seleccionadosFinales.filter(j => j.numero !== jugador.numero));
        setPreseleccionados(prev => [...prev, jugador].sort((a, b) => a.numero - b.numero));
    }
    const moverASeleccionadosFinales = (jugador: Jugador) => {
        setPreseleccionados(preseleccionados.filter(j => j.numero !== jugador.numero));
        setSeleccionadosFinales([...seleccionadosFinales, jugador]);
    }

    const puedeCargarListaFinal = (): string | null => {

        const arqueros = seleccionadosFinales.filter(j => j.codigoPosicion === 'ARQ').length;
        const defensores = seleccionadosFinales.filter(j => j.codigoPosicion === 'DEF').length;
        const mediocampistas = seleccionadosFinales.filter(j => j.codigoPosicion === 'MED').length;
        const delanteros = seleccionadosFinales.filter(j => j.codigoPosicion === 'DEL').length;

        if (seleccionadosFinales.length !== 26) {
            return 'La lista final debe contener exactamente 26 jugadores.';
        }   
        if (arqueros < 3) {
            return 'La lista final debe contener al menos 3 arqueros.';
        }
        if (defensores < 6) {
            return 'La lista final debe contener al menos 6 defensores.';
        }   
        if (mediocampistas < 6) {
            return 'La lista final debe contener al menos 6 mediocampistas.';
        }
        if (delanteros < 4) {
            return 'La lista final debe contener al menos 4 delanteros.';   
        }

        return null; 
    }

    return (
        <SeleccionContext.Provider value={{ preseleccionados,
         seleccionadosFinales,
          moverAPreseleccionados,
           moverASeleccionadosFinales,
            puedeCargarListaFinal }}>
            {children}
        </SeleccionContext.Provider>
    );


}

export function useSeleccion() {
    const context = useContext(SeleccionContext);
    if (!context) {
        throw new Error('useSeleccion debe ser usado dentro de un SeleccionProvider');
    }
    return context;
}