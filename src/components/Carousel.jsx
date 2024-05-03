
import { Carousel } from 'flowbite-react';

function CarouselSection () {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <img src="https://res.cloudinary.com/delagynow/image/upload/v1711153367/site_photo%20archive/DSC00932_mtulef.webp" alt="..." />

        <img src="https://res.cloudinary.com/delagynow/image/upload/v1711150040/site_photo%20archive/luxury-2-bedroom-flat-on-the-6th-and-12th-floor-wi-v5F0t2JEoBuFXsTOLdPM_smmy3k.jpg" alt="..." />

        <img src="https://res.cloudinary.com/delagynow/image/upload/v1711150035/site_photo%20archive/fetched-serviced-fully-furnished-2bedroom-4dtmmMuVpqHcDt20tjyj_migauh.jpg" alt="..." />

        <img src="https://cwlagos.com/wp-content/uploads/2021/10/DSC00919.jpg" alt="..." />

        <img src="https://res.cloudinary.com/delagynow/image/upload/v1711150129/site_photo%20archive/8_jeqf4v.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
export default CarouselSection
