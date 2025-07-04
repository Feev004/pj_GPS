import { Router, Application } from 'express';
import { AssetController } from '../controllers/assetController';

const router = Router();
const assetController = new AssetController();

export function setAssetRoutes(app: Application): void {
    app.use('/api/assets', router);

    router.post('/', assetController.createAsset.bind(assetController));
    router.get('/:id', assetController.getAsset.bind(assetController));
    router.put('/:id', assetController.updateAsset.bind(assetController));
    router.delete('/:id', assetController.deleteAsset.bind(assetController));
}
