var users = require('../controllers/controller.js');

module.exports = function(app) {
  app.get('/', users.index);
  app.get('/questions', users.getquestions);
  app.get('/search', users.getsearch);
  app.get('/questions/:id', users.details);
  app.post('/question', users.addquestion);
  app.put('/questions/:id', users.edit);
  app.delete('/question/:id/', users.removequestion);
  app.get('/vote1/:id', users.vote1);
  app.get('/vote2/:id', users.vote2);
  app.get('/vote3/:id', users.vote3);
  app.get('/vote4/:id', users.vote4);
}   