import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/v1/users");
    setUsers(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">1101</th>
                <td>Asus Rog 5</td>
                <td>Asus</td>
                <td>10</td>
                <td>$ 12000</td>
              </tr>
              <tr>
                <th scope="row">1102</th>
                <td>Lenova Idepad</td>
                <td>Lenova</td>
                <td>7</td>
                <td>$ 13000</td>
              </tr>
              <tr>
                <th scope="row">1103</th>
                <td>HP thinkpad series</td>
                <td>HP</td>
                <td>15</td>
                <td>$ 17000</td>
              </tr>
              <tr>
                <th scope="row">1104</th>
                <td>Asus gaming laptop</td>
                <td>Asus</td>
                <td>4</td>
                <td>$ 20000</td>
              </tr>

            {users.map((user, index) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.brand}</td>
                <td>{user.quantity}</td>
                <td>$ {user.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
