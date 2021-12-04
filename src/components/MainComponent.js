import Menu from './MenuComponent';
import Header from './HeaderComponent';

import { Component } from 'react';//Object destructuring
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { Switch,Route,Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';
const mapStateToProps=store=>{
  return {
    dishes:store.dishes,
    comments:store.comments,
    promotions:store.promotions,
    leaders:store.leaders,
    selectedDish:store.selectedDish
  }
}

class Main extends Component{

  constructor(props){
super(props);
 
}

ondishSelect(dishId)
{
    this.setState({selectedDish:dishId});
}
  
  

      render(){
          
const HomePage =() =>{
  return(
    
    <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
      promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
      // comments={this.state.comments.filter((comment)=>comment.featured)[0]}
    />
  );
}
const DishWithId=({match})=>{
  return(<>
  {/* //  alert("jj"); */}
    <DishDetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
      comment1={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
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
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
            <Route exact path="/contactus" component={Contact}/>
            <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
            <Route path='/menu/:dishId' component={DishWithId}/>
            <Redirect to="/hhome"/>
          </Switch> 
          <Footer/>
          </div>
        );
      
    }
    
} 
export default withRouter(connect(mapStateToProps)(Main)) ; 
     
    

