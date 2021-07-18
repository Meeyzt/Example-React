import axios from "axios";

export default async function getData(userID) {
  const users = await getUsers(userID);
  const posts = await getPosts(userID);
  console.log("Users", users);
  console.log("posts", posts);
}

const getUsers = (userID) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userID
    );
    resolve(data);
  });
};

const getPosts = (userID) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userID
    );
    resolve(data);
  });
};
