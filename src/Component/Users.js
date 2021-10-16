import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usersList } from "../Redux/Actions/UsersActions";
const Users = ({ usersList, loading, error, users }) => {
  useEffect(() => {
    usersList();
  }, []);
  return (
    <div>
      <h1>users</h1>
      {loading ? (
        <h2>loading....</h2>
      ) : (
        <div>
          {users.map((user) => {
            return <p>{user.title}</p>;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.userReducers.loading,
  error: state.userReducers.error,
  users: state.userReducers.users,
});

export default connect(mapStateToProps, { usersList })(Users);
