import axios from "axios";
import { loginError, loginStart, loginSuccess } from "./authSlice";
const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("https://reqres.in/api/login", user);
    console.log(user);
    // dispatch(loginSuccess(res.data));
    console.log(res);
    navigate("/lich-su-kham-benh");
  } catch (error) {
    dispatch(loginError());
  }
};

export default loginUser;
