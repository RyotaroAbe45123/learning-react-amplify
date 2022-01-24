import React from 'react';

export const IncompleteTodos = (props) => {
    const {incompleteTodos, onClickComplete, onClickDelete} = props;
    return (
        <div className="incomplete-area">
        <p className="title">Incomplete List</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Complete</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
            );
          })}
        </ul>
      </div>
    );
}

