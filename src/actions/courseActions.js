import * as restApi from "../components/common/restApi"
import config from "../config"
import {reset} from "redux-form"


export function getAllCourses(){
  return (dispatch)=>{
    let url = `${config.backend.url}/courses`
  return restApi.GET(url)
        .then((response)=>{
          console.log(response)
            dispatch(saveCourses(response))
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}


export function getCourseById(courseId){
  return (dispatch)=>{
    let url = `${config.backend.url}/courses/${courseId}`
  return restApi.GET(url)
        .then((response)=>{
            dispatch(saveCourseById(response))
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}



export function createCourseForm(values,history){
  return (dispatch)=>{
    let url = `${config.backend.url}/courses`
  return restApi.POST(url,values)
        .then((response)=>{
          history.push("/courses")
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}

export function updateCourseForm(values,history){
  return (dispatch)=>{
    let url = `${config.backend.url}/course/${values.id}`
  return restApi.PUT(url,values)
        .then((response)=>{
          history.push("/courses")
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}

export function getAuthorsDropdown(){
  return (dispatch)=>{
    let url = `${config.backend.url}/authors`
  return restApi.GET(url)
        .then((response)=>{
            dispatch(saveAuthors(response))
        })
        .catch((error)=>{
          console.log(error)
        })
  }
}

 function saveAuthors(response){
  return {
    type:'SAVE_AUTHORS',
    payload : response

  };
}

 function saveCourseById(response){
  return {
    type:'SAVE_COURSE_BY_ID',
    payload : response[0]

  };
}

 function saveCourses(response){
  return {
    type:'SAVE_COURSES',
    payload : response

  };
}


export function resetCourseForm(){
  return (dispatch)=>{
      dispatch(reset("CourseForm"))
  }

}
