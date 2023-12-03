import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import axios from "axios";
import "./HouseForm.css";

const HouseForm = ({ openForm, setOpenForm }) => {
  const theme = useMantineTheme();
  const [house, setHouse] = useState("");
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [grandchildren, setGrandchildren] = useState([]);
  const [greatgrand, setGreatgrand] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newHouse = {
      house: house,
      parents: parents,
      children: children,
      grandchildren: grandchildren,
    };

    try {
      await axios.post("http://localhost:5000/house/record", newHouse);
      console.log("House added successfully");
      setOpenForm(false);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <Modal
      opened={openForm}
      onClose={() => setOpenForm(false)}
      title="Fill Form"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="45%"
    >
      {/*Modal Contents */}
      <form onSubmit={handleSubmit} className="houseform">
        <div className="oneHouse">
          <span>House Name</span>
          <input
            className="houseInfo"
            type="text"
            placeholder="Enter house name"
            value={house}
            onChange={(event) => setHouse(event.target.value)}
          />
        </div>

        <div className="oneHouse">
          <span>Parents</span>
          <input
            className="houseInfo"
            placeholder="separate names with a comma"
            type="text"
            value={parents}
            onChange={(event) => setParents(event.target.value.split(","))}
          />
        </div>

        <div className="oneHouse">
          <span>Children</span>
          <input
            className="houseInfo"
            type="text"
            placeholder="separate names with a ,"
            value={children}
            onChange={(event) => setChildren(event.target.value.split(","))}
          />
        </div>
        <div className="oneHouse">
          <span>Grandchildren</span>
          <input
            className="houseInfo"
            type="text"
            placeholder="separate names with a ,"
            value={grandchildren}
            onChange={(event) =>
              setGrandchildren(event.target.value.split(","))
            }
          />
        </div>
        <div className="oneHouse">
          <span>GreatGrandchildren</span>
          <input
            className="houseInfo"
            type="text"
            placeholder="separate names with a ,"
            value={greatgrand}
            onChange={(event) =>
              setGreatgrand(event.target.value.split(","))
            }
          />
        </div>
        <button className="btn two" type="submit">
          Add House
        </button>
      </form>
    </Modal>
  );
};

export default HouseForm;
