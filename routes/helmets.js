const { Router } = require('express');
const router = Router();
const helmetData = require('../dataInterface/helmets');
const auth = require('../auth');

router.get('/', async (req, res) => {
  let result;
  let resultStatus;

  if (Object.keys(req.query).length === 0) {
    result = await helmetData.getAllHelmets();
  } else {
    let state = req.query.state.toUpperCase();
    result = await helmetData.getHelmetByParameter(state);
  }

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

router.get('/:id', async (req, res) => {
  let resultStatus;
  const result = await helmetData.getHelmetById(req.params.id);

  if (result === null) {
    resultStatus = 500;
  } else if (result.length === 0 || result.error) {
    resultStatus = 404;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

router.post('/', auth.verifyToken, async (req, res) => {
  let resultStatus;
  let result = await helmetData.createHelmet(req.body);

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

router.put('/:id', auth.verifyToken, async (req, res) => {
  let resultStatus;
  const result = await helmetData.updateHelmetById(req.params.id, req.body);

  if (result === null) {
    resultStatus = 500;
  } else if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

router.delete('/:id', auth.verifyToken, async (req, res) => {
  let resultStatus;
  const result = await helmetData.deleteByID(req.params.id);

  if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

module.exports = router;
