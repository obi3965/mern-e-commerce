const express = require("express");
const router = express.Router();

const {
    create,
    projectById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch
} = require("../controllers/projectController");
const { requireSignin, isAuth, isAdmin } = require("../controllers/authController");
const { userById } = require("../controllers/userController");

router.get("/project/:projectId", read);
router.post("/project/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/project/:projectId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    "/project/:projectId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.get("/projects", list);
router.get("/projects/search", listSearch);
router.get("/projects/related/:prodjectId", listRelated);
router.get("/projects/categories", listCategories);
router.post("/projects/by/search", listBySearch);
router.get("/projects/photo/:projectId", photo);

router.param("userId", userById);
router.param("projectId", projectById);

module.exports = router;