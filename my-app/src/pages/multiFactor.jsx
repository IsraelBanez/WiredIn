import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function multiFactor() {
  return (
    <div className='main-body2'>
      <NavPanel></NavPanel>
      <div className='content'>
        <p className='title-container'>
            What is Multi-Factor Authentication?
            <br></br>
        </p>

        <p className='text-container'>
          <b>What is 2FA and Why Do You Need It?</b>
          <br></br>
          Have you ever heard of 2FA? If not, you're not alone! Two-factor authentication (a specified version of MFA), is a simple but powerful security measure that can help protect your online accounts from hackers and cybercriminals. In this blog post, we'll explain what 2FA is, why you should use it, and how it works.
        </p>

        <p className='text-container'>
          2FA is a security measure that requires two forms of identification before granting access to an online account. Typically, these two forms of identification are:
          <br></br>
          <ol>
            <li>Something you know: This is usually a password, PIN, or security question.</li>
            <li>Something you have: This is usually a physical device, such as a smartphone, that generates a unique code for each login attempt.</li>
            <li>Something you are: This is usually biometric data, such as your fingerprint, face, or iris.</li>
          </ol>
          <br></br>
          By requiring two forms of identification, 2FA makes it much harder for hackers to gain access to your online accounts. Even if a hacker manages to steal your password, they won't be able to log in without the second factor of authentication.
        </p>

        <p className='text-container'>
          <b>Why do you need 2FA?</b>
          <br></br>
          If you're like most people, you probably use the same password for multiple online accounts. This means that if a hacker manages to steal your password from one account, they can potentially gain access to all of your other accounts as well. 2FA can help protect against this by adding an additional layer of security.
          <br></br><br></br>
          <b>How does 2FA work?</b>
          <br></br>
          When you enable 2FA on an online account, you will typically be asked to provide a second form of identification. This might involve downloading an authentication app to your smartphone, or receiving a text message with a unique code each time you log in. Once you've provided the second form of identification, you will be granted access to your account.
        </p>

        <p className='text-container'>
          Here's an example of how 2FA might work:
          <br></br><br></br>
          <ol>
            <li>You go to log in to your email account.</li>
            <li>You enter your password as usual.</li>
            <li>Instead of being immediately granted access, you are prompted to provide a second form of identification.</li>
            <li>You open an authentication app on your smartphone, which generates a unique code for this login attempt.</li>
            <li>You enter the code into the login prompt on your computer.</li>
            <li>You are granted access to your email account.</li>
          </ol>
          <br></br>
          By requiring this second form of identification, 2FA makes it much harder for hackers to gain access to your online accounts.
          <br></br><br></br>
          In conclusion, 2FA is a simple but powerful security measure that can help protect your online accounts from hackers and cybercriminals. By requiring two or more forms of identification, 2FA makes it much harder for hackers to gain access to your accounts. If you're not already using 2FA, we strongly recommend enabling it on all of your important online accounts.
        </p>


      </div>
      <Footer></Footer>
    </div>
  )
}

export default multiFactor