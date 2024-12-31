import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import img  from '../../assets/pinkcityimg/slider/1.jpg'
import img1  from '../../assets/pinkcityimg/slider/2.jpg'
import img2  from '../../assets/pinkcityimg/slider/3.jpg'
export default function ImageCarousel() {
  return (
    <div className="container-fluid p-0" style={{marginTop:'8%'}}>
      <Carousel interval={3000} indicators={false}>
      

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img}
            alt="Second slide"
            style={{ height: '500px', objectFit: 'cover' }} // Set fixed height and cover
          />
       
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img1}
            alt="Third slide"
            style={{ height: '500px', objectFit: 'cover' }} // Set fixed height and cover
          />
    
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={img2}
            alt="Fourth slide"
            style={{ height: '500px', objectFit: 'cover' }} // Set fixed height and cover
          />
      
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
