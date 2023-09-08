require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose');

//// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});
//////////////////////////

const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Middleware;
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

// const middleware = (req, res, next) => {
//   console.log('Middleware: I run for all routes, 1');
//   next();
// };

// Index
app.get('/pokes', async (req, res) => {
  try {
    const foundPokes = await Pokemon.find({});
    console.log(foundPokes);
    res.status(200).render('Index', {
      pokemon: foundPokes,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New
app.get('/pokes/new', (req, res) => {
  console.log('New controller');
  res.render('New');
});

// Delete

// Update

// Create
app.post('/pokes', async (req, res) => {
  try {
    // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    //   req.body.readyToEat = true; //do some data correction
    // } else { //if not checked, req.body.readyToEat is undefined
    //   req.body.readyToEat = false; //do some data correction
    // }
    req.body.readyToEat = req.body.readyToEat === 'on';

    const createdPokemon = await Pokemon.create(req.body);

    res.status(201).redirect('/pokes');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit

// Show
app.get('/pokes/:id', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);

    //second param of the render method must be an object
    res.render('Show', {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});