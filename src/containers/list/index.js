import React, { Fragment, useContext } from 'react';
import { SpaceWrapper } from '../../components';
import { Context } from '../../context';

function List() {
  const { listOfDays } = useContext(Context);

  return (
    <Fragment>
      <h1>
        Lista
      </h1>

      <ul>
      {
        listOfDays.map(([day, training], i) => (
          <SpaceWrapper key={`day-${day}-${i}`}>
            <li>
              { day } - { training }
            </li>
          </SpaceWrapper>
        ))
      }
      </ul>

    </Fragment>
  );
}

export {
  List,
};
