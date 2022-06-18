import React from 'react';
import Card from './Card';
import s from './styles/css/Cards.module.css'
import waiting from './img/waiting.svg';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if((props.cities).length === 0){
    return(
        <div className={s.nocities}>
          <div className={s.here}>⬆</div>
          <img src={waiting} alt="waiting" />
          <h3>{`No hay ciudades para mostrar, busca alguna :)`}</h3>
        </div>
    )
  }else{
    return (
      <div className={s.cards}>
        {(props.cities).map((data) => {
          return (<Card
            actual={data.actual}
            max={data.max}
            min={data.min}
            name={data.name}
            img={data.img}
            onClose={props.onClose}
            key={data.id}
            id={data.id}
          />);
        })}
      </div>
    )
  }
};