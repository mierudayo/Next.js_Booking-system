import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";

import { Loader } from "../layouts/Loader";
import {
  clearErrors,
  deleteRoom,
  getAdminRooms,
} from "../../redux/actions/roomActions";
import { DELETE_ROOM_RESET } from "../../redux/constants/roomConstants";

export const AllRooms = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, error } = useSelector((state) => state.allRooms);
  const { error: deleteError, isDeleted } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getAdminRooms());

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      router.push(`/admin/rooms`);
      dispatch({ type: DELETE_ROOM_RESET });
    }
  }, [dispatch, deleteError, isDeleted]);

  const setRooms = () => {
    const data = {
      columns: [
        {
          label: "Room ID",
          field: "id",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Price / Night",
          field: "price",
        },
        {
          label: "Category",
          field: "category",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    rooms &&
      rooms.forEach((room) => {
        data.rows.push({
          id: room._id,
          name: room.name,
          price: `$${room.pricePerNight}`,
          category: room.category,
          actions: (
            <>
              <Link href={`/admin/rooms/${room._id}`}>
                <a href="" className="btn btn-primary">
                  <i className="fa fa-pencil"></i>
                </a>
              </Link>
              <button
                className="btn btn-danger mx-2"
                onClick={() => deleteRoomHandler(room._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </>
          ),
        });
      });
    return data;
  };

  const deleteRoomHandler = (id) => {
    dispatch(deleteRoom(id));
  };

  return (
    <div className="container container-fluid">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="my-5">
            {`${rooms && rooms.length} Rooms`}
            <Link href="/admin/rooms/new">
              <a className="mt-0 btn text-white float-right new-room-btn">
                Create Room
              </a>
            </Link>
          </h1>
          <MDBDataTable
            data={setRooms()}
            className="px-3"
            bordered
            striped
            hover
          />
        </>
      )}
    </div>
  );
};
