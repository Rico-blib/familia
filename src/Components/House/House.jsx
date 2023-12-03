import React from "react";
import "./House.css";
import { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import HouseModal from "../HouseModal/HouseModal";
import { UpdateHouse } from "../UpdateHouse/UpdateHouse";

const House = ({house, setEditHouse}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [openModal, setopenModal] = useState(false)
  const theme = useMantineTheme();
  return (
    <div className="house">
      <div className="contents">
        <span>{house.house}:House</span>
        <div className="about">
          <span onClick={() => setModalOpened(true)}>About</span>
          <HouseModal
          house={house}
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
        <div className="upgrade">
          <span onClick={() => setopenModal(true)}>Update</span>
          <UpdateHouse openModal={openModal}
          setopenModal={setopenModal}
          data={house}
          setEditHouse={setEditHouse}
          />
        </div>
      </div>
    </div>
  );
};

export default House;
