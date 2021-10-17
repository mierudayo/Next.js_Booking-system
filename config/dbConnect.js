import { connect, connection } from "mongoose";

export const dbConnect = () => {
  if (connection.readyState > 1) {
    return;
  }
  connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
  }).then((con) => console.log("Connected to local database."));
};
