import express from 'express';
const app = express();

const PORT = 5000;

app.listen(() => {
  console.log(`Server listening in Port ${PORT}`);
});
