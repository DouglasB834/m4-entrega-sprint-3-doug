import app from "./app";
import "dotenv/config"
import { startDatabase } from "./database";
const PORT = process.env.PORT

export default app.listen(PORT, async () => {
    await startDatabase();
    console.log(`Server running ${PORT}`);
});