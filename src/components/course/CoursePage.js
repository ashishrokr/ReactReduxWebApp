import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  componentDidMount(){
    this.props.actions.getAllCourses()
  }


  redirectToAddCoursePage(){
    this.props.history.push("/course")
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
          <button type="submit" onClick={this.redirectToAddCoursePage} className="btn btn-primary ">
            Add Course
          </button>
         <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}


CoursesPage.propTypes ={
  courses: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    courses:state.courses.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(courseActions,dispatch)
  };

}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
