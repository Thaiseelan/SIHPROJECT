const { Therapist, Specialty, Language, Availability } = require("../models");

exports.createTherapist = async (data) => {
  return await Therapist.create(data, {
    include: [Specialty, Language, Availability],
  });
};

exports.getTherapists = async () => {
  return await Therapist.findAll({
    include: [Specialty, Language, Availability],
  });
};
