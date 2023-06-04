import * as jQuery from 'jquery';
import { debounce } from 'lodash';

jQuery(document).ready(function($) {
    $('<p>Holberton Dashboard</p>').insertBefore('script');
    $('<p>Dashboard data for the students</p>').insertBefore('script');
    $('<button>Click here to get started</button>').insertBefore('script');
    $('<p id="count"></p>').insertBefore('script');
    $('<p>Copyright - Holberton School</p>').insertBefore('script');

    let count = 0;
    function updateCounter(e) {
	count += 1;
	$('#count').text(`${count} clicks on the button`);
    }

    $('button').click(debounce(updateCounter));
})
