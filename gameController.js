import GameData from '../models/GameData.js';

export const submitGameData = async (req, res) => {
  try {
    const { level, score } = req.body;

    const gameData = new GameData({
      userId: req.userId,
      level,
      score
    });

    await gameData.save();
    res.status(201).json({ message: 'Game data saved' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save game data' });
  }
};

export const getUserGameData = async (req, res) => {
  try {
    const gameHistory = await GameData.find({ userId: req.userId }).sort({ timestamp: -1 });
    res.json(gameHistory);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching game data' });
  }
};
