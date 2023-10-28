import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";
import dog from "../../img/dog.webp";
import msg from "../../img/message.png"
const Order = () => {
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src={dog} alt="" className="img" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src={msg} alt="" className="delete" />
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
              <img src={msg} alt="" className="delete" />
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
              <img src={msg} alt="" className="delete" />
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
              <img src={msg} alt="" className="delete" />
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
              <img src={msg} alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Order;
