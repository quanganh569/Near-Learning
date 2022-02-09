import React from "react";
import PropTypes from "prop-types";

export default function Messages({ messages }) {
  return (
    <div className="container mt-3 mb-3">
      {messages.map((message, i) => (
        // TODO: format as cards, add timestamp
        <div className="mt-3">
           <div className="card ">
          <h5 className="card-header">Lời nhắn</h5>
          <div className="card-body">
            <div>
              <h5 className="card-title">
                Tài khoản : <strong>{message.sender}</strong>
              </h5>
              <p className="card-text">
                Lời nhắn : <strong>{message.text}</strong>
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        </div>
       
      ))}

      {/* <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong>:<br/>
          {message.text}
        </p>
      )} */}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
};
