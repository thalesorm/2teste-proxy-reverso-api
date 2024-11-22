import app from "./app";

const HOST = "api2.local";
const PORT = process.env.PORT || 3025;

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
