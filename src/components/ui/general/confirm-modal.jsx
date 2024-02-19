import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
const ConfirmModal = () => {
  return (
    <>
      <dialog id="confirm" className="modal">
        <div className="modal-box max-w-sm p-4">
          <h3 className="text-xl font-bold text-error">Empty Cart!</h3>
          <p className="mb-4 mt-1">
            Are you sure you want to delete all products from the cart?
          </p>
          <form method="dialog" className="flex gap-3 justify-end">
            <button className="btn btn-success flex items-center text-white">
              <CloseRoundedIcon />
              <span>No, Cansel</span>
            </button>
            <button className="btn btn-error flex items-center text-white">
              <DoneRoundedIcon />
              <span>Yes, Im Sure</span>
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ConfirmModal;
