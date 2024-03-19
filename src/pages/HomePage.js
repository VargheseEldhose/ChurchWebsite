import {View} from 'react-native'

import Footer from '../reusable/Footer';
import church from '../images/church.jpeg'
import church2 from '../images/church 2.jpeg'
import ImageSlider from '../components/ImageSlider';

import 'reactjs-popup/dist/index.css';
import Header from '../components/Header';
import { Button } from 'react-native-web'

const images=[church,church2]

 function HomePage({navigation}) {
return(
    <View> 
        <Header navigation={navigation}></Header>
 
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