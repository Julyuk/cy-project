export const textData={
    baseUrl:`http://localhost:3000/`,
    cypressUrl:`https://www.cypress.io/`,
    SignUpNoAccount:`Don't have an account? Sign Up`,
    KatharinaUsername:`Katharina_Bernier`,
    UsernameIsRequired:`Username is required`,
    passwordIsMorethan4Char:`Password must contain at least 4 characters`,
    invalidUsernameOrPwd:`Username or password is invalid`,
    buttonDisabledClass:`Mui-disabled`,
}

export const myAccountdata={
    heading:`User Settings`,
    inputFieldsText:['firstName','lastName','email','phoneNumber']
    
    
}

export const profiles=[
    {
    userType:`valid user`,
    firstName:`Elena`,
    lastName:`Petrenko`,
    email:`elena.petr@gmail.com`,
    phoneNumber:`123456`
}, 
{
    userType:`invalid user with all empty fields`,
    firstName:``,
    lastName:``,
    email:``,
    phoneNumber:``
}, 
{  
    userType:`user with no first name`,
    lastName:`Petrenko`,
    email:`elena.petr@gmail.com`,
    phoneNumber:`123456`},
    
{  
    userType:`user with no last name`,
    firstName:`Elena`,
    email:`elena.petr@gmail.com`,
    phoneNumber:`123456`},
{  
    userType:`user with no email`,
    firstName:`Elena`,
    lastName:`Petrenko`,
    phoneNumber:`123456`},
{  
    userType:`user with no phone number`,
    firstName:`Elena`,
    lastName:`Petrenko`,
    phoneNumber:`123456`},
    {
        userType:`user with invalid email`,
        firstName:`Elena`,
        lastName:`Petrenko`,
        email:`elena.petr`,
        phoneNumber:`123456`
    }, 
    {
        userType:`user with invalid phone number`,
        firstName:`Elena`,
        lastName:`Petrenko`,
        email:`elena.petr`,
        phoneNumber:`elena18`
    }, 
]

export const users=[
{
    username:`Katharina_Bernier`,
    password:`s3cret`,
    usertype:`valid user`,
    isValid:true,
},
{
    username:`Katharina_Bernier`,
    usertype:`invalid user with no password`,
    isValid:false,
},
{
    password:`s3cret`,
    usertype:`invalid user with no name`,
    isValid:false,
}]

export const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '~'];