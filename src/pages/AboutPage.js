import {View} from 'react-native'
import { Outlet } from 'react-router-dom'
import { Button } from 'react-native-web'
import Header from '../components/Header'
import Footer from '../reusable/Footer'

function AboutPage({navigation}){
    return(<View>
        <Header navigation={navigation}></Header>
        
      
        <View style={{margin:30,padding:30}}>
        <h1 style={{textAlign:'center'}}>About Us!</h1>

        <p style={{fontWeight:'bolder'}}>Our Parish, St Mark's Syriac Orthodox Church is in its budding stage.
         It is formed with a clear mission with a vision. 
         The church has been formed by a group of families who are
          followers of Syriac Orthodox tradition in India (Malankara) 
          St. Mark's Sriac Orthodox Church of Hlaifax, Nova Scotia, Canada
           a Jacobite church, mainly consists of the members from South India 
           (Kerala) who speak the Malayalam language. we belong to the very ancient
            church called Syriac Orthodox Church of Antioch (SOCA), one of the
             members of the Oriental Orthodox Church family. </p>

             <p style={{fontWeight:'bolder'}}>Our Archdiocese, The Malankara Archdiocese of
the Syrian Orthodox Church in North America is a
non-profit religious organization in the United
States, incorporated in the State of New York. The
Archdiocese is under the ecclesiastical jurisdictior
of His Holiness the Patriarch of Antioch and All the
East, Moran Mor Ignatius Aphrem ll, the Supreme
Head of the Universal Syrian Orthodox Church.
This Archdiocese under the jurisdiction of
Diocesan Bishop: H.G. Yeldo Mor Theethose, Arch
Bishop Diocese of North America, comprises of
the parishes all over the United States and Canada
for the people predominantly from India who
follow the Syriac tradition. The Church uses the
Syriac
language, a dialect of Aramaic spoken by Lord
Jesus, as the Liturgical language along with
English & Malayalam, a vernacular language of
South India. Here we hope to present the orthodox
faith, principles and organization of the church anc
its related entities</p>

<p style={{fontWeight:'bolder'}}>We gather here to celebrate holy Qurbana
according to the ancient tradition of Syriac
Orthodox Church. We are looking forward to
expand our mission by transferring the rich
orthodox tradition to our young generation through
Sunday-schools and Youth associations. Expecting
all your kind support towards spreading the
messages of our savior - Jesus Christ</p>
             
</View>
            <Footer></Footer></View>)
}
export default AboutPage