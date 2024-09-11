import { List } from 'immutable';

export function getListObject(array) {
    return List(array);
}
export function addElementsToList(list, element) {
    return list.push(element);
}
