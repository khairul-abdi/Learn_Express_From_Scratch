const Todo = require('../models/todo')

class TodoController {

   read(req, res) {
      const result = Todo.read(req.params.id)

      return res.status(200).json({
         message: 'read method',
         result
      })
   }

   create(req, res) {
      const createdData = Todo.create(req.body)

      return res.status(200).json({
         message: 'create method',
         createdData
      })
   }

   update(req, res) {
      const updatedTodo = Todo.update(req.params.id)

      return res.status(200).json({
         message: 'update method',
         updatedTodo
      })
   }

   delete(req, res) {
      const deletedTodo = Todo.delete(req.params.id)

      return res.status(200).json({
         message: 'delete method',
         deletedTodo
      })
   }
}

module.exports = new TodoController()