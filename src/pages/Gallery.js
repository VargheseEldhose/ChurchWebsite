import {View} from 'react-native'
import church1 from '../images/church1.jpg'
import Header from '../components/Header'
import Footer from '../reusable/Footer'

function Gallery ({navigation}){
    return (

        <View>
        <Header navigation={navigation}></Header>

        <h1>More Updates soon!!</h1>
    
    <img src={church1}></img>
    <Footer></Footer>
    
    </View>

    
    )
}
export default Gallery