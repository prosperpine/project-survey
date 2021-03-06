import React from 'react';

export const Actions = props => {
  const { action1, setAction1, action2, setAction2 } = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      Name two things you normally do in order to try to feel better?
      <br></br>
      <div className="actions">
        <label for="actions">
          1.
          <input
            className="inputfield"
            type="text"
            id="actions"
            onChange={(event) => setAction1(event.target.value)}
            value={action1} />
            2.
          <input
            className="inputfield"
            type="text"
            id="actions"
            required
            onChange={(event) => setAction2(event.target.value)}
            value={action2} />
        </label>
      </div>
    </form>
  );
};
