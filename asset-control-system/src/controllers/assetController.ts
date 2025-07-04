import { Asset } from '../models/asset';

type AssetRequest = { body: { id: string; name: string; description: string; quantity: number }, params: { id: string } };

export class AssetController {
    private assets: Asset[] = [];

    createAsset(req: AssetRequest, res: any) {
        const newAsset = new Asset(req.body.id, req.body.name, req.body.description, req.body.quantity);
        this.assets.push(newAsset);
        res.status(201).json(newAsset);
    }

    getAsset(req: AssetRequest, res: any) {
        const asset = this.assets.find(a => a.id === req.params.id);
        if (asset) {
            res.json(asset);
        } else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }

    updateAsset(req: AssetRequest, res: any) {
        const asset = this.assets.find(a => a.id === req.params.id);
        if (asset) {
            asset.name = req.body.name;
            asset.description = req.body.description;
            asset.quantity = req.body.quantity;
            res.json(asset);
        } else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }

    deleteAsset(req: AssetRequest, res: any) {
        const index = this.assets.findIndex(a => a.id === req.params.id);
        if (index !== -1) {
            this.assets.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Asset not found' });
        }
    }
}