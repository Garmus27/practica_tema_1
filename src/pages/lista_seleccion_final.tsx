import { useSeleccion } from '../context/seleccion_context';
import Navbar from '../components/Navbar';
import "../App.css";


export default function ListaSeleccionFinal() {
    const { seleccionadosFinales } = useSeleccion();

    const arqueros = seleccionadosFinales.filter(j => j.codigoPosicion === 'ARQ').length;
    const defensores = seleccionadosFinales.filter(j => j.codigoPosicion === 'DEF').length;
    const mediocampistas = seleccionadosFinales.filter(j => j.codigoPosicion === 'MED').length;
    const delanteros = seleccionadosFinales.filter(j => j.codigoPosicion === 'DEL').length;

    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Lista Final de Seleccionados</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "20px" }}>
                <div>
                    <h2>Arqueros</h2>
                    <p style={{ textAlign: "center" }}>{arqueros}</p>
                    {seleccionadosFinales.filter(j => j.codigoPosicion === 'ARQ').map(jugador => (
                        <div key={jugador.numero} className="cardJugador">
                            <h3>{jugador.nombreCompleto}</h3>
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Defensores</h2>
                    <p style={{ textAlign: "center" }}>{defensores}</p>
                    {seleccionadosFinales.filter(j => j.codigoPosicion === 'DEF').map(jugador => (
                        <div key={jugador.numero} className="cardJugador">
                            <h3>{jugador.nombreCompleto}</h3>   
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Mediocampistas</h2>
                    <p style={{ textAlign: "center" }}>{mediocampistas}</p>
                    {seleccionadosFinales.filter(j => j.codigoPosicion === 'MED').map(jugador => (
                        <div key={jugador.numero} className="cardJugador">
                            <h3>{jugador.nombreCompleto}</h3>
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Delanteros</h2>
                    <p style={{ textAlign: "center" }}>{delanteros}</p>
                    {seleccionadosFinales.filter(j => j.codigoPosicion === 'DEL').map(jugador => (
                        <div key={jugador.numero} className="cardJugador">
                            <h3>{jugador.nombreCompleto}</h3>
                            <p>{jugador.equipo}</p>
                            <p>{jugador.posicion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}