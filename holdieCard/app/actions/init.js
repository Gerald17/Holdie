export function isLoadingSession(bool) {
    return {
        type: 'SESSION_IS_LOADING',
        isLoading: bool
    };
}

export function isValidSession(bool) {
    return {
        type: 'SESSION_IS_VALID',
        isValid: bool
    };
}

export function sessionVerified(session) {
    return {
        type: 'SESSION_VERIFIED',
        session
    };
}