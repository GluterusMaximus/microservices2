import app from "./server.js";


const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}`);
})