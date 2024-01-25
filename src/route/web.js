import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  //
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCrudPage);
  // post
  router.post("/post-crud", homeController.postCrud);
  router.get("/get-crud", homeController.displayGetCrud);
  router.get("/edit-crud", homeController.getEditCrud);

  router.post("/put-crud", homeController.putCrud);
  router.get("/delete-crud", homeController.getDeleteCrud);

  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-users", userController.handleCreateNewUsers);
  router.put("/api/edit-users", userController.handleEditUsers);
  router.delete("/api/delete-users", userController.handleDeleteUsers);

  router.get("/allcodes", userController.getAllCode);
  return app.use("/", router);
};

module.exports = initWebRoutes;
