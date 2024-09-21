import User from "./User.js";

function Users({ usersList }) {
  return (
    <div className="users-container">
      {usersList.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default Users;
