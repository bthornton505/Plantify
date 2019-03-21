import React from 'react';

const LoginForm = props => {

  return(
    <form onSubmit={props.handleSubmit}>
      <p>
        <label>Username: </label>
        <input
          type="text"
          />
      </p>
      <p>
        <label>Email: </label>
        <input
          type="text"
          />
      </p>
      <p>
        <label>Password: </label>
        <input
          type="password"
          />
      </p>
      <input
        type="submit"
        />
    </form>
  )
}

export default LoginForm;
