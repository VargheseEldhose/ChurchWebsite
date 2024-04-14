import {View} from 'react-native'

import Footer from '../reusable/Footer';
import church1 from '../images/church1.jpg'
import church2 from '../images/church2.png'
import church3 from '../images/church3.jpg'
import ImageSlider from '../components/ImageSlider';

import 'reactjs-popup/dist/index.css';
import Header from '../components/Header';
import { Button } from 'react-native-web'

const images=[church3,church1,church2]

 function HomePage({navigation}) {
return(
    <View> 
        <Header navigation={navigation}></Header>
 
        
<ImageSlider  images={images}></ImageSlider>

<div style={{background:'#d3d3d3',margin:30}}>

<h2 style={{fontFamily:'sans-serif', fontSize:'30px', fontWeight:'bolder',margin:20}}>UPCOMING EVENTS</h2>
<div style={{display:'flex',flexDirection:'row'}}>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',marginTop:20,marginLeft:20}}></p>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}><p style={{font:'caption',fontSize:'16px',marginTop:-1}}></p></p>

    </div>

    <div style={{display:'flex',flexDirection:'row'}}>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}>May 25th</p>
    <p style={{font:'caption',fontSize:'25px',fontWeight:'bolder',margin:20}}>Church Festival<p style={{font:'caption',fontSize:'16px',marginTop:-1}}>Saturday 12PM</p></p>

    </div>


</div>
      
         <Footer></Footer>
         
   
    
    </View>)
    
    
}
export default HomePage;