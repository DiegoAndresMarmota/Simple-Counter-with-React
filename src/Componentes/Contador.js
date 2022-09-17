import React from "react";

export const Contador = (props) => {
  let unidad = props.segundos;
  let diez = 0;
  let cien = 0;
  let mil = 0;
  let diezMil = 0;
  let cienMil = 0;

  if (props.segundos > 9) {
    diez = Math.trunc(props.segundos / 10);
    unidad = props.segundos % 10;
    if (diez > 9) {
      cien = Math.trunc(diez / 10);
      diez = diez % 10;
      if (cien > 9) {
        mil = Math.trunc(cien / 10);
        cien = cien % 10;
        if (mil > 9) {
          diezMil = Math.trunc(mil / 10);
          mil = mil % 10;
          if (diezMil > 9) {
            cienMil = Math.trunc(diezMil / 10);
            diezMil = diezMil % 10;
          }
        }
      }
    }
  }
  return (
    <div className="app d-flex justify-content-center">
      <div className="icon box">
        <i className="far fa-clock"></i>
      </div>
      <div className="counter box">{cienMil}</div>
      <div className="counter box">{diezMil}</div>
      <div className="counter box">{mil}</div>
      <div className="counter box">{cien}</div>
      <div className="counter box">{diez}</div>
      <div className="counter box">{unidad}</div>
    </div>
  );
};
