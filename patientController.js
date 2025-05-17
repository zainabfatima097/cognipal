import Patient from '../models/Patient.js';

export const createOrUpdatePatient = async (req, res) => {
  try {
    const { symptoms, progressNotes } = req.body;

    const updatedPatient = await Patient.findOneAndUpdate(
      { userId: req.userId },
      { symptoms, progressNotes, updatedAt: new Date() },
      { new: true, upsert: true }
    );

    res.json({ message: 'Patient data saved', patient: updatedPatient });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save patient data' });
  }
};

export const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ userId: req.userId });
    if (!patient) return res.status(404).json({ error: 'No patient data found' });

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patient data' });
  }
};
