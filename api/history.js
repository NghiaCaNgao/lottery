class History {
    // Add history
    static addHistory(roomID, currentUser, value, action) {
        const database = firebase.database();
        const baseRef = 'room/' + roomID + '/history/';
        const newPostKey = firebase.database().ref(baseRef).push().key;
        const dataRef = baseRef + newPostKey;

        const history = {
            id: Extension.generateID(),
            user: currentUser,
            action: {
                value,
                action,
            },
            timestamp: Date.now()
        }

        database.ref(dataRef).set(history);
    }
}

export default History;
