import {View} from 'react-native'
import { Outlet } from 'react-router-dom'
import { Button } from 'react-native-web'

function AboutPage({navigation}){
    return(<View><h1>hhhhhh</h1><Button titel="test" onPress={()=>navigation.navigate('Home')}></Button></View>)
}
export default AboutPage