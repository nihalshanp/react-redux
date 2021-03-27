import { FETCH_USERS_REQUEST } from "../user/userTypes";
import { FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./postType";
import axios from "axios";

export const fetchPostRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respons) => {
        const posts = respons.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        const errosMsg = error.message;
        dispatch(fetchPostFailure(errosMsg))
      });
  };
};
