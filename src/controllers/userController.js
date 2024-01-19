import userService from "../services/userServices";

let handleLogin = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    // kiem tra email và password
    if (!email || !password) {
      return res.status(500).json({
        errCode: 1,
        message: "Missing inputs parameter!",
      });
    }
    //
    let userData = await userService.handleUserLogin(email, password);
    //

    return res.status(200).json({
      errCode: userData.errCode,
      message: userData.errMsg,
      user: userData.user ? userData.user : {},
    });
  } catch (error) {
    reject(error);
  }
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter",
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    users,
  });
};

let handleCreateNewUsers = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleEditUsers = async (req, res) => {
  let message = await userService.EditUsers(req.body);
  return res.status(200).json(message);
};

let handleDeleteUsers = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing id",
    });
  }
  let message = await userService.DeleteUsers(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUsers: handleCreateNewUsers,
  handleEditUsers: handleEditUsers,
  handleDeleteUsers: handleDeleteUsers,
};
