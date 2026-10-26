const { Router } = require('express');
const router = Router();
const userData = require('../dataInterface/users');

router.post('/login', async (req, res) => {
  let resultStatus;
  let result = await userData.findByCredentials(req.body);

  if (result === null) {
    resultStatus = 500;
  } else if (result.length === 0) {
    resultStatus = 404;
  } else if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

router.post('/register', async (req, res) => {
  let resultStatus;
  let result = await userData.create(req.body);

  if (result === null) {
    resultStatus = 500;
  } else if (result.length === 0) {
    resultStatus = 404;
  } else if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

module.exports = router;
