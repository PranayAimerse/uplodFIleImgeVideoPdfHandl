const User = require("../models/UserModel");
const { errorResponse, SuccessResponse } = require("../utils/utils");
const path = require('path');
const fs = require("fs");
exports. CreateUser = async (req, res) => {
    try {
        const { name } = req.body;
    
        if (!name) {
          return res.status(400).json({ message: 'Name is required' });
        }
    
        if (!req.files) {
          return res.status(400).json({ message: 'No files were uploaded' });
        }
    
        const uploadDir = path.join(__dirname, '../uploads');
        fs.mkdirSync(uploadDir, { recursive: true });
    
        let imageUri = null;
        let videoUri = null;
        let pdfUri = null;
    
        const serverBaseUrl = `http://localhost:9000`; 
    
        if (req.files.image) {
          const image = req.files.image;
          const imagePath = path.join(uploadDir, `images_${Date.now()}_${image.name}`);
          image.mv(imagePath);
          imageUri = `${serverBaseUrl}/uploads/${path.basename(imagePath)}`;
        }
    
        if (req.files.video) {
          const video = req.files.video;
          const videoPath = path.join(uploadDir, `videos_${Date.now()}_${video.name}`);
          video.mv(videoPath);
          videoUri = `${serverBaseUrl}/uploads/${path.basename(videoPath)}`;
        }
    
        if (req.files.pdf) {
          const pdf = req.files.pdf;
          const pdfPath = path.join(uploadDir, `pdfs_${Date.now()}_${pdf.name}`);
          pdf.mv(pdfPath);
          pdfUri = `${serverBaseUrl}/uploads/${path.basename(pdfPath)}`;
        }
    
        const user =await User.create({name:name,image_uri:imageUri,video_file:videoUri,pdf_file:pdfUri})
        res.status(201).json({ message: 'Files uploaded and user created successfully', user });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
