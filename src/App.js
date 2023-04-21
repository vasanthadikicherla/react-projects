import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data to server or validate form data here
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      </div>
      <div>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      </div>
      <div>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegistrationForm;
