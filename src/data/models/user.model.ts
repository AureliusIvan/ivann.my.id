// blog_app/models/blog.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    nullable: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  timestamp: { type: Date, default: Date.now },
});

// index fields
UserSchema.index({ email: 1 });

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
}
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;