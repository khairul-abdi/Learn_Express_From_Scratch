const fs = require('fs')

class TodoModel {

   read(params) {
      const result = JSON.parse(fs.readFileSync('./models/todo.json', 'utf8'))

      if (params) {
         const filtered = result.filter(val => val.id == params)

         console.log(filtered)

         return filtered
      }

      return result
   }

   create({ task }) {
      const lists = this.read(null) 

      lists.push({
         id: lists.length+1,
         task
      })

      fs.writeFileSync('./models/todo.json', JSON.stringify(lists, null, 2))

      return lists
   }

   update(params) {
      
   }

   delete(params){
      console.log('this is delete in model')
   }
}

module.exports = new TodoModel()