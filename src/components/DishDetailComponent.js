import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';




    function DishToDisplay({dish})
     {
        // alert(dish.name)
            if(dish!=null)
            {
                return(
                    <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle > {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>        
                );
            }
            else{
                return (
                    <div></div>
                )
            }
     }
    //  componentDidUpdate()//its shows when component did updated
    //  {
    //      console.log('Disdetail componnt Comments Invoked');
    //  }
   function  RenderComments({comments}){
        if (comments == null) {
            return (<div></div>)
        }
        else{
        const cmnts = comments.map(comment => {
           
            return (
               
                <li key={comment.dishId}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )}
    }


   const DishDetail=(props)=>{
      

       
        
        if (props.dish != null) {
         

       
        return (
            <div className="conatiner">
            <div className="row">
    <Breadcrumb>
        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
    </Breadcrumb>
    <div className="col-12">
        {/* <h3>{props.dish.name}</h3> */}
        <h5>{props.comment1.id}</h5>
    </div>
</div>
            <div className='row'>
            <DishToDisplay dish={props.dish} ></DishToDisplay>;
      <RenderComments comments={props.comment1}></RenderComments>;

            </div>
            </div> )}
    }


export default DishDetail;