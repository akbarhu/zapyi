import { Router } from "express";
import { verifyToken } from "../middlewares/Authmiddlewares.js";
import { getContactForDMList, searchContacts } from "../controllers/ContactController.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactForDMList)

export default contactsRoutes;
