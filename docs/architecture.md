# TitikTemu Microservices Architecture

## Overview
TitikTemu is a Node.js microservices-based event management system designed for scalability and maintainability.

## Architecture Components

### 1. API Gateway
- Single entry point for all client requests
- Handles routing to appropriate services
- JWT token validation
- Centralized error handling

### 2. Services

#### Auth Service (Port 3001)
- User registration and login
- JWT token generation and validation
- User authentication

#### Event Service (Port 3002)
- Event CRUD operations
- Event lifecycle management
- Event status tracking

#### Venue Consumer Service (Port 3003)
- Integration with Venue Provider (Group B)
- Venue reservation management
- Venue availability checking

#### Attendance Service (Port 3004)
- Attendance recording
- Attendance statistics
- Participant tracking

## Communication Pattern
- Service-to-service communication via HTTP REST
- Each service has its own database (SQLite)
- No direct database access between services
- JWT-based security

## Database Strategy
- One database per service
- SQLite for development/testing
- Can be scaled to PostgreSQL for production

## Technology Stack
- Node.js / Express.js
- SQLite / PostgreSQL
- JWT for authentication
- Axios for HTTP requests
