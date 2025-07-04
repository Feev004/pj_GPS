# Asset Control System

## Overview
The Asset Control System is a TypeScript-based application designed to manage assets efficiently. It provides a RESTful API for creating, retrieving, updating, and deleting assets.

## Features
- Create new assets
- Retrieve asset details
- Update existing assets
- Delete assets

## Project Structure
```
asset-control-system
├── src
│   ├── main.ts               # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── assetController.ts
│   ├── models                # Defines data models
│   │   └── asset.ts
│   ├── routes                # Defines API routes
│   │   └── assetRoutes.ts
│   └── types                 # Type definitions for better type safety
│       └── index.ts
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/asset-control-system.git
   ```
2. Navigate to the project directory:
   ```
   cd asset-control-system
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints
- `POST /assets` - Create a new asset
- `GET /assets/:id` - Retrieve an asset by ID
- `PUT /assets/:id` - Update an asset by ID
- `DELETE /assets/:id` - Delete an asset by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.