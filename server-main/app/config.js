const config = {
  port: process.env.PORT || 3001,
  databaseUrl:
    process.env.MONGODB_URI ||
    "mongodb+srv://justyna:technologie123@cluster0.bisumvo.mongodb.net/?retryWrites=true&w=majority",

  JwtSecret: process.env.JWT_SECRET || "secret",
};

export default config;
