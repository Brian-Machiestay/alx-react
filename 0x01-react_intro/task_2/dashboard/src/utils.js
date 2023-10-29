function getFullYear() {
    const date = new Date();
    console.log(date.getFullYear());
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) return 'Holberton School';
    return 'Holberton School main dashboard';
}

function getLatestNotification() {
    return(
        '<strong>Urgent requirement</strong> - complete by EOD'
    )
}

export { getFooterCopy, getFullYear, getLatestNotification };
