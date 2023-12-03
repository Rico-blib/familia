import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import img1 from "../../img/e2.JPG";
import "./FamilyAlbum.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAPhotoSharp,
  CalendarTodaySharp,
  Clear,
  LocationOnSharp,
  PlayCircleOutline,
} from "@material-ui/icons";
import { uploadImage, uploadPost } from "../../actions/uploadAction";
import * as UserApi from "../../api/UserRequest";
import Footer from "../../Components/Footer/Footer";

const FamilyAlbum = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [albumShare, setAlbumShare] = useState({});
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [reload, setReload] = useState(false)
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchPosts = async () => {
      const albumShare = await UserApi.getPosts();
      setAlbumShare(albumShare);
    };
    fetchPosts();
  }, [reload]);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };
  return (
    <div className="familyAlbum">
      <Header />
      <Navbar />
      <div className="album">
        <div className="albumShare">
          <img src={user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.png"} alt="" />
          <div>
            <input
              type="text"
              ref={desc}
              required
              placeholder="What's happening"
            />
            <div className="albumOptions">
              <div
                className="options"
                style={{ color: "green" }}
                onClick={() => imageRef.current.click()}
              >
                <AddAPhotoSharp />
                Photo
              </div>
              <div className="options" style={{ color: "blue" }}>
                <PlayCircleOutline />
                Video
              </div>
              <div className="options" style={{ color: "red" }}>
                <LocationOnSharp />
                Location
              </div>
              <div className="options" style={{ color: "yellow" }}>
                <CalendarTodaySharp />
                Schedule
              </div>
              <button
                className="psbtn two"
                onClick={ (e) => {
                  handleSubmit(e)
                  setReload((prev) => !prev)
                }}
                disabled={loading}
                
              >
                {loading ? "Uploading..." : "Share"}
              </button>
              <div style={{ display: "none" }}>
                <input
                  type="file"
                  name="myImage"
                  ref={imageRef}
                  onChange={onImageChange}
                />
              </div>
            </div>
            {image && (
              <div className="previewImage">
                <Clear onClick={() => setImage(null)} />
                <img src={URL.createObjectURL(image)} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="posts">
        {albumShare.data?.map((post, index) => {
          console.log(post);
          return (
            <div className="post">
              <img
                src={
                  post.image
                    ? serverPublic + post.image
                    : ""
                }
                alt=""
              />
              <div className="desc">
                <span>{post.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default FamilyAlbum;
