import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";

import { Loader } from "../layouts/Loader";
import { DELETE_ROOM_RESET } from "../../redux/constants/roomConstants";
import { getAdminUsers, clearErrors } from "../../redux/actions/userActions";

export const AllUsers = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, users } = useSelector((state) => state.allUsers);
  // const { error: deleteError, isDeleted } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAdminUsers());

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    // if (deleteError) {
    //   toast.error(deleteError);
    //   dispatch(clearErrors());
    // }

    // if (isDeleted) {
    //   router.push(`/admin/rooms`);
    //   dispatch({ type: DELETE_ROOM_RESET });
    // }
  }, [dispatch]);

  const setUsers = () => {
    const data = {
      columns: [
        {
          label: "User ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    users &&
      users.forEach((user) => {
        data.rows.push({
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          actions: (
            <>
              <Link href={`/admin/users/${user._id}`}>
                <a className="btn btn-primary">
                  <i className="fa fa-pencil"></i>
                </a>
              </Link>

              <button
                className="btn btn-danger mx-2"
                onClick={}
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
    <div className='container container-fluid'>
      {loading ? <Loader /> :
        <>
          <h1 className='my-5'>{`${users && users.length} Users`}</h1>
          <MDBDataTable
              data={setUsers()}
              className='px-3'
              bordered
              striped
              hover
          />
        </>
      }
    </div>
  );
};
