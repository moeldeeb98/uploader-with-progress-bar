import React from "react";
import axios from "axios";
import FormData from "form-data";

function App() {
  const handleUploadFile = (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("name", "Deeb");

    const config = {
      onUploadProgress: (e) => {
        const progress = Math.floor((e.loaded / e.total) * 100);
        console.log(`progress : ${progress}%`);
      },
    };

    axios.post("http://localhost:3500/api/uploadFile", data, config);
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (file) {
      console.log(file);
      handleUploadFile(file);
    }
  };

  return (
    <div className="App">
      <form>
        <input type="file" onChange={handleFileChange} />
      </form>
    </div>
  );
}

export default App;
