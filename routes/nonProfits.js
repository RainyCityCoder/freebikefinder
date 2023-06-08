const { Router } = require('express');
const router = Router();
const nonProfitData = require('../dataInterface/nonProfits');
const auth = require('../auth');

router.get('/', async (req, res) => {
  let result;
  let resultStatus;

  if (Object.keys(req.query).length === 0) {
    result = await nonProfitData.getAllNonProfits();
  } else {
    let state = req.query.state.toUpperCase();
    result = await nonProfitData.getNonProfitByParameter(state);
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
  const result = await nonProfitData.getNonProfitById(req.params.id);

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
  let result = await nonProfitData.createNonProfit(req.body);

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
  const result = await nonProfitData.updateNonProfitById(
    req.params.id,
    req.body
  );

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
  const result = await nonProfitData.deleteByID(req.params.id);

  if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

module.exports = router;
