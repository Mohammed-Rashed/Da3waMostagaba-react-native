import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ContactAction } from '../actions';
import { Spinner } from './Spinner'; 
import { Container,Image, Header, Content, Form, Item, Button,Left, Body, Right, Input, Label, Textarea, Title } from 'native-base';
import { styles } from './../css/ContactCss';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      title: '',
      message: ''
    };
  }


  /*_alertSuccess(message) {
    Toast.show({
      text: message,
      buttonText: "تم",
      type: "success"
    })
  }
  
  _alertError(message) {
    Toast.show({
      text: message,
      buttonText: "تم",
      type: "warning"
    })
  }*/

  _onLoginPressed() { 
    const { name, email, title, message } = this.state;
    this.props.ContactAction({ name, email, title, message });
  }

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button buttonStyle={styles.buttonStyle}  info block onPress={this._onLoginPressed.bind(this)}><Text style={styles.buttonText}>إرسال</Text></Button>
    );
  }

  render(){
    return (
        
      <Container >
          <Header>
            <Left style={{flex:1}}>  
            </Left>
            <Body style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
              <Title>اتصل بنا </Title>
            </Body>
            <Right style={{flex:1}}>
              <Button  style={{paddingRight:0}} onPress={() => this.props.navigation.navigate('Contact')} transparent>
              </Button>
            </Right> 
          </Header>
        <Content style={styles.contentStyle}>
            <Form>
              <Item style={styles.item} floatingLabel>
                <Label >الإسم</Label>
                <Input style={styles.inputStyle}
                onChangeText={(name) => this.setState({ name  }) }
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label>البريد الإلكتروني</Label>
                <Input style={styles.inputStyle}
                onChangeText={(email) => this.setState({ email  }) }
                />
              </Item>
              <Item style={styles.item} floatingLabel>
                <Label>عنوان الرسالة</Label>
                <Input style={styles.inputStyle}
                onChangeText={(title) => this.setState({ title  }) }
                />
              </Item>
                <Textarea 
                style={styles.textareaStyle} 
                rowSpan={5} 
                placeholder="محتوى الرسالة"
                onChangeText={(message) => this.setState({ message  }) }
                />
            </Form> 
            
            <View style={styles.buttonStyle}>
            { this._renderButton() } 
            </View>
          
            
          </Content> 
        <Text style={styles.errorStyle}>{ this.props.error }</Text>
        <Text style={styles.successStyle}>{ this.props.success }</Text>   
      </Container> 

     
    );    
  }

}

const mapStateToProps = state => {
  //console.log(state);
  return {
    error: state.contact.error,
    loading: state.contact.loading,
    success: state.contact.success,
  }
}

export default connect(mapStateToProps, { ContactAction })(Contact);