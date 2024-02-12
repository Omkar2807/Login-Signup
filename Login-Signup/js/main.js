let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link'),
    signUpCompanyLink = document.querySelector('.link .signupcompany-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup', 'animated-signupcompany'); // Remove 'animated-signupcompany'
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin', 'animated-signupcompany'); // Remove 'animated-signupcompany'
});

signUpCompanyLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signupcompany');
    wrapper.classList.remove('animated-signup', 'animated-signin'); // Remove 'animated-signup' and 'animated-signin'
});
