import db from "../models/index";
import CRUDServices from "../services/CRUDServices";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("aboutpage.ejs");
};

let getCrudPage = (req, res) => {
  return res.render("crudpage.ejs");
};

//
//asyc xu ly bat dong bo
let postCrud = async (req, res) => {
  let message = await CRUDServices.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

// doc du lieu
let displayGetCrud = async (req, res) => {
  let data = await CRUDServices.getAllUsers();
  console.log("--------------------------------");
  console.log(data);
  console.log("--------------------------------");
  return res.render("display-Crud.ejs", {
    dataTable: data,
  });
};

let getEditCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDServices.getUserInfoById(userId);

    return res.render("editCrud.ejs", {
      user: userData,
    });
  } else {
    return res.send("User is not found");
  }
};

let putCrud = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDServices.updateUserData(data);
  return res.render("display-Crud.ejs", {
    dataTable: allUsers,
  });
};

let getDeleteCrud = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    await CRUDServices.deleteUserById(userId);
    return res.send("delete the user successfully");
  } else {
    return res.send("User not found");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCrudPage: getCrudPage,
  postCrud: postCrud,
  displayGetCrud: displayGetCrud,
  getEditCrud: getEditCrud,
  putCrud: putCrud,
  getDeleteCrud: getDeleteCrud,
};
