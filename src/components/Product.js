import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"



function Product(){
    return(
          <div className="products">
            
              <div className="box">
              <img src={one} alt="one"></img>
              <p>AZHEROUD, Golden Sands Long Lasting De Parfum - 30 ml</p>    
              </div>
  
              <div className="box">
              <img src={two} alt="two"></img>
              <p>HVNLY, Women Pleasure Eau De Parfum - 30ml</p> 
              </div>
  
              <div className="box">
                  <img src={three} alt="three"></img>
                  <p>HVNLY, Men Woods Long Lasting Eau De Parfum - 30ml</p>
              </div>
              
          </div>
    )
  }

  export default Product