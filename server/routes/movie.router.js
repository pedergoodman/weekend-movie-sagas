const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `
    SELECT movie_id, title, poster, description, string_agg(genres.name, ', ') AS genres FROM movies 
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    GROUP BY movie_id, title, poster, description`;

    
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});



router.get('/:id', (req, res) => {

  // console.log(req.params.id);

  const movieToGrab = [req.params.id]

  const query = `
  SELECT movie_id, title, poster, description, string_agg(genres.name, ', ') AS genres FROM movies 
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = $1 
    GROUP BY movie_id, title, poster, description`;

  pool.query(query, movieToGrab)
    .then(result => {
      console.log('in router result.rows is:', result.rows);
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});







router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

module.exports = router;