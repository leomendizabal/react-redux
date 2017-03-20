import React, {PropTypes} from 'react';

class CoursesList extends React.Component{
    constructor(props, context){
        super(props, context);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" placeholder="Course Name"
                       onChange={this.props.onTitleChange}
                       value={this.props.courseTitle}/>

                <input type="submit" value="Save"
                       onClick={this.props.onClickSave}/>
            </div>
        );
    }
}

//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesList);
CoursesList.propTypes = {
    //dispatch: PropTypes.func.isRequired,              //this is required if we dont use mapDispatchToProps, once we use mapDispatchToProps
    courses: PropTypes.array.isRequired,                //the connect function doesn't inject the dispatch any more
    actions: PropTypes.object.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    courseTitle: PropTypes.string.isRequired,
    onClickSave: PropTypes.func.isRequired

};


export default CoursesList;