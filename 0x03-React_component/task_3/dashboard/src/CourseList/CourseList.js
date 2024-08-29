import React from 'react';
import './CourseList.css';

const CourseList = () => {
  return (
    <table id="CourseList">
      <thead>
        <tr>
          <th>Available courses</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ES6</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Webpack</td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>React</td>
          <td><input type="checkbox" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default CourseList;