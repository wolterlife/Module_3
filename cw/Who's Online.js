const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if (status === 'online' && e.lastActivity > 10) status = 'away';
        if (output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}