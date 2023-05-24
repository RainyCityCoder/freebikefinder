const { Router } = require('express');
const router = Router();
const shopData = require('../dataInterface/shops');
const auth = require('../auth');

router.get('/', async (req, res) => {
  let result;
  let resultStatus;

  if (Object.keys(req.query).length === 0) {
    result = await shopData.getAllShops();
  } else {
    let state = req.query.state.toUpperCase();
    result = await shopData.getShopByParameter(state);
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
  const result = await shopData.getShopById(req.params.id);

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
  let result = await shopData.createShop(req.body);

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
  const result = await shopData.updateShopById(req.params.id, req.body);

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
  const result = await shopData.deleteByID(req.params.id);

  if (result.error) {
    resultStatus = 400;
  } else {
    resultStatus = 200;
  }

  res.status(resultStatus).send(result);
});

module.exports = router;
