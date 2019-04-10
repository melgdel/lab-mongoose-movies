const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${dbName}`);



/*Call the Celebrity model's find method to retrieve all the celebrities.
If there's an error, call the route's next function and return the error.
If there isn't an error, render the celebrities/index view.
Pass the array of celebrities into the view as a variable.*/

router.get ('/celebrities',(req,res,next)=>{
  Celebrity.find()
  .then ((data) => {
    const celebrities = data ;
    res.render ('celebrities/index', {celebrities});
  })
  .catch ((err) => {
    next();
  });
});













module.exports = router;