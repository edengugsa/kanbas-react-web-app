import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
    const { id } = useParams();

  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };


  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);


  const save = async () => {
    await client.updateUser(account);
  };

  return (
    <div className="w-50" style={{ paddingLeft: '200px' }}>
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>

            <button className="btn btn-primary w-100" onClick={save}>
            Save
            </button>
            <br/>
            <br/>
            <button className="btn btn-danger w-100" onClick={signout}>
            Signout
            </button>
            <br/>
            <br/>
            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100"> Users</Link>

          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
    </div>
  );
}
export default Account;