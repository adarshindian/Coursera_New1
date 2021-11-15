import Menu from './MenuComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';
import { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
class Main extends Component{

  constructor(props){
super(props);
this.state={
  dishes:DISHES,
  comments:COMMENTS,
  promotions:PROMOTIONS,
  leaders:LEADERS,
  selectedDish:null
};  
}

ondishSelect(dishId)
{
    this.setState({selectedDish:dishId});
}
  
  

      render(){
          
const HomePage =() =>{
  return(
    
    <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
      promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
      // comments={this.state.comments.filter((comment)=>comment.featured)[0]}
    />
  );
}
const DishWithId=({match})=>{
  return(<>
  {/* //  alert("jj"); */}
    <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      comment1={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
    /></>
  )
}
        return (
          <div >
     <Header/>
          {/* <Menu dishes={this.state.dishes}onClick={(dishId)=>this.ondishSelect(dishId)}></Menu>
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id==this.state.selectedDish)[0]}/> */}
          <Switch>
            <Route path="/hhome" component={HomePage}/> 
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Route exact path="/contactus" component={Contact}/>
            <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
            <Route path='/menu/:dishId' component={DishWithId}/>
            <Redirect to="/hhome"/>
          </Switch> 
          <Footer/>
          </div>
        );
      
    }
    
} 
export default Main; 
    
    

