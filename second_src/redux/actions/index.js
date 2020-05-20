const addUser = ( user ) => ({
    type: 'ADD_USER',
    data: { user }
});

const deleteUser = ( id ) => ({
    type: 'DELETE_USER',
    key: { id }
});
