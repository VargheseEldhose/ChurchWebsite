import {View,Text} from 'react-native'


import {FaBars} from 'react-icons/fa'

import { Button } from 'react-native-web';
import HomeMenu from './HomeMenu';

function Header({navigation}){
    return(<div style={{display:'flex',flexDirection:'row',padding:30,marginTop:-5,marginBottom:-10, color:'white',background:'#4169e1'}}>
        
   
  <HomeMenu navigation={navigation}></HomeMenu>
        <h1>St. Mark's Syriac Orthodox Church
        <h6 style={{fontFamily:'sans-serif',fontSize:'16px',marginTop:25,marginBottom:10}}>167 Willet street</h6>
        <h6 style={{fontFamily:'sans-serif',fontSize:'16px',marginTop:-3}}>Halifax, Nova Scotia</h6>
        </h1></div>)
}
export default Header
