# TitikTemu Sequence Diagrams

## User Registration Flow
```
Client → API Gateway → Auth Service → Database
                         ↓
                    Generate JWT
                         ↓
Client ← API Gateway ← Auth Service
```

## Create Event Flow
```
Client → API Gateway → Event Service → Database
  (with JWT token)        ↓
                    Validate token
                         ↓
Client ← API Gateway ← Event Service
```

## Reserve Venue Flow
```
Client → API Gateway → Venue Consumer Service → Venue Provider (Group B)
  (with JWT token)              ↓
                    Return reservation details
                         ↓
Client ← API Gateway ← Venue Consumer Service
```

## Record Attendance Flow
```
Client → API Gateway → Attendance Service → Database
  (with JWT token)            ↓
                    Validate participant
                         ↓
Client ← API Gateway ← Attendance Service
```
