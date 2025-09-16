import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import logRequest from "../middlewares/logRequest.js";
import {faker} from "@faker-js/faker";


const router = express.Router();
router.get("/:id", logRequest, isAuthenticated, (req, res) => {
    res.json({
        "product": {
            "id": req.params.id,
            "productName": faker.commerce.productName(),
            "productType": faker.commerce.product(),
            "productDescription": faker.commerce.productDescription(),
            "productPrice": faker.number.float({min: 100, max: 10000}),
        }
    });
});

export default router;