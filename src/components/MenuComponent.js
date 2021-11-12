import React from 'react';
import { Link } from 'react-router-dom';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
function RenderDish(dish)
{
    if(dish!=null)
    {
        return (
            <Card>
                <CardImg width="100%" src={dish.image}/>
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.CardText}</CardText>
                </CardBody>
            </Card>
        )
    }
    else{
        <div></div>
    }
}
function RenderMenuItem({dish,onClick})
{
    return(
                        <Card  >
                        <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={dish.image}/>
                          
                           <CardImgOverlay body className="col-md-12">
                               <CardTitle heading>{dish.name}</CardTitle>
                               <p style={{color:'red'}}>{dish.description}</p>
                           </CardImgOverlay>
                           </Link>
                       </Card>
    );
}
   
  
  

    const Menu=(props)=>{
        const menu=props.dishes.map((dish)=>{
            return(
                   <div key={dish.id} className="col-12 col-md-5 m-1">
                     <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>  
                   </div> 
            );
        });
        return(
<div className="container">
<div className="row">
<div className="row">
    <Breadcrumb>
        <BreadcrumbItem><Link to='/home'></Link></BreadcrumbItem>
        <BreadcrumbItem active>Menu</BreadcrumbItem>
    </Breadcrumb>
    <div className="col-12">
        <h3>Menu</h3>
    </div>
</div>
    {menu}

</div>
<div className="row">

</div>

</div>
        );
    }
   

export default Menu;