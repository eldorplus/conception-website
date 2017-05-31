import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyARbegGKdh-lcJHrjNamGVxLepbaDJrjn0',
    authDomain: 'conception-e3a6c.firebaseapp.com',
    databaseURL: 'https://conception-e3a6c.firebaseio.com',
    projectId: 'conception-e3a6c',
    storageBucket: 'conception-e3a6c.appspot.com',
    messagingSenderId: '892528783339'
};

Firebase.initializeApp(firebaseConfig);

export const Auth = Firebase.auth();

/**
 *
 * @param dbname
 * @return {firebase.database.Reference|!firebase.database.Reference}
 * @constructor
 */
export const Database = (dbname) => {
    return Firebase.database().ref(dbname)
};
export default Firebase;