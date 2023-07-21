const express = require("express");
const router = express();
const cors = require("cors");
router.use(cors());
require("dotenv").config();
const axios = require("axios");

router.get("/place", (req, res) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const getPlaceData = async (url) => {
    return await axios.get(url,{signal: signal}).then((res) => {
      abortController.abort();
      return res;
    });
  };
  const pageNo = req?.body.pageNo ? req.body.pageNo : 1;
  const listIdxNo = req?.body.listIdxNo ? req.body.listIdxNo : 10;
  const placeURL = `http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?ServiceKey=${process.env.OPEN_API_SERVICE_KEY}&pageNo=${pageNo}&numOfRows=${listIdxNo}&resultType=json`;
  
  getPlaceData(placeURL)
    .then((response) => {
      res.send(response?.data?.getAttractionKr?.item);
      console.log(response?.data?.getAttractionKr?.item);
    })
    .catch(err => res.send(`occur error ${err}`))
    .finally(() => {
      console.log("all done");
    });
});

router.get("/culture", (req, res) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
});

module.exports = router;