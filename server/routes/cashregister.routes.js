const { Router } = require("express");
const router = Router();

const {
  getCashregisters,
  createCashregister,
  getCashregister,
  updateCashregister,
  deleteCashregister
} = require("../controllers/cashregisters.controller");

router.route("/").get(getCashregisters).post(createCashregister);

router.route("/:id").get(getCashregister).put(updateCashregister).delete(deleteCashregister);

module.exports = router;
