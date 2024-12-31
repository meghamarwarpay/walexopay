import Header from '@/Layout/Header';
import { format } from 'date-fns';

// Function to generate a random 4-character alphanumeric string (numbers and letters)
function generateRandomINVNo() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default function InvoiceTemplate({ order }) {
  const shippingAddress = JSON.parse(order.shippingAddress);
  const parsedProducts = shippingAddress.products
    ? JSON.parse(shippingAddress.products)
    : [];

  // Generate the INV No
  const invoiceNo = generateRandomINVNo();

  return (
    <>
      <Header />
      <div style={{ marginTop: '2%' }}>
        <div className="max-w-[800px] mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex justify-between items-start mb-4 pt-2 pb-2">
            <div className="row">
              <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                <h3 className="text-2xl font-bold text-black-800">
                  PinkCIty Infotech Solution Pvt Ltd.
                </h3>
                <h4 className="text-lg text-gray-600 mt-1">Receipt / Tax Invoice</h4>
              </div>
              <div className="col-6 text-sm text-black-500 mt-2">
                <p><strong>GST</strong>: 08AAOCP4750B1ZE</p>
                <p><strong>Address</strong>: Alpine tower, 101, 1st floor, 9 Dukan, Kalwar road, Jaipur, Rajasthan</p>
                <p><strong>Email</strong>: Pinkcityinfotek@gmail.com</p>
                <p><strong>Contact</strong>: +91-9351888150</p>
              </div>
              <div className="col-6 text-right">
                <p className="text-sm text-black-500"><strong>INV No</strong>: {invoiceNo}</p>
                {/* <p className="text-base text-black-700 font-medium">{invoiceNo}</p> */}
                <p className="text-sm text-black-500 mt-2"><strong>Date</strong>: {format(new Date(), 'yyyy-MM-dd')}</p>
                {/* <p className="text-base text-black-700 font-medium">{format(new Date(), 'yyyy-MM-dd')}</p> */}
              </div>
            </div>
          </div>
          <div className="border border-gray-300 p-3 rounded-lg mb-4 bg-gray-50">
            <h4 className=" text-gray-800 mb-3 text-xl font-bold ">Customer Details</h4>
            {/* <p><strong>To:</strong> {order.userDetail.email}</p> */}
            <p><strong>To:</strong> {shippingAddress.email}</p>
            <p><strong>Name:</strong> {shippingAddress.name}</p>
            <p>
              <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.pincode}, 
              {shippingAddress.state}, {shippingAddress.country}
            </p>
            <p><strong>Phone:</strong> {shippingAddress.mobile}</p>
          </div>
          <div className="border border-gray-300 p-3 rounded-lg mb-4 bg-gray-50">
            <h4 className="text-gray-800 mb-3 text-xl font-bold">Order Details</h4>
            <p><strong>Order ID:</strong> {order._id}</p>
            <p><strong>Order Date:</strong> {format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss')}</p>
          </div>
          <table className="w-full mb-4 border border-gray-300 bg-gray-50 rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300 text-gray-700">
                <th className="text-left px-2 py-2 border border-gray-300">S.NO</th>
                <th className="text-left px-2 py-2 border border-gray-300">Description</th>
                <th className="text-center px-2 py-2 border border-gray-300">QTY</th>
                <th className="text-center px-2 py-2 border border-gray-300">SAC</th>
                <th className="text-right px-2 py-2 border border-gray-300">Net Amount</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product, index) => {
                const productName =
                  product.productName || (parsedProducts[index] && parsedProducts[index].productName);
                const singleproduct = product.productName || JSON.parse(order.shippingAddress).productName;
                return (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-2 py-2 border border-gray-300">{index + 1}</td>
                    <td className="px-2 py-2 border border-gray-300">{productName || singleproduct}</td>
                    <td className="text-center px-2 py-2 border border-gray-300">{product.quantity}</td>
                    <td className="text-center px-2 py-2 border border-gray-300">{order._id}</td>
                    <td className="text-right px-2 py-2 border border-gray-300">Rs. {product.price.toFixed(2)}</td>
                  </tr>
                );
              })}
              <tr className="font-bold">
                <td colSpan={4} className="text-right px-2 py-2 border border-gray-300">Total:</td>
                <td className="text-right px-2 py-2 border border-gray-300">Rs. {order.totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs mb-4">
            <h3 className="text-gray-800 mb-3 text-xl font-bold">Terms and Conditions</h3>
            <ul className="list-disc pl-4 text-gray-600">
              <li>Payment will be on immediate basis.</li>
              <li>All the services from this app are non-refundable.</li>
              <li>This invoice includes GST.</li>
              <li>This is an electronically generated invoice and does not require a signature.</li>
            </ul>
          </div>
          <div className="text-center font-bold mb-2 text-base" style={{ color: 'red' }}>
            PAYMENT TERMS: IMMEDIATE
          </div>
          <div className="text-center text-xs text-black-500">
            <h5 className="mb-2"><strong>PinkCIty Infotech Solution Pvt Ltd.</strong></h5>
            <p>Alpine tower,101,1st floor, 9 Dukan, Kalwar road, Jaipur,Rajasthan</p>
            <p>CIN: U47410RJ2024PTC095632 | <a href="https://pinkcitycart.com/" className="text-blue-600 underline">https://pinkcitycart.com/</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
