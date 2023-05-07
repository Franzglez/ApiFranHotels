const { Router } = require('express');
const router = Router();
const hotelesData = require('../Models/Hotel');
const Hotel = require('../Models/Hotel');
const isAuth = require('../midldwares/isAuth');
const isAdmin = require('../midldwares/isAdmin');



//Raiz
router.get('/hoteles', async (req, res) => {
  const hoteles = await hotelesData.find().exec();
  res.json(hoteles);
});


router.post('/hoteles', async (req, res) => {
    const createHoteles = req.body
    const newHotel = await hotelesData.create(createHoteles)
    res.json(newHotel)
    
})

router.put('/:id', isAuth, async (req, res) => {
  const hotelId = req.params.id
  const updatedDetails = req.body

  const updatedHotel = await hotelesData.findByIdAndUpdate(hotelId, updatedDetails, {
    new: true,
  })

  res.json(updatedHotel)
})

router.delete('/:id', async (req, res) => {
  const { hotelId } = req.params

  const deletedHotel = await hotelesData.findByIdAndDelete(hotelId)

  res.json(deletedHotel)
})





module.exports = router;