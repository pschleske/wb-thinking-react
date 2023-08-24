// Import your packages
import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";
// Set up app instance 
const app = express();

// Set up middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

// Set up routes here 
const { getInvoices, addItem, deleteItem, updateItem } = handlerFunctions

app.get('/invoice', getInvoices)

app.post('/addInvoice', addItem)

app.delete('/removeInvoice/:id', deleteItem)

app.put('/editInvoice/:id', updateItem)

// Open up door to server
ViteExpress.listen(app, 4545, () => console.log("Listening on port 4545. Go to http://localhost:4545"))