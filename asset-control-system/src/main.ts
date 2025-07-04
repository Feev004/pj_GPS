import express from 'express';
import { setAssetRoutes } from './routes/assetRoutes';

const app = express();
app.use(express.json());

setAssetRoutes(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} = http://localhost:${PORT}/api/assets`);
});