import React from "react";

function CardPizza(props) {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f9f9f9",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "200px", overflow: "hidden" }}>
        {" "}
        {/* Contenedor de la imagen */}
        <img
          src={props.image}
          alt={props.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div style={{ padding: "20px", flexGrow: 1 }}>
        {" "}
        {/* Contenido con flexGrow */}
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#333" }}>
          {props.title}
        </h2>
        <p style={{ fontSize: "1rem", color: "#666", marginBottom: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Ingredientes:</span>{" "}
          {props.ingredients}
        </p>
        <p
          style={{ fontSize: "1.2rem", color: "#007bff", marginBottom: "20px" }}
        >
          Precio: {props.price}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
              color: "#333",
            }}
          >
            Ver Más &raquo;
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "#fff",
            }}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
