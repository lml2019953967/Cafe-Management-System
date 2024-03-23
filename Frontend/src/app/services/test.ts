import { jwtDecode } from "jwt-decode";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOiIyMDE5OTVAbWFpbGluYXRvci5jb20iLCJpYXQiOjE3MDc0NTMwNTcsImV4cCI6MTcwNzQ4OTA1N30.Ft8xLzZZselt0PiU4_XEdExPWL9ACYmtSPuPaVgd4iE";
const decoded = jwtDecode(token);

console.log(decoded)