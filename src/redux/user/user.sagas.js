import { auth,createUserProfileDocument, googleProvider  } from "../../components/firebase/firebase.utils";

import { takeLatest, put, call, all} from "redux-saga/effects";
import userActionTypes from "./user.types";
import { googleSignInFailure, googleSignInSuccess, emailSignInFailure, emailSignInSuccess} from "./user.actions";

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data()
            })
        )
    } catch (error) {
        yield put(
            googleSignInFailure(error)
        )
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({payload:{email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data()
            })
        )
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}
export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}