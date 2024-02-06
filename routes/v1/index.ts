/**
 * this is version 1 router
 * @author sanjiv
 */

import express from "express";
import { auth } from "../../middelware/auth";

const router = express.Router();

//webhook routes
router.post("/webhook/payment", async (req, res) => {});
router.post("/webhook/transfer", async (req, res) => {});

export default router;
