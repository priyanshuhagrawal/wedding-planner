const WeddingRequest = require(
  "../models/WeddingRequest"
);

const createWeddingRequest = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("USER:", req.user);

  try {
    const wedding =
      await WeddingRequest.create({
        ...req.body,
        user: req.user.id,
      });

    res.status(201).json(wedding);
  } catch (error) {
    console.log(
      "CREATE WEDDING ERROR:",
      error
    );

    res.status(500).json({
      message: error.message,
    });
  }
};
const getMyWeddingRequests =
  async (req, res) => {
    console.log(req.body);
console.log(req.user);
    try {
      const weddings =
        await WeddingRequest.find({
          user: req.user.id,
        });

      res.json(weddings);
    } catch (error) {
  console.log(
    "WEDDING CREATE ERROR:",
    error
  );

  res.status(500).json({
    message: error.message,
  });
}
  };

const getAllWeddingRequests =
  async (req, res) => {
    try {
      const weddings =
        await WeddingRequest.find()
          .populate(
            "user",
            "name email role"
          );

      res.json(weddings);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

const updateWeddingStatus =
  async (req, res) => {
    try {
      const wedding =
        await WeddingRequest.findById(
          req.params.id
        );

      if (!wedding) {
        return res.status(404).json({
          message:
            "Wedding Request Not Found",
        });
      }

      wedding.status =
        req.body.status;

      await wedding.save();

      res.json(wedding);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
module.exports = {
  createWeddingRequest,

  getMyWeddingRequests,

  getAllWeddingRequests,

  updateWeddingStatus,
};