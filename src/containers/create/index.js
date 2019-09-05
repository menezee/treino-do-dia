import React, { Fragment, useState, useContext } from 'react';
import { navigate } from '@reach/router';
import { formatDate } from '../../utils';
import { SpaceWrapper } from '../../components';
import styles from './create.module.css';
import { Context } from '../../context';

function Create() {
  const [date, setDate] = useState(() => formatDate(new Date()));
  const [training, setTraining] = useState();
  const { listOfDays, setListOfDays } = useContext(Context);

  function addDay() {
    if (training) {
      setListOfDays([
        ...listOfDays,
        [date, training]
      ])
    }
  }

  return (
    <Fragment>
      <h1>
        Criar
      </h1>

      <div className={styles.details}>
        {/* DIA */}
        <SpaceWrapper>
          <input
            defaultValue={date}
            type='date'
            onChange={e => {
              setDate(e.target.value)
            }}/>
        </SpaceWrapper>

        {/* TREINO */}
        <SpaceWrapper>
          <select onChange={e => {
            setTraining(e.target.value)
          }}>
            <option>peito + biceps</option>
            <option>costa + triceps</option>
            <option>ombro</option>
            <option>perna</option>
          </select>
        </SpaceWrapper>

        {/* SALVAR */}
        <SpaceWrapper>
          <button onClick={() => {
            addDay();
            navigate('/list');
          }}>
            Salvar
          </button>
        </SpaceWrapper>

      </div>
    </Fragment>
  );
}

export {
  Create,
};
