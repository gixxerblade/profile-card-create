import React, { useState } from "react";
import "./App.css";
import MediaCard from "./components/MediaCard";
import Form from "./components/Form";
function App() {
  const [uploadedFileUrl, setUploadedFileUrl] = useState({ uploadedFiles: null });
  const [textData, setTextData] = useState({
    name: "Donald Trump",
    description:
      "I write the best placeholder text, and I'm the biggest developer on the web by far. While that's mock-ups and this is politics, are they really so different?"
  });
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const [change, setChange] = useState(true);

  return (
    <div className="App">
      <h1 className="title">Make Your Own Profile Card</h1>
      <div className="container">
        <MediaCard
          name={textData.name}
          description={textData.description}
          change={change}
          setChange={setChange}
          formData={formData}
          uploadedFileUrl={uploadedFileUrl}
        />
        <Form
          formData={formData}
          setFormData={setFormData}
          setChange={setChange}
          setUploadedFileUrl={setUploadedFileUrl}
          uploadedFileUrl={uploadedFileUrl}
        />
      </div>
    </div>
  );
}

export default App;
