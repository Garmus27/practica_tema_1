import { useState } from "react";
import { useSeleccion} from "../context/seleccion_context";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

export default function ListaPreseleccion() {
    const { 
        preseleccionados,
        seleccionadosFinales,
        moverAPreseleccionados,
        moverASeleccionadosFinales,
        puedeCargarListaFinal 
    } = useSeleccion();

    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const handleCargarListaFinal = () => {

        const validacion = puedeCargarListaFinal();
        if (validacion) {
            setError(validacion);
        } else {
            navigate("/final");
        }

    }

    return (
        <div>
            <Navbar />
            
            <div style={{ display: "flex" }}>

                <div  style={{ flex: 1, padding: "20px" }}>
                <h1 style={{ textAlign: "left", fontSize: "36px" }}>Preseleccionados ({preseleccionados.length})</h1>

                    {preseleccionados.map(jugador => (
                        <div key={jugador.numero} className="cardJugador" onClick={() => moverASeleccionadosFinales(jugador)}>
                            <h3>{jugador.nombreCompleto}</h3>
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>

                <div style={{ flex: 1, padding: "20px" }}>
                    <h1 style={{ textAlign: "left", fontSize: "36px" }}>Seleccionados Finales ({seleccionadosFinales.length})</h1>

                    {seleccionadosFinales.length === 0 ? <p style={{ textAlign: "center" }}>Aun no hay jugadores seleccionados.</p>
                    : seleccionadosFinales.map(jugador => (
                        <div key={jugador.numero} className="cardJugador" onClick={() => moverAPreseleccionados(jugador)}>
                            <h3>{jugador.nombreCompleto}</h3>
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>


            </div>

            <button onClick={handleCargarListaFinal} style={{ display: "block", margin: "20px auto", padding: "10px 20px", fontSize: "16px" }}>Cargar Lista Final</button>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        </div>
    );

}