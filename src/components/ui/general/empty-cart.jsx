"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "./confirm-modal";

const EmptyCart = () => {
  const openConfirm = () => {
    document.getElementById("confirm").showModal();
  };

  return (
    <>
      <button
        className="btn btn-error flex items-center gap-2 px-6 text-white"
        onClick={openConfirm}
      >
        <DeleteIcon />
        <span>Empty Cart</span>
      </button>
      <ConfirmModal />
    </>
  );
};

export default EmptyCart;
