import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



function DishToDisplay({ dish }) {
    // alert(dish.name)
    if (dish != null) {
        return (
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
    else {
        return (
            <div></div>
        )
    }
}
//  componentDidUpdate()//its shows when component did updated
//  {
//      console.log('Disdetail componnt Comments Invoked');
//  }

function RenderComments({ comments, postComment }) {
    //  comments.push(postComment);    
    if (comments == null) {
        return (<div></div>)

    }
    else {
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
        )
    }
}


const DishDetail = (props) => {




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
                 
                    <RenderComments comments={props.comment1} postComment={props.postComment}
                        dishId={props.dish.id} ></RenderComments>;
                           <SubmitButton postComment={props.comment1}/>


                        

                </div>
            </div>)
    }
}


export default DishDetail;
class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModelOpen: false
        };
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        console.log(values)
        this.toggleModal();
      
        alert(values.dishId + "  " + values.rating + "  " + values.author + "  " + values.comment);
     //   const cmnts=this.comment1.push({this.dishId,this.comment,values.author,Date()});
        <RenderComments />
        //this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="Rating" 
                                        className="form-control">
                                        <option value="1" selected>1</option>
                                        
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 1, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }

}