const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Lista zweryfikowanych użytkowników (proste przechowywanie w pamięci)
const verifiedUsers = {
    "123456789": true,  // Przykładowe User ID Roblox
    "987654321": true
};

// Endpoint do weryfikacji użytkownika
app.get('/verify', (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: "Nie podano userId." });
    }

    if (verifiedUsers[userId]) {
        return res.json({ verified: true });
    } else {
        return res.json({ verified: false });
    }
});

// Start serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
