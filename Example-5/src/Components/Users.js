import { useState, useEffect } from "react";
import axios from "axios";
import { useRouteMatch, NavLink, Switch, Route } from "react-router-dom";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <ul>
            {users.map((u) => (
              <li key={u.id}>
                <NavLink activeClassName="active" to={`${url}/${u.id}`}>
                  {u.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Switch>
            <Route exact path={path}>
              <h3>Please select a user.</h3>
            </Route>
            <Route path={`${path}/:id`} component={User} />
          </Switch>
        </div>
      )}
    </div>
  );
}

export default Users;
