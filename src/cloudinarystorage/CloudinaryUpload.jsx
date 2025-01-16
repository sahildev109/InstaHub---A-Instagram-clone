import React, { useState } from "react";
import axios from "axios";

const CloudinaryUpload = () => {
  // State to hold the selected image and uploaded image URL
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Function to handle file selection
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Save the selected file in state
  };

  // Function to upload the image to Cloudinary
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_PRESET_NAME); // Replace with your preset name
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); // Replace with your cloud name

    try {
      // Send the file to Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      // Get the uploaded image's URL
      setImageUrl(response.data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading the image:", error);
      alert("Failed to upload the image. Please try again.");
    }
  };

  return (
    <div>
      {/* File input */}
      <input type="file" onChange={handleFileChange} />
      {/* Upload button */}
      <button onClick={handleUpload}>Upload</button>
      {/* Show the uploaded image */}
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" style={{ width: "300px" }} />
        </div>
      )}
    </div>
  );
};

export default CloudinaryUpload;
