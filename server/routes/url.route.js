const express = require("express");
const { nanoid } = require("nanoid");
const urlModel = require("../models/url.model");

const urlRouter = express.Router();

/**
 * @route POST /create
 * @description create a shorter url
 * @body {url}
 */
urlRouter.post('/create', async (req, res) => {
    try {
        const id = nanoid(6);
        const { url } = req.body;

        const shorterUrl = await urlModel.create({
            originalUrl: url,
            shorterUrl: id
        });

        res.status(201).json({
            "message": "shorter url created",
            success: true,
            shorterUrl
        });
    } catch (error) {
        return res.status(500).json({
            "message": "Internal server error",
            "success": false
        });
    }
});

/**
 * @route GET /:id
 * @description redirects user to the following url
 */
urlRouter.get('/:id', async (req, res) => {
    try {
        const shorterUrl = req.params.id;

        const document = await urlModel.findOne({
            shorterUrl
        });

        if (!document) {
            return res.status(404).json({
                "message": "No Url found",
                success: false
            });
        }

        return res.redirect(document.originalUrl);
    } catch (error) {
        return res.status(500).json({
            "message": "Internal server error",
            "success": false
        });
    }
});

/**
 * @route GET /
 * @description show all shorter urls
 */
urlRouter.get('/', async (req, res) => {
    try {
        const urls = await urlModel.find();

        return res.status(200).json({
            "message": "here is the all shorter urls",
            success: true,
            urls
        });
    } catch (error) {
        return res.status(500).json({
            "message": "Internal server error",
            "success": false
        });
    }
});

/**
 * @route DELETE /:id
 * @description delete an shorter url
 */
urlRouter.delete('/:id', async (req, res) => {
    try {
        const shorterUrl = req.params.id;

        const url = await urlModel.findOneAndDelete({
            shorterUrl
        });

        if (!url) {
            return res.status(404).json({
                message: "No URL found to delete",
                success: false
            });
        }

        return res.status(200).json({
            "message": "the url is deleted",
            success: true,
            url
        });
    } catch (error) {
        return res.status(500).json({
            "message": "Internal server error",
            "success": false
        });
    }
});

module.exports = urlRouter; 