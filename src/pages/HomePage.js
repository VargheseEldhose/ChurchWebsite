import {View,Text} from 'react-native'

import Footer from '../reusable/Footer';
import church from '../images/church.jpeg'
import church2 from '../images/church 2.jpeg'
import ImageSlider from '../components/ImageSlider';

const images=[church,church2]

 function HomePage({navigation}) {
return(
    <View> 
         <h1 style={{padding:30,marginTop:-5,marginBottom:-10,color:'white',background:'#4169e1'}}>St. Mark's Syriac Orthodox Church
         <h6 style={{fontFamily:'sans-serif',fontSize:'16px',marginTop:25,marginBottom:10}}>167 Willet street</h6>
         <h6 style={{fontFamily:'sans-serif',fontSize:'16px',marginTop:-3}}>Halifax, Nova Scotia</h6>
         </h1>
<ImageSlider  images={images}></ImageSlider>
        
<div style={{background:'#d3d3d3',margin:20}}>

<h2 style={{fontFamily:'sans-serif', fontSize:'30px', fontWeight:'bolder',margin:20}}>UPCOMING EVENTS</h2>
<div style={{display:'flex',flexDirection:'row'}}>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',marginTop:20,marginLeft:20}}>March 23rd</p>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}>Hosana Service<p style={{font:'caption',fontSize:'16px',marginTop:-1}}>Saturday 12PM</p></p>

    </div>

    <div style={{display:'flex',flexDirection:'row'}}>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}>March 27th</p>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}>Maundy Thursday<p style={{font:'caption',fontSize:'16px',marginTop:-1}}>Wednesday 5PM</p></p>

    </div>


</div>
      
      
         <Footer></Footer>
         
   
    
    </View>)
    
    
}
export default HomePage;