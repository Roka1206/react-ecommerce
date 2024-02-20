// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = (orderPopup, handleOrderPopup) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screem fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
            <div className="w-[300] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-sm bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              <div className="flex items-center justify-between">
                <h1>Order Confirmation</h1>
                <div>
                  <IoMdCloseCircleOutline
                    className="text-2xl cursior-pointer"
                    onClick={handleOrderPopup}
                  />
                </div>
              </div>

              <div className="mt-4">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="text" placeholder="Email" className="form-input" />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div className="flex justify-center">
                  <Button
                    text="Confirm Order"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
