# Sequelize Backend Template 🚀

A clean and scalable **Node.js + Express + Sequelize** backend template for building APIs with PostgreSQL, MySQL, or SQLite.  
This starter kit helps you skip boilerplate setup and focus on writing business logic faster.  

---

## ✨ Features
- ⚡ **Express.js** – lightweight API framework
- 🗄️ **Sequelize ORM** – simple database modeling & migrations
- ⚙️ **Environment-based config** – easy setup with `.env`
- 🔄 **Migrations & seeders** – maintain schema versioning
- 🧩 **Modular structure** – controllers, routes, middleware separation
- ❌ **Error handling** – pre-configured for API robustness
- 📦 **Ready for REST APIs** – scaffold CRUD operations quickly

---

## 📂 Project Structure
/src
/config → Database configuration
/models → Sequelize models
/migrations → Database migrations
/seeders → Initial data seeders
/routes → Express route definitions
/controllers → API logic
/middlewares → Custom middleware
/utils → Helpers & utilities
server.js → App entry point


---

## 🔧 Tech Stack
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/) / MySQL / SQLite (configurable)

---

## 🚀 Getting Started

### 1. Clone repository
```bash
git clone https://github.com/yourusername/sequelize-backend-template.git
cd sequelize-backend-template

Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root:

DB_HOST=localhost
DB_USER=yourusername
DB_PASS=yourpassword
DB_NAME=yourdbname
DB_DIALECT=postgres
PORT=5000

4. Run migrations & seeders
npx sequelize db:migrate
npx sequelize db:seed:all

5. Start development server
npm run dev


Server runs on http://localhost:5000

📖 Available Scripts

npm run dev – start server in development mode with nodemon

npm start – start production server

npx sequelize db:migrate – run migrations

npx sequelize db:migrate:undo – rollback migrations

npx sequelize db:seed:all – run all seeders

📝 License

This project is licensed under the MIT License
.
You’re free to use it in personal or commercial projects – just give credit.

💡 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

👨‍💻 Author

Ibeh Promise
GitHub: @ibeh-promise

LinkedIn: your-linkedin
