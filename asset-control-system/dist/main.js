"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assetRoutes_1 = require("./routes/assetRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, assetRoutes_1.setAssetRoutes)(app);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} = http://localhost:${PORT}/api/assets`);
});
