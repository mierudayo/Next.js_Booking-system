import React from "react";

export const RoomOption = ({ option, text }) => {
  return (
    <div className="room-feature">
      <i
        className={
          option ? "fa fa-check text-success" : "fa fa-times text-danger"
        }
        aria-hidden="true"
      ></i>
      <p>{text}</p>
    </div>
  );
};
