import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';

class CoursesListContainer extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this); //is better doing the binding on the constructor rather than on the render function
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        console.log('CoursePage Component: dispatching action for creating the course '+ this.state.course.title);
        //this.props.dispatch(courseActions.createCourse(this.state.course)); //verbose way, use mapDispatchToProps instead!
        this.props.actions.createCourse(this.state.course);
        this.state.course.title = "";
    }

    render(){
        return(
            <CoursesList
                courses={this.props.courses}
                actions={this.props.actions}
                onClickSave={this.onClickSave}
                onTitleChange={this.onTitleChange}
                courseTitle={this.state.course.title}
            />
        );
    }
}

CoursesListContainer.propTypes = {
    //dispatch: PropTypes.func.isRequired,              //this is required if we dont use mapDispatchToProps, once we use mapDispatchToProps
    courses: PropTypes.array.isRequired,                //the connect function doesn't inject the dispatch any more
    actions: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){              //any time the store is updated, mapStateToProps will be called (sync our props)
    return{
        courses: state.courses                          //state.courses is the variable we defined before on the rootReducer
    };
}

function mapDispatchToProps(dispatch){                  //allow us to have all the functions as props inside the Component
    return ({
        //createCourse: function(course){                //too verbose, use bindActionCreators instead!
        //    dispatch(courseActions.createCourse(course));
        //}
        actions: bindActionCreators(courseActions, dispatch)
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesListContainer);   //connect injects a dispatch if we dont define mapDispatchToProps