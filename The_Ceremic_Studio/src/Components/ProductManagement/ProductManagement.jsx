import React, { useState } from "react";
import AddProductManagement from "./AddProductManagement";
import QRImage from "../../Images/QR.png";
import BarcodeImage from "../../Images/Barcode.png";
import Vectortwelve from "../../Images/Vectortwelve.png";
import GroupIcon from "../../Images/Group.png";

function ProductManagement() {
  const [showForm, setShowForm] = useState(false);

  // ================= QR / BARCODE POPUP STATE =================
  const [popupType, setPopupType] = useState(null); // "qr" | "barcode"
  const [popupValue, setPopupValue] = useState("");

  // ================= PRODUCT DATA =================
  const [products] = useState([
    {
      id: 1,
      image: "",
      name: "ABCD",
      brand: "Somany",
      category: "Marble",
      quality: "Premium",
      rate: "₹150",
      godown: "KKW,MN",
      batch: "Batch 1: Qty=0, Loc=NSK\nBatch 2: Qty=0, Loc=NSK",
      qrValue: "ganje.rashma@gmail.com",
      barcodeValue: "test3",
    },
    {
      id: 2,
      image: "",
      name: "ABCD",
      brand: "Somany",
      category: "Marble",
      quality: "Premium",
      rate: "₹150",
      godown: "KKW,MN",
      batch: "Batch 1: Qty=0, Loc=NSK\nBatch 2: Qty=0, Loc=NSK",
      qrValue: "ganje.rashma@gmail.com",
      barcodeValue: "test3",
    },
  ]);

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div className="relative top-[30px] left-[125px] w-[1350px] h-[70px] flex items-center justify-between px-[35px] rounded-[10px] border border-[#003B67]">
        <p className="font-bold text-[22px]">Product Registration</p>

        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 rounded-lg border-2 border-[#FA9C42] hover:bg-[#FA9C42] hover:text-white transition"
        >
          <span className="text-[16px] font-bold text-[#FA9C42]">+</span>
          Add Product
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="relative top-[60px] left-[125px] w-[1350px]">
        <div className="grid grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1.5fr_2fr_1fr_1fr] bg-[#FA9C42] text-white rounded-lg px-6 py-4 font-medium text-center text-[16px]">
          <div>Image</div>
          <div>Name</div>
          <div>Brand</div>
          <div>Category</div>
          <div>Quality</div>
          <div>Rate(₹)</div>
          <div>Godown</div>
          <div>Batch Details</div>
          <div>QR Code</div>
          <div>Barcode</div>
        </div>

        {products.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1.5fr_2fr_1fr_1fr] items-center px-6 py-4 border-b border-[#F1C08B] text-center text-[15px]"
          >
            <div className="flex justify-center">
              <img src={Vectortwelve} className="w-[40px] h-[40px] bg-[#E9EEF3] rounded-md" />
            </div>

            <div>{item.name}</div>
            <div>{item.brand}</div>
            <div>{item.category}</div>
            <div>{item.quality}</div>
            <div>{item.rate}</div>
            <div>{item.godown}</div>

            <div className="text-[13px] leading-[18px] whitespace-pre-line">
              {item.batch}
            </div>

            {/* ================= QR CLICK ================= */}
            <div className="flex justify-center">
              <img
                src={QRImage}
                className="w-[45px] h-[45px] cursor-pointer"
                onClick={() => {
                  setPopupType("qr");
                  setPopupValue(item.qrValue);
                }}
              />
            </div>

            {/* ================= BARCODE CLICK ================= */}
            <div className="flex justify-center">
              <img
                src={BarcodeImage}
                className="w-[60px] h-[35px] cursor-pointer"
                onClick={() => {
                  setPopupType("barcode");
                  setPopupValue(item.barcodeValue);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ================= QR / BARCODE POPUP ================= */}
      {popupType && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40"></div>

          <div className="fixed z-50 left-[125px] right-0 top-1/2 -translate-y-1/2 flex justify-center">
            <div className="w-[420px] bg-[#FFF4EC] rounded-[18px] p-6 relative shadow-xl">
             
              <button
                onClick={() => setPopupType(null)}
                className="absolute right-4 top-3 text-red-500 text-[22px] hover:opacity-30"
              >
                ✕
              </button>

              <h2 className="text-[18px] font-semibold mb-4 flex justify-left items-center gap-2">
              <img src={GroupIcon} alt="icon" className="w-6 h-6 " />
                {popupType === "qr" ? "QR Code" : "Barcode"}
              </h2>

              <div className="flex justify-center items-center gap-2">
          
                {popupType === "qr" ? (
                  <img src={QRImage} className="w-[200px] h-[200px]" />
                ) : (
                  <div className="text-center">
                    <img src={BarcodeImage} className="w-[260px]" />
                    <p className="mt-2 text-sm">{popupValue}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================= ADD PRODUCT POPUP ================= */}
      {showForm && (
        <AddProductManagement onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default ProductManagement;
