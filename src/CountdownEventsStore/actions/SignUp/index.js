/**
 * Created by Raphael Karanja on 2019-02-27.
 */    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((resp) => {
        return dispatch(createUserSuccess(resp));
    })
    .catch((error) => disptach(createUserFail));