import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

const CourseList = () => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="1" />
        <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell="2" />
        <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="3" />
      </tbody>
    </table>
  );
};

export default CourseList;