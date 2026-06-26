const mongoose = require("mongoose");

const weddingRequestSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      brideName: {
        type: String,
        required: true,
      },

      groomName: {
        type: String,
        required: true,
      },

      weddingDate: {
        type: String,
      },

      venue: {
        type: String,
      },

      guestCount: {
        type: Number,
      },

      totalAmount: {
        type: Number,
      },

      catering: {
        type: Object,
      },

      photographer: {
        type: Object,
      },

      decoration: {
        type: Object,
      },

      status: {
        type: String,
        default: "Pending",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "WeddingRequest",
    weddingRequestSchema
  );