import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../actions/userAction";
import { uploadImage } from "../../actions/uploadAction";

function ProfileModal({ modalOpened, setModalOpened, data, setEditProfile }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setprofileImage] = useState(null);
  const [coverImage, setcoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setprofileImage(img)
        : setcoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = { ...formData, id: formData._id };
    //console.log(UserData);
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(formData._id, UserData));
    setModalOpened(false);
    setEditProfile((prev) => !prev);
    // window.location.reload(true)
  };

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      title="Add info"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="55%"
    >
      {/* Modal content */}
      <form className="bioForm">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          />

          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="profession"
            placeholder="Profession"
            onChange={handleChange}
            value={formData.profession}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="phone"
            placeholder="Contact"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
        <div>
          <input
            type="email"
            className="infoInput"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="btn infobtn" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
