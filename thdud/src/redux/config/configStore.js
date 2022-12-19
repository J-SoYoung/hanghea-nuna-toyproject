import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/_commentSlice";
import user from "../modules/userSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { post: post, comment: comment, user: user },
});

export default store;
