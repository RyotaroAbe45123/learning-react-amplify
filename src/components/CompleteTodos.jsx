import React from 'react';

export const CompleteTodos = (props) => {
    const {completeTodos, onClick} = props;
    return (
        <div className="complete-area">
        <p className="title">Complete List</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(index)}>Back</button>
            </div>  
            )
          })}
        </ul>
      </div>
    );
}

