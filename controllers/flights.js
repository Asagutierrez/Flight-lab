

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

export {
  newFlight as new
}