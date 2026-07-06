import './Location.css';

const Location = () => {

    const latitude = 45.562517184270625;
    const longitude = 19.672846996713844;

    const mapsLink =
      `https://www.google.com/maps?q=${latitude},${longitude}`;
    
    return (

    <section className="location-section">

      <h2 className="location-title">
        {/* Локација */}
        Lokacija
      </h2>

      {/* GOOGLE MAPS */}

      <div className="map-container">

        <iframe
          title="Google Maps"

          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}

          allowFullScreen=""

          loading="lazy"

          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

      {/* DUGME */}

      <a
        href={mapsLink}

        target="_blank"

        rel="noopener noreferrer"

        className="maps-button"
      >
        {/* Отвори у Гугл Мапама */}
        OTVORI U GOOGLE MAPAMA 
      </a>
    </section>
  );

}

export default Location