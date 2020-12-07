import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View } from 'react-native';
import { onChange } from 'react-native-reanimated';

export default function App() {
  
  
    //const [value, onChangeText] = React.useState();
    let value='0';
  return (
    
    <View style={styles.container}>
      
      
      <View style={styles.tit}>
      <Text style={styles.texxt}>CURNEU CALCULATOR</Text>
      </View>
      <StatusBar title="Calculator" text="Calculator" style="auto" />
      <View style={styles.rescont}>
      <Text style={styles.restxt}>0</Text>
      <TextInput style={styles.values}    value={value,onChange} />
      </View>
      <View style={styles.incont}>      
      <Button title="1"onPress={(value) =>value=value+'1' }/><Separator />
      <Button title="2"onPress={(value) =>value+'2' }/><Separator />
      <Button title="3"onPress={(value) =>value+'3' }/><Separator />
      <Button title="4"onPress={(value) =>value+'4' }/>
      <Button title="5"onPress={(value) =>value+'5' }/>
      <Button title="6"onPress={(value) =>value+'6' }/>
      <Button title="7"onPress={(value) =>value+'7' }/>
      <Button title="8"onPress={(value) =>value+'8' }/>
      <Button title="9"onPress={(value) =>value+'9' }/>
      <Button title="0"onPress={(value) =>value+'0' }/>
      <Button title="+"onPress={(value) =>value+'+' }/>
      <Button title="/"onPress={(value) =>value+'/' }/>
      <Button title="*"onPress={(value) =>value+'*' }/>
      <Button title="-"onPress={(value) =>value+'-' }/>
      <Button title="="onPress={(value) =>value+'=' }/>
      <Button title="."onPress={(value) =>value+'.' }/>
      <Button title="AC"onPress={(value) =>'0'}/>
      </View>      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66f',
    
  },
  restxt:{
    fontSize:80,
    color:'#fff',
    textAlign:'right'
  },
  texxt:{  
    fontSize:32,
    color:'#fff',
    fontStyle:'italic',fontWeight:'bold'
  },
  tit:{
    alignItems: 'center',
    flex:2,top:80,fontSize:20,
  },
  rescont:{
    flex:2,
    backgroundColor:'#66f',marginHorizontal:20,justifyContent:'center'
  },
  incont:{
    flex:6,
    backgroundColor:'#333'
  },
   values:{ position:'absolute',
   margin:20,
   alignItems:'flex-end',
   height: 40, borderColor: 'gray', borderWidth: 5,textAlign:'center'

   }
});