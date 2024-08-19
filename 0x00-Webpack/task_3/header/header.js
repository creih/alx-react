// modules/header/header.js
import $ from 'jquery';
import './header.css';

console.log('Init header');

$('body').prepend('<div id="logo"></div>');
$('body').prepend('<h1>Holberton Dashboard</h1>');