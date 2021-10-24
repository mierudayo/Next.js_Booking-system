import React from "react";
import { RoomOption } from "./RoomOption";

export const RoomFeatures = ({ room }) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Features:</h3>
      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
        <p>{room.guestCapacity} Guests</p>
      </div>

      <div className="room-feature">
        <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
        <p>{room.numOfBeds} Beds</p>
      </div>
      <RoomOption option={room.breakfast} text="Breakfast" />
      <RoomOption option={room.internet} text="Internet" />
      <RoomOption option={room.airConditioned} text="Air Conditioned" />
      <RoomOption option={room.petsAllowed} text="petsAllowed" />
    </div>
  );
};
