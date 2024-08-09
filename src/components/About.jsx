import { useEffect} from 'react'
import imageThree from '../images/imageThree.jpg'
import '../css/about.css' 
import imageEight from '../images/imageEight.jpg'
import aos from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'


const About = () => {
  useEffect(() =>{
    aos.init({
      duration:2000
    })
  },[])
  return (
    <div className='about-overall-container'>
      <h2 className='text-center pt-5'>About Us</h2>
      <div className='about-container d-flex w-75 mx-auto my-5 pb-5'>
        <div className='m-2'>
            <img src={imageEight} alt="about us" className='me-4' data-aos="zoom-in " style={{borderRadius:'5px'}} />
        </div>
        <div className=' about-text-container m-2'>
            
            <p>Lorem ipsum, dssolor sit amet consectetur adipisicing elit. Deleniti dolore unde similique vitae magnam, quas, saepe, dicta laboriosam blanditiis repellendus voluptatem itaque natus mollitia aperiam! Iusto nisi enim ab voluptatum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eius sequi error ducimus tenetur nam eum doloremque odit facere reiciendis accusamus fugiat sunt esse quas voluptatem eligendi, ea ex cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat ad repudiandae eveniet aspernatur nulla ut reiciendis delectus, reprehenderit mollitia est qui exercitationem nam iure unde molestiae nihil provident eius.</p>
        </div>
      </div>
    </div>
  )
}

export default About
