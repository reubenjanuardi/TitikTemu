# TitikTemu API Contract

## API Gateway Endpoints

### Authentication Endpoints
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/validate
```

### Event Endpoints
```
POST /api/event - Create new event
GET /api/event - Get all events
GET /api/event/:id - Get event by ID
PUT /api/event/:id - Update event
DELETE /api/event/:id - Delete event
```

### Venue Endpoints
```
POST /api/venue - Create reservation
GET /api/venue - Get all reservations
DELETE /api/venue/:id - Cancel reservation
```

### Attendance Endpoints
```
POST /api/attendance - Record attendance
GET /api/attendance/event/:eventId - Get attendance records
GET /api/attendance/stats/:eventId - Get attendance statistics
```

## Response Format
All responses should follow this format:

### Success Response
```json
{
  "statusCode": 200,
  "message": "Success",
  "data": {}
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": "Error message",
  "errors": []
}
```

## Authentication
All protected endpoints require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```
