import * as jQuery from 'jquery';
import { debounce } from 'lodash';

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
    }

    debounce(updateCounter);
    $('button').click(updateCounter);
})
