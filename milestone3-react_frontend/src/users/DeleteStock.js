import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DeleteStock() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    id:"",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8080/v1/user/${id}`);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/v1/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Delete Stock</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Product ID
              </label>
              <input
                type={"number"}
                className="form-control"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Delete
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
