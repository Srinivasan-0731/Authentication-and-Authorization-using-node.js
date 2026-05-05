# User Authentication and Authorization with Bearer Token

A REST API built with Node.js, Express, MongoDB, and JWT for user authentication and authorization.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://your-postman-collection-link-here)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime |
| **Express.js** | Web Framework |
| **MongoDB Atlas** | Database |
| **Mongoose** | ODM |
| **JWT (jsonwebtoken)** | Token Authentication |
| **bcryptjs** | Password Hashing |
| **dotenv** | Environment Variables |

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xsxf8tm.mongodb.net
JWT_SECRET=your_secret_key
```

### 4. Run the Server

```bash
node index.js
```

Expected terminal output:

```
Database Connected
Server running on port 5000
```

---

## API Endpoints

### Auth Routes (No Token Required)

#### Register

```
POST /api/auth/register
```

**Request Body:**

```json
{
  "username": "testuser",
  "email": "test@gmail.com",
  "password": "test123"
}
```

**Response:**

```json
{
  "msg": "User registered successfully"
}
```

---

#### Login

```
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "test@gmail.com",
  "password": "test123"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "email": "test@gmail.com"
  }
}
```

---

### User Routes (Token Required)

#### Get Profile

```
GET /api/user/profile
```

**Headers:**

```
Authorization: Bearer <your_token>
```

**Response:**

```json
{
  "_id": "user_id",
  "username": "testuser",
  "email": "test@gmail.com"
}
```

---

## How JWT Works

```
1. User registers    →  Password hashed & saved to MongoDB
2. User logs in      →  JWT Token generated & returned
3. User hits /profile →  Token verified → User data returned
```

---

## API Testing (Postman)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://sp2392546-6144432.postman.co/workspace/Srinivasan-P's-Workspace~a5670e24-0370-49e6-811c-b70632fbc2ac/collection/50998807-f3c4ed4a-c3fe-45dc-a527-91c721775f38?action=share&creator=50998807)

> Click the button above to import the Postman collection and test all endpoints directly.

**How to get your Postman link:**
1. Open your collection in Postman
2. Click the **three dots (...)** next to the collection name
3. Select **Share** → **Get public link**
4. Replace the placeholder URL above with your link

---

## Deployment (Render.com)

1. Push your code to GitHub
2. Go to [https://render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repository
4. Add the following Environment Variables:

| Variable | Value |
|----------|-------|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Your secret key |
| `PORT` | 5000 |

5. **Build Command:** `npm install`
6. **Start Command:** `node index.js`

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |

---

## .gitignore

```
.env
node_modules/
```

---

## License

This project is open source and available under the [MIT License](LICENSE).