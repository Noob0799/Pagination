import { useEffect, useState } from "react";
import Users from "./components/Users.js";
import PaginationComponent from "./components/PaginationComponent.js";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const getUsersList = async () => {
    const res = await fetch(
      `https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`
    );
    const data = await res.json();
    setUsersList(data.users);
    setTotalCount(data.total);
  };

  useEffect(() => {
    getUsersList();
  }, [page]);

  return (
    <>
      <Users usersList={[...usersList]} />
      <PaginationComponent
        totalCount={totalCount}
        page={page}
        updatePage={setPage}
      />
    </>
  );
}

export default App;
