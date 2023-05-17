import React from 'react';

function First(props) {
  const { listUser } = props;

  return (
    <div>
      {listUser.map((user) => (
        <React.Fragment key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default First;
