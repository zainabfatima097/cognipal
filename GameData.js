import mongoose from 'mongoose';

const gameDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: Number,
  score: Number,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('GameData', gameDataSchema);
