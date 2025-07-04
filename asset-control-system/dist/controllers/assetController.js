"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetController = void 0;
const asset_1 = require("../models/asset");
class AssetController {
    constructor() {
        this.assets = [];
    }
    createAsset(req, res) {
        const newAsset = new asset_1.Asset(req.body.id, req.body.name, req.body.description, req.body.quantity);
        this.assets.push(newAsset);
        res.status(201).json(newAsset);
    }
    getAsset(req, res) {
        const asset = this.assets.find(a => a.id === req.params.id);
        if (asset) {
            res.json(asset);
        }
        else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }
    updateAsset(req, res) {
        const asset = this.assets.find(a => a.id === req.params.id);
        if (asset) {
            asset.name = req.body.name;
            asset.description = req.body.description;
            asset.quantity = req.body.quantity;
            res.json(asset);
        }
        else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }
    deleteAsset(req, res) {
        const index = this.assets.findIndex(a => a.id === req.params.id);
        if (index !== -1) {
            this.assets.splice(index, 1);
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }
}
exports.AssetController = AssetController;
