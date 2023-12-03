import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import "./HouseModal.css";

const HouseModal = ({ modalOpened, setModalOpened, house }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      title=""
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="35%"
    >
      {/* Modal content */}
      <div className="familyDetails">
        <h1>Family Members</h1>
        <div className="parents">
          <span>Parents</span>
          <ul className="parentList">
            {house.parents.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </ul>
        </div>
        <div className="all">
          <div className="children">
            <span>Children</span>
            <ul className="childList">
              {house.children.map((child, index) => (
                <li key={index}>{child}</li>
              ))}
            </ul>
          </div>
          <div className="grand">
            <span>GrandChildren</span>
            <ul className="grandList">
              {house.grandchildren.map((child) => (
                <li>{child}</li>
              ))}
            </ul>
          </div>
          <div className="greatGrand">
            <span>GreatGrandChildren</span>
            <ul className="greatList">
              {house.greatgrand.map((child) => (
                <li>{child}</li>
              ))}
            </ul>
            
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HouseModal;
