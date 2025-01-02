# Professional Backend

A complete backend solution built with Express.js, TypeScript, MongoDB, and JWT authentication.

## Features

- User Authentication with JWT
- Role-Based Access Control
- MongoDB Integration
- API Documentation with Swagger
- Error Handling
- Request Logging
- Security Features (Helmet, Rate Limiting)
- TypeScript Support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the values
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

Access the Swagger documentation at `http://localhost:3000/api-docs` when the server is running.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript types
├── utils/          # Utility functions
└── index.ts        # Application entry point
```

## Security Features

- JWT Authentication
- Password Hashing
- Rate Limiting
- HTTP Security Headers
- Input Validation
- CORS Support

## Error Handling

Centralized error handling with proper HTTP status codes and meaningful error messages.

## Logging

Winston logger configured for both console and file logging.

## License

MIT