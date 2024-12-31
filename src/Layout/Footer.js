
import Image from 'next/image';
import img from '../assets/pinkcityimg/payment.jpg';
import logo from '../assets/pinkcityimg/logo.png';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container">
        <div className="row">   
          {/* Contact Section */}
          <div className="col-md-4">
            <Image src={logo} style={{width:'30%'}}/>
          
            <p>If you have any question, please contact us at</p>
            <Link href="mailto:walexopay@gmail.com" className="text-light d-block mb-2">
            walexopay@gmail.com
            </Link>
            <address>
            Ganesh Vihar Sirsi Mode, F-1, 26-A, Ayodhaya Nagar, Lalarpura, Kanakpura, Jaipur, Rajasthan, 302034
              
            </address>
            <Link href="tel:+91-7240141255" className="text-light">
              +91  7240141255
            </Link>
          </div>

          {/* Information Links */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Information</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" className="text-light">About Us</Link>
              </li>
              <li>
                <Link href="/privacypolicy" className="text-light">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/t&c" className="text-light">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/rp" className="text-light">Refund Policy</Link>
              </li>
              <li>
                <Link href="/contact" className="text-light">Contact Us</Link>
              </li>
            </ul>
            <div className="mt-3">
              <Link href="#" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-light me-3">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link href="#" className="text-light">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* Finance Partners */}
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Our Finance Partners</h5>
            <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="form-control mb-2"
              />
              <button className="btn btn-primary w-100">Submit</button>
            </div>
            <div className="d-flex align-items-center">
             <Image src={img}/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dangers text-light text-center py-3 mt-4">
        <p className="mb-0">Copyright &copy; {new Date().getFullYear()} Walexopay Technology private limited All Rights Reserved</p>
      </div>
    </footer>
  );
}
