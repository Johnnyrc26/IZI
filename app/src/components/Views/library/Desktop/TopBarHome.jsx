import React, { useState, useEffect } from 'react';
import './TopBarHome.css'; // Asegúrate de crear este archivo para los estilos

const images = [
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_5772758682c805563ef06b95_c24d3d8ec63a80d22111689096b41776.jpeg',
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_5772758682c805563ef06bac_67ba4d3908e4d28fc33333ef14da39e0.jpeg',
  'https://cdn.laguiavalentinaquintero.com/poi/Poi_5772758682c805563ef06ee1_6f5d6aef416a08633de792b9d89ee589.jpeg',
  'https://cdn.laguia.grupoapok.com/poi/Poi_5772758682c805563ef06e36_b8b1ea83cf1a628a7d6520e6ba11eab1.jpeg'
];

const TopBarHome = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [city, setCity] = useState('');
  const [dates, setDates] = useState({ start: '', end: '' });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      })
    }, 6000)

    return () => clearInterval(interval)
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { city, dates, people });
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className="topbar" style={{ backgroundImage: `url(${currentImage})` }}>
        <div className="brand">KAU</div>

        <div className="nav">
          <a href="/register">Registrarse |</a>
          <a href="/login"> Iniciar sesión |</a>
          <a href="/about"> Conócenos</a>
        </div>

      <div className="searchBar">
        <form
          className={`search-form ${expanded ? 'expanded' : 'collapsed'}`}
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onClick={toggleExpand}
          />
          {expanded && (
            <>
              <input
                type="date"
                value={dates.start}
                onChange={(e) => setDates((prevDates) => ({ ...prevDates, start: e.target.value }))}
              />
              <input
                type="date"
                value={dates.end}
                onChange={(e) => setDates((prevDates) => ({ ...prevDates, end: e.target.value }))}
              />
            </>
          )}
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default TopBarHome;