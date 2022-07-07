db.createUser({
  user: "admin",
  pwd: "password1111",
  roles: [
    {
      role: "readWrite",
      db: "ptw",
    },
  ],
});
