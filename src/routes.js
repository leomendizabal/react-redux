import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';

import AboutContainer from './components/about/AboutContainer';
import HomeContainer from './components/home/HomeContainer';
import CoursesListContainer from './components/courses/CoursesListContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="courses" component={CoursesListContainer}/>
        <Route path="about" component={AboutContainer}/>
    </Route>
);