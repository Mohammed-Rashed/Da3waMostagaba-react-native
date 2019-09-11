import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Card, CardItem,
   Button, Content, Title ,Grid,Col,Thumbnail,Form,Item,Label,Input} from 'native-base';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { TimelineAction } from '../actions';
import { Spinner } from './Spinner'; 


class Timeline extends Component {
  
  constructor() {
    super()
    this.state = {
      entries:  [
        {
        id: 1,
        name: "أسماء الله الحسنى",
        photo: "http://da3wamstgb.com/uploads/category-1543158172-5bfab99cc077b.png"
        },
        {
        id: 2,
        name: "القران الكريم",
        photo: "http://da3wamstgb.com/uploads/category-1544835437-5c14516d15872.png"
        },
        {
        id: 3,
        name: "أدعية",
        photo: "http://da3wamstgb.com/uploads/category-1544857387-5c14a72b17032.png"
        },
        {
        id: 4,
        name: "اذكار الصباح",
        photo: "http://da3wamstgb.com/uploads/category-1544962582-5c164216b9e44.jpg"
        },
        {
        id: 5,
        name: "اذكار المساء",
        photo: "http://da3wamstgb.com/uploads/category-1544964404-5c1649346fb60.jpg"
        },
        {
        id: 6,
        name: "الدعوة المستجابة",
        photo: "http://da3wamstgb.com/uploads/category-1545442184-5c1d9388ac002.jpeg"
        }
        ],
    }
  }

    _renderItem ({item, index}) {
      return (
              <Grid style={styles.slide}  > 
                <Col style={styles.col}  onPress={() => alert(index)}>
                  <Text >{item.name}</Text>
                </Col>
                <Col  style={styles.col}>
                  <Thumbnail style={styles.image} square source={{ uri: item.photo }} />
                </Col>
                <View style={styles.border}></View>
              </Grid>
        
      );
    }
    handleScroll (event){
      console.log(event.nativeEvent.contentOffset.y);
     /*  if(event.nativeEvent.contentOffset.y >10){
        this.props.TimelineAction(false);
      }else{
        this.props.TimelineAction(true);
      } */
     }
     renderSearch(){
      console.log(this.props)

      if(this.props.searchBox){
        return(
          <View style={styles.search}>
              <Form style={{marginLeft:30,marginRight:30}}>
                <Item regular>
                  <Input />
                </Item>
              </Form>
          </View>
        )
      }
      return(
        <Text>no form</Text>
      )
     }
    render(){ 
      return (
        <Container>
        <Header>
          <Left style={{flex:1}}>  
            <Image source={require('./../images/logo_icon.png')} style={styles.image}/>
          </Left>
          <Body style={{flex:1}}> 
            <Title>18 جمادي الأخرة </Title>
          </Body>
          <Right style={{flex:1}}>
            <Button  style={{paddingRight:0}} onPress={() => this.props.navigation.navigate('Contact')} transparent>
              <Image source={require('./../images/call_us.png')} style={styles.imageCall}/>
            </Button>
          </Right> 
        </Header>
        {/* <View style={styles.search}>
              <Form style={{marginLeft:30,marginRight:30}}>
                <Item regular>
                  <Input />
                </Item>
              </Form>
        </View> */}
        <View style={[styles.slider,styles.searchHide]} >
              <Carousel 
                  ref={(c) => { this._carousel = c; }}
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  sliderWidth={500}
                  itemWidth={147}
                  // onSnapToItem={(index) => alert('a') }
	
                />
        </View>
        <Content style={styles.container} onScroll={this.handleScroll}>
     
  
       
          <Card style={styles.cardStyle}>
            <CardItem style={styles.CardItemStyle}>
              <Body style={styles.BodyStyle}>
                <Text style={styles.head}>الله</Text>
                <Text> 
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                </Text> 
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.cardStyle}>
            <CardItem style={styles.CardItemStyle}>
              <Body style={styles.BodyStyle}>
                <Text style={styles.head}>الرحمن</Text>
                <Text>
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                </Text> 
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.cardStyle}>
            <CardItem style={styles.CardItemStyle}>
              <Body style={styles.BodyStyle}>
                <Text style={styles.head}>الرحيم</Text>
                <Text>
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                </Text> 
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.cardStyle}>
            <CardItem style={styles.CardItemStyle}>
              <Body style={styles.BodyStyle}>
                <Text style={styles.head}>الملك</Text>
                <Text>
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                </Text> 
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.cardStyle}>
            <CardItem style={styles.CardItemStyle}>
              <Body style={styles.BodyStyle}>
                <Text style={styles.head}>الملك</Text>
                <Text>
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                  وهو إسم مشتقل من الفعل اله بالفتح ..
                </Text> 
              </Body>
            </CardItem>
          </Card>

        </Content>


        </Container>
      );
    }
  }
  
  
const mapStateToProps = state => {
  console.log(state);

  return {
    searchBox: state.timeline.searchBox,
  }
}

export default connect(mapStateToProps, { TimelineAction })(Timeline);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(238, 239, 242, 1)',
  },
  cardStyle: {
    borderRadius: 7,
    marginLeft:10,
    marginRight:10
  },
  CardItemStyle: { 
    borderRadius: 7,
  },
  BodyStyle :{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageCall: {
    width: 50,
    height: 50,
  },
  image: {
    width: 35,
    height: 35,
  },
  head: {
    fontWeight: 'bold'
  },
  image2: {
    width: '100%',
    height: 75,
  },
  slide :{
    borderRadius: 7,
    backgroundColor:'#fff',
    padding:5,
    position:'relative'

  },
  col:{
    justifyContent:'center',
    alignItems:'center',

  },
  
  slider:{
    paddingTop:10,
    paddingBottom:10,
    height:100,
    minHeight:100, 
    backgroundColor: 'rgba(238, 239, 242, 1)',
  },
  border:{
    position:'absolute',
      height:10,
      width:'100%',
      marginLeft:10,
      marginRight:10,
      bottom:0,
      left:0,
      right:0,
  },
  search:{
    backgroundColor: 'rgba(238, 239, 242, 1)',
  },
  searchHide:{
  }
});