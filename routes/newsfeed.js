const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const fs = require('fs');

const File = require('../app').model;
const News = require('../models/newsfeed');

router.post('/addItem', async (req, res) => {
    let form = new formidable.IncomingForm();
    let file = null;

    form.parse(req, async (err, fields, files) => {
        file = await new Promise(async (resolve, reject) => {
            let fileModel = await File;

            fileModel.write(
                {
                    filename: files.file.name,
                    contentType: files.file.type
                },
                fs.createReadStream(files.file.path),
                (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        await new News({
            title: fields.title,
            text: fields.text,
            file
        }).save();
    });

    res.end();
});

module.exports = router;