const path = require('path');
// ============================
const multer = require('multer');
// ============================

const {staticPath} = require('../config/staticConfig');

const storageBookImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(staticPath, './images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  }
})

const filterBookImage = (req, file, cb) => {
   
    if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/gif') {
		return cb(null, true);
	}
    cb(null, false)
}

module.exports.uploadBookImage = multer({
	storage: storageBookImage,
	fileFilter: filterBookImage
});