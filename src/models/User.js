module.exports = (mongoose) => {
  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    blocked: Boolean
  });
  return mongoose.model('User', userSchema);
};
