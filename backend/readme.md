# User Registration API Documentation

## Endpoint: `/users/register`

### **Method:** `POST`

### **Description:**
This endpoint allows new users to register by providing their details. If the email already exists in the database, an error response is returned.

---
## **Request Format**
### **Headers:**
```json
{
  "Content-Type": "application/json"
}
```

### **Body Parameters (JSON):**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
#### **Field Requirements:**
- `fullname.firstname` (string, required, min length: 3)
- `fullname.lastname` (string, optional, min length: 3)
- `email` (string, required, must be a valid email, unique)
- `password` (string, required, min length: 6)

---
## **Response Format**

### **Success Response:**
- **Status Code:** `201 Created`
- **Response Body:**
```json
{
  "user": {
    "_id": "60b8d295f72e3b001f3d5e6a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

### **Error Responses:**
#### 1️⃣ **Validation Error**
- **Status Code:** `400 Bad Request`
- **Response:**
```json
{
  "errors": [
    {
      "msg": "Firstname will be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

#### 2️⃣ **Duplicate Email Error**
- **Status Code:** `409 Conflict`
- **Response:**
```json
{
  "error": "Email already exists"
}
```

#### 3️⃣ **Missing Required Fields**
- **Status Code:** `400 Bad Request`
- **Response:**
```json
{
  "error": "All fields are required"
}
```

---
## **Notes:**
- Ensure the email is unique.
- Password must be at least 6 characters long.
- The API returns a JWT token upon successful registration.

---
## **Example cURL Request:**
```sh
curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com",
    "password": "securepassword"
}'
```

