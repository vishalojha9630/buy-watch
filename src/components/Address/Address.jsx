import React, { useState } from "react";
import { AddressModal } from "../../pages/cart/AddressModal";

const Address = ({showEditIcon}) => {
    const [userAddress, setUserAddress] = useState({
        firstName: "Vishal",
        lastName: "Ojha",
        address: "Near Gandhi college, Kushmoda, GUNA",
        city: "GUNA",
        state: "Madhya Pradesh",
        contactNumber: 9630917149,
      });
  return (
    <div className="delivery-box flex-row">
      <div>
        <p className="medium-text bold">{`${userAddress.firstName} ${userAddress.lastName}`}</p>
        <p className="small-text">{userAddress.address}</p>
        <p className="small-text">{`${userAddress.city}, ${userAddress.state}`}</p>
        <p className="small-text">{userAddress.contactNumber}</p>
      </div>
      { showEditIcon && <AddressModal setUserAddress={setUserAddress} />}
    </div>
  );
};

export { Address };
