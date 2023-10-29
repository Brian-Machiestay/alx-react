function getFullYear() {
    const date = new Date();
    console.log(date.getFullYear());
    return date.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex) return 'Holberton School';
    return 'Holberton School main dashboard';
}

export { getFooterCopy, getFullYear };
