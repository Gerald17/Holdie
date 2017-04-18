export function isLoadingSession(state = false, action) {
    switch (action.type) {
        case 'SESSION_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function session(state = {}, action) {
    switch (action.type) {
        case 'SESSION_VERIFIED':
            return action.session;
        default:
            return state;
    }
}