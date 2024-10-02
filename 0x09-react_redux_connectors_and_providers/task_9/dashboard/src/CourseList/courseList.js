import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
    componentDidMount() {
        this.props.fetchCourses();
    }

    onChangeRow = (id, checked) => {
        if (checked) {
            this.props.selectCourse(id);
        } else {
            this.props.unSelectCourse(id);
        }
    }

    render() {
        const { listCourses } = this.props;
        return (
            <div>
                <h1>Course List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listCourses.map(course => (
                            <CourseListRow
                                key={course.id}
                                id={course.id}
                                isChecked={course.isSelected}
                                onChangeRow={this.onChangeRow}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listCourses: getListCourses(state),
});

const mapDispatchToProps = {
    fetchCourses,
    selectCourse,
    unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
