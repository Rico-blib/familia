import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./UpdateHouse.css";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { updateHouse } from "../../actions/houseAction";
export const UpdateHouse = ({ openModal, setopenModal, data, setEditHouse}) => {
  const dispatch = useDispatch();
  const [houseData, setHouseData] = useState(data)
  const handleChange = (e) => {
    if (e.target.name === "house"){
      setHouseData({...houseData, [e.target.name] : e.target.value})
    }else {
    setHouseData({...houseData, [e.target.name] : e.target.value.split(",")})
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let HouseData = {...houseData, id: houseData._id}
    console.log(HouseData)
    dispatch(updateHouse(houseData._id, HouseData));
    setopenModal(false);
    setEditHouse((prev)=> !prev)
  }
  const theme = useMantineTheme();
  return (
    <Modal
      opened={openModal}
      onClose={() => setopenModal(false)}
      title="Update Your Family"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="40%"
    >
      {/* Modal content */}
      <form action="" className="houseform">
        <div className="houseDetails">
          <input
            type="text"
            name="house"
            placeholder="Enter House Name"
            className="houseInfo"
            onChange={handleChange}
            value={houseData.house}
          />
        </div>
        <div className="houseDetails">
          <input
            type="text"
            className="houseInfo"
            placeholder="Parents of the House"
            name="parents"
            onChange={handleChange}
            value={houseData.parents}
          />
        </div>
        <div className="houseDetails">
          <input
            type="text"
            className="houseInfo"
            name="children"
            placeholder="children of the house"
            onChange={handleChange}
            value={houseData.children}
          />
        </div>
        <div className="houseDetails">
          <input
            type="text"
            className="houseInfo"
            name="grandchildren"
            placeholder="GrandChildren"
            onChange={handleChange}
            value={houseData.grandchildren}
          />
        </div>
        <div className="houseDetails">
          <input
            type="text"
            className="houseInfo"
            name="greatgrand"
            placeholder="GreatGrandChildren"
            onChange={handleChange}
            value={houseData.greatgrand}
          />
        </div>
        <button className="btn two" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};
