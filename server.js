const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Sirve archivos estáticos (como HTML) desde la carpeta del proyecto
app.use(express.static(path.join(__dirname)));

// Ruta principal para servir el archivo ETNO2.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ETNO2.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
