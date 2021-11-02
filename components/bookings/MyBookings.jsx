import React, { useEffect } from "react";
import Link from "next/dist/client/link";
import { useSelector, useDispatch } from "react-redux";
import { MDBDataTable } from "mdbreact";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";
export const MyBookings = () => {
  const dispatch = useDispatch();
  const { bookings, error } = useSelector((state) => state.bookings);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch]);

  const setBookings = () => {
    const data = {
      columns: [
        {
          label: "Booking ID",
          field: "id",
        },
        {
          label: "Check In",
          field: "checkIn",
          sort: "asc",
        },
        {
          label: "Check Out",
          field: "checkOut",
        },
        {
          label: "Amount Paid",
          field: "amount",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    bookings &&
      bookings.forEach((booking) => {
        data.rows.push({
          id: booking._id,
          checkIn: new Date(booking.checkInDate).toLocaleString("ja"),
          checkOut: new Date(booking.checkOutDate).toLocaleString("ja"),
          amount: `${booking.amountPaid}`,
          actions: (
            <>
              <Link href={`/bookings/${booking._id}`}>
                <a href="" className="btn btn-primary">
                  <i className="fa fa-eye"></i>
                </a>
              </Link>
              <button className="btn btn-success mx-2">
                <i className="fa fa-download"></i>
              </button>
            </>
          ),
        });
      });
    return data;
  };

  return (
    <div className="container container-fluid">
      <h1 className="my-5">My Bookings</h1>

      <MDBDataTable
        data={setBookings()}
        className="px-3"
        bordered
        striped
        hover
      />
    </div>
  );
};
