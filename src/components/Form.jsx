import React from "react";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import request from "superagent";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  }
}));
const CLOUDINARY_UPLOAD_PRESET = "your_upload_preset_name";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/cloudinary_app_name/upload";
const Form = ({
  formData,
  setFormData,
  setChange,
  setUploadedFileUrl,
  uploadedFileUrl
}) => {
  const classes = useStyles();
  const onSubmit = e => {
    e.preventDefault();
    setChange(false);
    setUploadedFileUrl({ uploadedFiles: e[0] });
    console.log(uploadedFileUrl.uploadedFiles);
    handleImageUpload(uploadedFileUrl.uploadedFiles);
  };

  const handleChange = e => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  const onImageDrop = e => {
    setUploadedFileUrl({ uploadedFiles: e[0] });
    //handleImageUpload(uploadedFileUrl);
  };
  const handleImageUpload = file => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        setUploadedFileUrl({
          uploadedFileURL: response.body.secure_url
        });
      }
    });
  };
  console.log(uploadedFileUrl.uploadedFileURL);

  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <h2 className="addImage">Add Image</h2>
        <DropzoneArea
          showFileNamesInPreview={true}
          maxFileSize={10000000}
          multiple="false"
          accept="image/*"
          onDrop={console.log}
          dropzoneText="Add an image here"
          onChange={onImageDrop}
          type="file"
        ></DropzoneArea>
        <h2>Add your Name</h2>
        <TextField
          value={formData.name}
          onChange={handleChange}
          className={classes.root}
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          autoFocus
          type="text"
          name="name"
          autoComplete="false"
        />
        <h2>Add a Description</h2>
        <TextField
          type="text"
          className={classes.root}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          rows="4"
          multiline
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Save
        </Button>
      </Grid>
    </form>
  );
}; /* 
Form.propTypes = {
  classes: PropTypes.object.isRequired
}; */
export default Form;
