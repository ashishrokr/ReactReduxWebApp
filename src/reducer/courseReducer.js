
const initialState = {courses :[],courseById:[],authors:[]}

export default function courseReducer(state=initialState,action){
   switch (action.type) {
     case 'SAVE_COURSES':
         return {...state,courses : action.payload}
     case 'SAVE_COURSE_BY_ID':
         return {...state,courseById : action.payload}
     case 'SAVE_AUTHORS':
        return {...state,authors : action.payload}
     default:
       return state;

   }


}
