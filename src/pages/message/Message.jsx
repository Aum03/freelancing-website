import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
import dog from "../../img/dog.webp";
const Message = () => {
  return (
    <div className='message'>
    <div className="container">
    <span className="breadcrumbs">
    <Link to="/messages">Messages</Link>
    {'>'} John Doe  {'>'}
    </span>
    <div className="messages">
    <div className="item">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    <div className="item owner">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    <div className="item">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    <div className="item owner">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    <div className="item">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    <div className="item owner">
    <img src={dog} alt="" className="img" />
    <p>Lore_oépsum dolor sit amet consectetur adipisicing elite Eos lure
    mollitia perspiciatis officiis voluptate? Sequi quae officia
    possimus, iusto tabore alias moltitia eveniet nemo placeat
    laboriosam nisi animi! Error, tenetur!l</p>
    </div>
    </div>
    <div className="write">
    <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
    <button>Send</button>
    </div>
    </div>
    </div>
  )
}

export default Message