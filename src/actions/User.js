export default class User {
    static getActionCurrent(user) {
        return { type: 'SET_CURRENT_USER_ID', payload: user._id }
    }
}