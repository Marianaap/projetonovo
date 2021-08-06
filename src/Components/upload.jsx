import React from "react";
import api from '../../Services/api'


function SendImage() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        console.log(formData)

        const Upload = async() => {
            await api.post('/api/upload',formData)
          }
        Upload();
    
    }
    

  return (
    <div className="App">
        <form onSubmit={handleSubmit}  enctype="multipart/form-data">
            <div >
                <label htmlFor="image">Image :  </label>
                <div >
                    <input type="file" id="image" name="file" 
                    accept="image/*"/>
                </div>
            </div>
            <div>
                <button type="submit" >Upload</button>
            </div>
        </form>
    </div>
  );
}

export default SendImage;