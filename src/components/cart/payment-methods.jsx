const PaymentMethods = () => {
  return (
    <div className="border-b p-4">
      <h5 className="mb-3 font-semibold">Payment Methods:</h5>
      <ul className="flex flex-col gap-3 ps-3">
        <li className="flex items-center gap-2">
          <input type="radio" name="doar" className="radio-primary radio"  />
          <label htmlFor="">Cash at the door</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" name="doar" className="radio-primary radio" />
          <label htmlFor="">Bank card at the door</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" name="doar" className="radio-primary radio" />
          <label htmlFor="">Via Link K-Net</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" name="doar" className="radio-primary radio" />
          <label htmlFor="">Electronic payment by credit card</label>
        </li>
        <li className="flex items-center gap-2">
          <input type="radio" name="doar" className="radio-primary radio" />
          <label htmlFor="">Prepayment (bank transfer)</label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentMethods;
