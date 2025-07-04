export interface Asset {
    id: number;
    name: string;
    description: string;
    quantity: number;
}

export interface AssetRequest {
    name: string;
    description: string;
    quantity: number;
}