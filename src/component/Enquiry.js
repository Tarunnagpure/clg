import React, { useState } from "react";
import SideNav from "./SideNav";

const Enquiry = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedList, setSelectedList] = useState({})
    let userData = [
        {
            name: "test",
            email: "test@gmail.com",
            mobile_no: "8989898989",
            parent_name: "Test",
        },
        {
            name: "mohan",
            email: "mohan@gmail.com",
            mobile_no: "8989898989",
            parent_name: "Mohanlal",
        },
        {
            name: "user",
            email: "userinfo@gmail.com",
            mobile_no: "8989898989",
            parent_name: "User",
        },
    ];
    const handleModalOpen = (data) => {
        setSelectedList(data)
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    // console.log(selectedList);
    return (

        <div className="d-flex">

            <SideNav />

            <div className="w-100 p-3">
                <h5 className="text-center">Student List</h5>


                {userData.map((data, index) => {
                    return (

                        <div className="list-container" key={index}>
                            <div>
                                <img className="user-icon" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"/>
                            </div>
                            <div>{data.name}</div>
                            <div>{data.parent_name}</div>
                            <div>{data.email}</div>
                            <div>{data.mobile_no}</div>
                            <div onClick={() => handleModalOpen(data)}>
                                <div className="list-icon">
                                    <img
                                        className="edit-list-icon"
                                        src="data:image/png;base64,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"
                                    />
                                    <img className="delete-icon" src="https://cdn3.vectorstock.com/i/1000x1000/60/27/trash-bin-icon-vector-23806027.jpg" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Enquiry;