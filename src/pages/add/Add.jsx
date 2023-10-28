import React from "react";
import "./Add.scss";
const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="write something here" />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" name="" id="" />
            <label htmlFor="">Upload Image</label>
            <input type="file" name="" id="" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="brief description about your product"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="one-page web design"
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="short description of your service"
            ></textarea>
            <label htmlFor="">Delivery Time</label>
            <input type="number" name="" id="" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" name="" id="" min={1} />

            <label htmlFor="">Add Features</label>
            <input type="text" name="" id="" placeholder="page design"/>
            <input type="text" name="" id="" placeholder="file uploading"/>
            <input type="text" name="" id="" placeholder="setting up the domain"/>
            <input type="text" name="" id="" placeholder="hosting"/>
            <label htmlFor="">Price</label>
            <input type="number" name="" id="" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
