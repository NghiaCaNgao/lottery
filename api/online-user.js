class OnlineUser {
    // Search onlineUser
    static async findOnlineUser(roomID, email) {
        const database = firebase.database();
        const baseRef = 'room/' + roomID + '/onlineUsers/';
        let emailExist = false;

        try {
            const data = await database.ref(baseRef).get();
            if (data.exists()) {
                const listUsers = data.val();
                for (const item in listUsers)
                    if (listUsers[item].email === email) emailExist = item;
            }
            return emailExist;
        } catch (error) {
            console.log(error);
        }
    }

    // Add an online User
    static addOnlineUser(roomID, currentUser) {
        const database = firebase.database();
        const baseRef = 'room/' + roomID + '/onlineUsers/';

        const newPostKey = firebase.database().ref(baseRef).push().key;
        const dataRef = baseRef + newPostKey;
        database.ref(dataRef).set(currentUser);
    }

    // Remove an online User
    static removeOnlineUser(roomID, userID) {
        const database = firebase.database();
        const dataRef = 'room/' + roomID + '/onlineUsers/' + userID;
        database.ref(dataRef).remove();
    }

    // Remove an online User when disconnect
    static removeOnlineUserOnDisconnect(roomID, userID) {
        const database = firebase.database();
        const dataRef = 'room/' + roomID + '/onlineUsers/' + userID;
        database.ref(dataRef).onDisconnect().remove();
    }
}

export default OnlineUser;