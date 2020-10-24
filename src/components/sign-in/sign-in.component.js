import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log(error);
		}
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name='password'
						type='password'
						label='password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
					/>
					<div className='button'>
						<Button type='submit' value='Submit Form'>
							Sign In
						</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
