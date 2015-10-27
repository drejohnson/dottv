import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  facebook: String,
  google: String,
  twitter: String
});

userSchema.pre('save', (next) => {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10).then( (salt) => {
    return bcrypt.hash(this.password, salt);
  }).then( (hash) => {
    this.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = (password, done) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

export default User;
