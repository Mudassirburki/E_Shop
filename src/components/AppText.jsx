import {  Text as RNText,StyleSheet } from "react-native";

const BaseText=({children,style,...props})=>{
  return (
    <RNText style={style} {...props}>{children}</RNText>
  )
};

const styles=StyleSheet.create({
  h1:{
    fontSize:32,
    fontWeight:"bold"
  },
  h2:{
    fontSize:24,
    fontWeight:"bold"
  },
  h3:{
    fontSize:20,
    fontWeight:"600"
  },
  body:{
    fontSize:16,
  },
  small:{
    fontSize:12,
    color:"#555"
  },
  medium:{
    fontSize:14,
    color:"#1642B2"
  },
});

const AppText={
  h1:(props)=> <BaseText {...props} style={[styles.h1,props.style]}/>,
   h2:(props)=> <BaseText {...props} style={[styles.h2,props.style]}/>,
    h3:(props)=> <BaseText {...props} style={[styles.h3,props.style]}/>,
     body:(props)=> <BaseText {...props} style={[styles.body,props.style]}/>,
      small:(props)=> <BaseText {...props} style={[styles.small,props.style]}/>,
      medium:(props)=> <BaseText {...props} style={[styles.medium,props.style]}/>
}

export default AppText;