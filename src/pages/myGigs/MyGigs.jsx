import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
import dog from "../../img/dog.webp";
import del from "../../img/delete.png";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
           <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src={dog} alt="" className="img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={del} alt="" className="delete" />
            </td>
          </tr>
          <tr>
          <td>
            <img src={dog} alt="" className="img" />
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src={del} alt="" className="delete" />
          </td>
        </tr>
        <tr>
        <td>
          <img src={dog} alt="" className="img" />
        </td>
        <td>Gig1</td>
        <td>88</td>
        <td>123</td>
        <td>
          <img src={del} alt="" className="delete" />
        </td>
      </tr>
      <tr>
      <td>
        <img src={dog} alt="" className="img" />
      </td>
      <td>Gig1</td>
      <td>88</td>
      <td>123</td>
      <td>
        <img src={del} alt="" className="delete" />
      </td>
    </tr>
    <tr>
    <td>
      <img src={dog} alt="" className="img" />
    </td>
    <td>Gig1</td>
    <td>88</td>
    <td>123</td>
    <td>
      <img src={del} alt="" className="delete" />
    </td>
  </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
