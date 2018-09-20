import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

export class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCourseFormSubmit = this.onCourseFormSubmit.bind(this)
  }

  componentDidMount(){
    if(this.props.courseId)
      this.props.actions.getCourseById(this.props.courseId)
    this.props.actions.getAuthorsDropdown()
  }


  onCourseFormSubmit(values){
    if(values.id){
        this.props.actions.updateCourseForm(values,this.props.history)
    }
    else {
      this.props.actions.createCourseForm(values,this.props.history)
    }
  }



  render() {
    return (
      <div>
      <CourseForm initialValues = {this.props.course} onCourseFormSubmit={this.onCourseFormSubmit}  authors={this.props.authorDropdown}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state,ownProps){

  let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''}
  if(ownProps.match.params.id && state.courses.courseById.length > 1){
    course = state.courses.courseById
  }
  let author = state.courses.authors.map(author => {
    return {
      value : author.id,
      text : `${author.firstName} ${author.lastName}`
    }
  }
   )
  return {
    courseId:ownProps.match.params.id,
    course : course,
    authorDropdown : author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
