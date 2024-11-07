



export function Card({ name, email, username, web }) {
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Web: {web}</p>
      </div>
    );
  }
  