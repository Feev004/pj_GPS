"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAssetRoutes = void 0;
const express_1 = require("express");
const assetController_1 = require("../controllers/assetController");
const router = (0, express_1.Router)();
const assetController = new assetController_1.AssetController();
function setAssetRoutes(app) {
    app.use('/api/assets', router);
    router.post('/', assetController.createAsset.bind(assetController));
    router.get('/:id', assetController.getAsset.bind(assetController));
    router.put('/:id', assetController.updateAsset.bind(assetController));
    router.delete('/:id', assetController.deleteAsset.bind(assetController));
}
exports.setAssetRoutes = setAssetRoutes;
