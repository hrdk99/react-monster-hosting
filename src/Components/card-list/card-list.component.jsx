import React from 'react';
import '../card-list/card-list.component.css';
import {Card} from '../card/card.component';

export const Cardlist = (props) => (
  <div className="card-list">
    {props.users.map((user) => (
      <Card  id={user.id} user={user}/>
    ))}
  </div>
);


