import React, { useEffect, useState } from "react";
import axios from "axios";

function Galeria() {
  const [fotos, setFotos] = useState([]);
  const { VITE_FLICKR_API } = import.meta.env;

  useEffect(() => {
    const obtenerFotos = async () => {
      try {
        const controller = new AbortController();
        const signal = controller.signal;

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal,
        };

        const response = await axios.get(VITE_FLICKR_API, options);
        setFotos(response.data.photos.photo);
      } catch (error) {
        console.error("Error al obtener las fotos:", error);
      }
    };

    obtenerFotos();

    return () => {
      const controller = new AbortController();
      controller.abort();
    };
  }, [VITE_FLICKR_API]);

  return (
    <div className="contenedorGaleria">
      <div className="galeria">
        {fotos.map((foto, index) => (
          <div className="galeria__foto" key={index}>
            <img
              src={`https://farm${foto.farm}.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}.jpg`}
              alt={foto.title}
              className="galeria__fotoImg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
