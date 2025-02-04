import color from "ansi-colors";
import app from "./app";
import "./config/dotenv";
import getIPAddresses from "./config/IP";
import { fetchPublicIP } from "./config/IP";
import dotenv from "dotenv";

dotenv.config();
const IP = getIPAddresses.IP();

const PORT: number = process.env.PORT_SERVER
  ? parseInt(process.env.PORT_SERVER)
  : 3000;
const host: string = "0.0.0.0";

// Hàm lấy IP từ api.ipify.org

// Sử dụng portfinder để tìm cổng khả dụng
async function startServer() {
  const publicIP = await fetchPublicIP();

  const server = app.listen(PORT, host, () => {
    console.log(
      `\n  🚀  ➜ Network:  `,
      color.blue(`http://${publicIP}:${PORT}`)
    );
    console.log(`  🚀  ➜   Local:  `, color.green(`http://${IP}:${PORT}`));
  });

  server.on("error", (error: any) => {
    console.error(`Error: ${error}`);
  });
}

startServer();
