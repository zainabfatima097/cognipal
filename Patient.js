import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  symptoms: [String],
  progressNotes: String,
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Patient', patientSchema);
