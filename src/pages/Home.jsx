import  Carousel from '../components/Carousel'
import Services from '../components/Services'
import imageFour from '../images/imageFour.jpg'
import imageFive from '../images/imageFive.jpg'
import imageSix from '../images/imageSix.jpg'
import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
import About from '../components/About'
import imageSeven from'../images/imageSeven.jpg'
import imageEight from '../images/imageEight.jpg'


const Home = () => {
  return (
    <>
      <Carousel/>
      <About/>
  
    <Services textOne="Elit. Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?"textTwo="Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textThree="Mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" titleOne="Ticketing" titleTwo="Hotel Reservation" titleThree="Flight Booking" imageFour={imageEight} imageFive={imageFive} imageSix={imageFour} title="Our Services" left="fade-down-right" right="fade-down-left" center="fade-down"/>
   
    <Services textOne="Elit. Commodi mollitcati ipsa quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textTwo="Pisicing elit. Commodi doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" textThree="Lipsa on ground plain quod doloribus dolorem excepturi cum, iste libero incidunt numquam  Lorem, ipsum dolor sit amet consectetur?" titleOne="Review" titleTwo="Complaint" titleThree="Branches" imageFour={imageSeven} imageFive={imageThree} imageSix={imageTwo} left="fade-up-right"  right = "fade-up-left" center="fade-up"/>
    
    </>
  )
}

export default Home
