// PaymentPage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const PaymentPage = () => {
//   return (
//     <div>
//       <h1>Payment Page</h1>
//       <p>Select a payment method:</p>
//       <ul>
//         <li><Link to="/subscription-benefits">UPI</Link></li>
//         <li><Link to="/subscription-benefits">Credit/Debit Card</Link></li>
//         <li><Link to="/subscription-benefits">Net Banking</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default PaymentPage;


// PaymentPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div>
      <h1>Payment Page</h1>
      <p>Select a payment method:</p>
      <ul>
        <li><Link to="/subscription-benefits">UPI</Link></li>
        <li><Link to="/subscription-benefits">Credit/Debit Card</Link></li>
        <li><Link to="/subscription-benefits">Net Banking</Link></li>
      </ul>
    </div>
  );
};

export default PaymentPage;
