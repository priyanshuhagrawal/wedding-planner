const express =
  require("express");

const router =
  express.Router();

const protect =
  require(
    "../middleware/authMiddleware"
  );

const {
  createWeddingRequest,
  getMyWeddingRequests,
  getAllWeddingRequests,
  updateWeddingStatus,
} = require(
  "../controllers/weddingController"
);

router.post(
  "/",
  protect,
  createWeddingRequest
);

router.get(
  "/my",
  protect,
  getMyWeddingRequests
);

router.get(
  "/",
  protect,
  getAllWeddingRequests
);

router.patch(
  "/:id",
  protect,
  updateWeddingStatus
);

module.exports = router;