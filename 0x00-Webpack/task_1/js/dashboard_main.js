import * as jQuery from 'jquery';
import 'lodash';

jQuery(document).ready(function($) {

    $('body').prepend('<p>Copyright - Holberton School</p>');
    $('body').prepend('<p id="count"></p>');
    $('body').prepend('<button>Click here to get started</button>');
    $('body').prepend('<p>Dashboard data for the students</p>');
    $('body').prepend('<p>Holberton Dashboard</p>');

    let count = 0;
    function updateCounter(e) {
	count += 1;
	$('#count').text(`${count} clicks on the button`);
	console.log('loaded')
    }

    _.debounce(updateCounter, 5);
    $('button').click(updateCounter);
})
