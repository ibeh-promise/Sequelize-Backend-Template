# Sequelize Backend Template 🚀

A clean and scalable **Node.js + Express + Sequelize** backend template for building APIs with PostgreSQL, MySQL, or SQLite.  
Skip boilerplate setup and focus on writing business logic faster.

---

## ✨ Features

- ⚡ **Express.js** – Lightweight API framework
- 🗄️ **Sequelize ORM** – Simple database modeling & migrations
- ⚙️ **Environment-based config** – Easy setup with `.env`
- 🔄 **Migrations & seeders** – Maintain schema versioning
- 🧩 **Modular structure** – Controllers, routes, middleware separation
- ❌ **Error handling** – Pre-configured for API robustness
- 📦 **Ready for REST APIs** – Scaffold CRUD operations quickly

---

## 📂 Project Structure

```
/src
  /config        # Database configuration
  /models        # Sequelize models
  /migrations    # Database migrations
  /seeders       # Initial data seeders
  /routes        # Express route definitions
  /controllers   # API logic
  /middlewares   # Custom middleware
  /utils         # Helpers & utilities
server.js        # App entry point
```

---

## 🔧 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/) / MySQL / SQLite (configurable)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/sequelize-backend-template.git
cd sequelize-backend-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```
DB_HOST=localhost
DB_USER=yourusername
DB_PASS=yourpassword
DB_NAME=yourdbname
DB_DIALECT=postgres
PORT=5000
```

### 4. Run migrations & seeders

```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```

### 5. Start development server

```bash
npm run dev
```

Server runs on [http://localhost:5000](http://localhost:5000)

---

## 📖 Available Scripts

- `npm run dev` – Start server in development mode with nodemon
- `npm start` – Start production server
- `npx sequelize db:migrate` – Run migrations
- `npx sequelize db:migrate:undo` – Rollback migrations
- `npx sequelize db:seed:all` – Run all seeders

---

## 📝 License

This project is licensed under the MIT License.  
You’re free to use it in personal or commercial projects – just give credit.

---

## 💡 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit a pull request.

---

## 👨‍💻 Author

**Ibeh Promise**  
GitHub: [@ibeh-promise](https://github.com/ibeh-promise)  
