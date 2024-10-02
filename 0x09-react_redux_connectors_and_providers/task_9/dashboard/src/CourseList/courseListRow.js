import React from 'react';

const CourseListRow = ({ id, isChecked, onChangeRow }) => (
    <tr>
        <td>{id}</td>
        <td>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => onChangeRow(id, e.target.checked)}
            />
        </td>
    </tr>
);

export default CourseListRow;
