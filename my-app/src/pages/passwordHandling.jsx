import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function passwordHandling() {
  return (
    <div className="main-body2">
        <NavPanel></NavPanel>
        <div className='content'>
        
        <br></br>
        <p className='title-container'>
            Password Handling
            <br></br>
        </p>
        
        <p className='text-container'>
            One of the most important practices when it comes to computer security is password handling and management. There are many reasons for this, but the primary one is that the inherent nature of using passwords as a security measure is flawed. Humans are predictable and this usually means their passwords are as well. When a password is short and/or easy to guess, it only makes attacks easier for malicious parties because it narrows down the amount of possible passwords to try.
            <br></br><br></br>
            A common next question is: “Well, why don’t companies enforce strict password regulations?”. Unfortunately, this too has drawbacks. The harder a password is to guess, the more inclined users are to take even worse measures to remember their chosen password, such as writing it down on a sticky note next to their desk. Achieving a balance between a password that is memorable while also being hard to crack by evil adversaries is difficult to find.
        </p>

        <p className='text-container'>
            Password handling has been a recurring issue within many aspects of business and personal life. With this, there exist some techniques that can bolster typical password practices. One such technique is Multi-Factor Authentication (Add some link to the 2 factor page here), which creates another layer of identification for a user to pass for them to successfully login. 
            <br></br><br></br>
            Another technique is creating a passphrase instead of a password. The main differences between these two are the length and content. Passphrases are considered more secure because they tend to include multiple unrelated words and numbers as a password instead of something related to a given user. These passphrases can be generated on a large number of free websites, and make this solution practical as well as accessible. 
            <br></br><br></br>
            The main goal when creating one is to make sure that the collection of words are truly unrelated, but can be vaguely linked together by the user. One common tip to help with this is creating a story that connects each word. For example, if the passphrase is TuesdaySquareSwishWrapper, a user could visualize a square-ish swish symbol that appears on a food wrapper only on Tuesdays. Passphrases can have an initial rough transition, because these stories aren’t the easiest to remember. However, once the unfamiliarity wears off, passphrases become a much better method of security compared to passwords. 
        </p>

        <p className='text-container'>
            A third and arguably the best technique for ensuring password integrity is password managers. Password managers are typically defined as a program or software that stores a user’s login information for a wide array of websites in order to decrease time spent at the login page, remove the hassle of remembering multiple different passwords, and providing more robust, random passwords as an alternative to relying on the user to come up with one. Their appeal mostly comes from the last two benefits listed because users will no longer have to worry about creating a strong enough password, and once one has been created, no longer have to remember which password relates to which website/account. There are a countless number of password managers available currently, and most work inside the browser directly, creating a seamless and secure login experience.
        </p>

        <p className='text-container'>
            One important note for password managers (and anything security related), is that there are usually a set of pros and cons for using one option over another. In this case, password managers provide many benefits, but they are also a prime target for data breaches given the importance and volume of the data they hold. If by some chance, a password handling service is successfully attacked, every user of that service is now at risk. There are multiple examples of this happening since the advent of password managers, so it is important to know and understand the slight risk that comes with keeping all passwords stored in one location. In the scenario where one’s login information is compromised, it is extremely recommended to immediately change the passwords to any and all important websites to avoid identity theft and fraud.
        </p>

        <p className='reference-container' id='container'>
            References:
        </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default passwordHandling