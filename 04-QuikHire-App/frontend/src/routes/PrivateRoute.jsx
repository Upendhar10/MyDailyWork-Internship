import { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/authSlice";

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const { data } = await axios.post(
        "/api/v1/user/get-user-data",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (data.success) {
        dispatch(setUser(data.data));
      } else {
        localStorage.removeItem("token"); // localStorage.clear()
        navigate("/login");
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return navigate("/login");
  }
}

export default PrivateRoute;
