const therapistService = require("../services/therapistService");

exports.createTherapist = async (req, res) => {
  try {
    const therapist = await therapistService.createTherapist(req.body);
    res.status(201).json(therapist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTherapists = async (req, res) => {
  try {
    const therapists = await therapistService.getTherapists();
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
