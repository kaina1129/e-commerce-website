import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBJLIrax2LlZf8bqHnYDCIx270b2aDSmDs',
	authDomain: 'e-commerce-website-4db21.firebaseapp.com',
	databaseURL: 'https://e-commerce-website-4db21.firebaseio.com',
	projectId: 'e-commerce-website-4db21',
	storageBucket: 'e-commerce-website-4db21.appspot.com',
	messagingSenderId: '739727329936',
	appId: '1:739727329936:web:c8f6edfaaeff71c0042615',
	measurementId: 'G-2P450S0MTK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		// if the user doesnt exist, create new user
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
