import imageOne from '../images/imageOne.jpg'
import imageTwo from '../images/imageTwo.jpg'
import imageThree from '../images/imageThree.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageEight from '../images/imageEight.jpg'



const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imageEight} className="d-block w-100" style={{height: '94.7vh'}} alt="aircraft"/>
    </div>
    <div className="carousel-item">
      <img src={imageTwo} className="d-block w-100" style={{height: '94.7vh'}} alt="aircraft"/>
    </div>
    <div className="carousel-item">
      <img src={imageThree} className="d-block w-100" style={{height: '94.7vh'}} alt="aircraft"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
