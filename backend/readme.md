# User Authentication API Documentation

## **1. User Registration**

### **Endpoint:** `/users/register`

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

---
## **2. User Login**

### **Endpoint:** `/users/login`

### **Method:** `POST`

### **Description:**
This endpoint allows users to log in by providing their registered email and password. If credentials are valid, a JWT token is returned.

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
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

#### **Field Requirements:**
- `email` (string, required, must be a valid email)
- `password` (string, required)

---
## **Response Format**

### **Success Response:**
- **Status Code:** `200 OK`
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
#### 1️⃣ **Invalid Credentials**
- **Status Code:** `401 Unauthorized`
- **Response:**
```json
{
  "message": "Invalid email or password"
}
```

#### 2️⃣ **Missing Required Fields**
- **Status Code:** `400 Bad Request`
- **Response:**
```json
{
  "error": "Email and password are required"
}
```

---
## **Example cURL Request:**
```sh
curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
    "email": "johndoe@example.com",
    "password": "securepassword"
}'
```

---
### **Notes:**
- Ensure email and password are correct.
- The API returns a JWT token upon successful login.

