import { Collections } from '@material-ui/icons'
import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'
import Trending from './Trending'
import { db } from './firebase'

function Home() {


    const [ products, setProducts ] = useState([]);

   useEffect(() => {
       db.collection('products').onSnapshot((snapshot)=>{
          let tempProducts = []
        snapshot.docs.map((doc)=>{
             tempProducts.push({
                 id: doc.id,
                 product: doc.data()
           })
        })
           setProducts(tempProducts)
       })
   }, [])

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-banner"  
                style={{backgroundImage: "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)"}}>
                </div>
                <div className="Home-content">

                <div className="Home-row">
                                                      
                        <Trending
                         title={"Up to $9 off Fire HD 10 covers"}
                         image={"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDBiZDdmOWIt/MDBiZDdmOWIt-ZTMzOTE2Nzgt-w379._SY304_CB412117050_.jpg"}
                         link={"See more details"}
                         />
                        <Trending
                         title={"All-new Echo Frames"}
                         image={"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWQ0NzdiNzQt/MWQ0NzdiNzQt-NDFlZjdlZDIt-w379._SY304_CB412115001_.jpg"}
                         link={"Learn More"}
                         />

                        <Trending
                         title={"Deals on digital software"}
                         image={"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Consumer_Electronics/XCM_Manual_1284250_1464130_US_GH20_us_ce_desktop_3504401_379x304_en_US._SY304_CB416297797_.jpg"}
                         link={"See more details"}
                         />

                        <Trending
                         title={"Deals on digital reading"}
                         image={"https://images-na.ssl-images-amazon.com/images/G/01/kindle/ku/hol20/devices/Flexible_Desktop__Cat_Card_Cat_379x304._SY304_CB416283824_.jpg"}
                         link={"Try Kindle Unlimited"}
                         />
                        
                                  
                 </div>


                    <div className="Home-row">
                        {
                            products.map((product)=>(
                                <Product
                                    id={product.id}
                                    key={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
                                    rating={product.product.rating}
                                    image={product.product.image}
                                />
                            )).slice(0,2)
                        }
                                    
                    </div>
                    
                    <div className="Home-row">
                    { 
                    
                     products.map((product)=>(
                                   <Product
                                    id={product.id}
                                    key={product.id}
                                    title={product.product.title}
                                    price={product.product.price}
                                    rating={product.product.rating}
                                    image={product.product.image}
                                />
                            )).slice(2,5) 
                    }
                    </div>
                </div>
            </div>

        </div>
   )
}
   
export default Home
