const Todo = require("../models/todo");
const users = [
  { name: "Igor", age: 25, email: "igor@mail.ru" },
  { name: "Elena", age: 30, email: "elena@gmail.com" },
];

module.exports = {
  test() {
    return {
      count: Math.trunc(Math.random() * 10),
      users,
    };
  },
  random({ min, max, count }) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const rand = Math.random() * (max - min) + min;
      arr.push(rand);
    }
    return arr;
  },
  addTestUser({ user: { name, email } }) {
    const user = {
      name,
      email,
      age: Math.ceil(Math.random() * 30),
    };
    users.push(user);
    return user;
  },
  async getTodos() {
    try {
      return await Todo.findAll();
    } catch (e) {
      throw new Error("Fetch todos is not available");
    }
  },
  async createTodo({ todo }) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false,
      });
    } catch (e) {
      throw new Error("title is required");
    }
  },
  async completeTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      todo.done = true;
      await todo.save();
      return todo;
    } catch (e) {
      throw e;
    }
  },
  async deleteTodo({ id }) {
    try {
      const todo = await Todo.findByPk(id);
      await todo.destroy();
      return true;
    } catch (e) {
      throw e;
      return false;
    }
  },
};
