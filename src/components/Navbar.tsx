import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#1e1e2e",
            marginBottom: "20px"
        }}>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>Seleccion 2026</span>
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
                <Link to="/final" style={{ color: "white", textDecoration: "none" }}>Lista final de seleccionados</Link>
            </div>
        </nav>
    );
}