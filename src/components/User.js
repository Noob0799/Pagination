function User({ user }) {
  return (
    <div className="user">
      <div className="user-image">
        <img src={user.image} alt={user.firstName + " " + user.lastName} />
      </div>
      <span>
        <b>ID:</b> {user.id}
      </span>
      <span>
        {user.firstName} {user.lastName}
      </span>
      <span>
        <b>Email:</b>
        {user.email}
      </span>
      <span>
        <b>Birthdate:</b>
        {user.birthDate}
      </span>
      <span>
        <b>Phone:</b>
        {user.phone}
      </span>
      <span>
        <b>Gender:</b>
        {user.gender}
      </span>
    </div>
  );
}

export default User;
