function whosOnline(friends) {
    const statusGroups = {
      online: [],
      offline: [],
      away: [],
    };
  
    for (const friend of friends) {
      const { username, status, lastActivity } = friend;
  
      if (status === 'online') {
        if (lastActivity <= 10) {
          statusGroups.online.push(username);
        } else {
          statusGroups.away.push(username);
        }
      } else {
        statusGroups.offline.push(username);
      }
    }
  
    for (const key in statusGroups) {
      if (statusGroups[key].length === 0) {
        delete statusGroups[key];
      }
    }
  
    return statusGroups;
  }