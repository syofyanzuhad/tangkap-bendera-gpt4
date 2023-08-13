import React, { useState, useEffect } from 'react';

function TangkapBendera() {
  const [posisi, setPosisi] = useState({ x: 0, y: 0 });
  const [skor, setSkor] = useState(0);
  const [waktu, setWaktu] = useState(10);

  useEffect(() => {
    if (waktu > 0) {
      const timer = setTimeout(() => {
        setWaktu(waktu - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [waktu]);

  const randomPosisi = () => {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    setPosisi({ x, y });
  };

  const tangkap = () => {
    setSkor(skor + 1);
    randomPosisi();
  };

  useEffect(randomPosisi, []);

  return (
    <div>
      <h2>Skor: {skor}</h2>
      <h2>Waktu: {waktu} detik</h2>
      {waktu === 0 ? (
        <h1>Selesai!</h1>
      ) : (
        <div
          onClick={tangkap}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'white',
            position: 'absolute',
            top: `${posisi.y}px`,
            left: `${posisi.x}px`,
            cursor: 'pointer',
            transition: '0.2s',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '50%',
              backgroundColor: 'red',
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default TangkapBendera;
