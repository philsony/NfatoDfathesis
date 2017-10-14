var express = require('express');
var router = express.Router();
var nfa = require("nfa-to-dfa");

/* GET home page. */
router.get('/', function(req, res, next) {
  

// create a new NFA with title

nfa.create("Test NFA2");

nfa.addState("Q1")
	.goTo("Q1", "a")
	.goTo("Q0", "a");

nfa.addState("Q2")
	.final();

nfa.addState("Q4")
	.final();

nfa.addState("Q0")
	.initial()
	.loop("a")
	.loop("b")
	.goTo("Q4", "c")
	.goTo("Q2", "b")
	.goTo("Q1", "a");


// or read from file
//nfa.readFile("multi_initial.nfa");

var dfa = nfa.toDfa().toString();
console.log(nfa);
console.log('--------------------------------------------');
console.log(dfa);
  
   
   
    //  console.log(nfa);
  res.render('index', { title: JSON.stringify(nfa.toDfa())});
});

module.exports = router;
