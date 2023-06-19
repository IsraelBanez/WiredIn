import React from 'react'
import '../styles/info.css'
import cipher from '../cipher.png'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function Encryption() {
  return (
    <div className='main-body2'>
        <NavPanel></NavPanel>
         <div className='content'>
        
        <p className='title-container'>
            Encryption and Decryption Overview
            <br></br>
        </p>

        <p className='text-container'>
            With the sheer amount of digital information there must be a way to secure it, or at least deter people from wanting to take it. One way this is done is through encryption and decryption. Encryption is the process of taking normal-oriented information, named plaintext, and converting it to a secret text that becomes indecipherable to those without the key to reverse the conversion. The process of reversing usually involves an important piece of protected data called a key to prevent others from knowing what the message is.
        </p>

        <p className='text-container'>
            One simple example of this is a Caesar Cipher. This cipher is one of the oldest and well known ciphers due to it being known as the cipher that Julius Caesar used to protect his personal communications. Caesar ciphers encrypt the original message by shifting each letter in the message by a set amount of the alphabet. If the first letter is an “b” and the shift amount is set to 3, then the letter would be moved from b –(1)-{'>'}  c –(2)-{'>'} d –(3)-{'>'} e. 
            <br></br><br></br>
            <a class="img-brand" style={{margin: "auto"}}>
                <img src={cipher} alt="Caesar Cipher"width="650" height="300"></img>
                [1] - Example of a Caesar Cipher Transformation
            </a>
            <br></br>
            The shift transformation is performed on the entire message, rendering the initial message as seemingly unrelated and unreadable. To decrypt, just undo the transformation by shifting the opposite direction in the alphabet by the same amount. All members who plan to communicate should agree on a common shift amount, so that when one sends an encrypted message, they know how to decrypt the ciphertext to obtain the intended message.
        </p>

        <p className='text-container'>
            The Caesar Cipher isn’t the only encryption method. It is often used as an example due to its short encryption process, but modern, complicated times call for modern and complicated solutions. Different algorithms, how algorithms are chosen, and some applications of encryption are discussed in the sections below.
            <ul>
                <li>Link to subpage about reality of encryption</li>
                <li>Link to subpage about different types of encryption algorithms</li>
            </ul>
            <br></br>

            It’s great to know what encryption is, but what exactly is it used for? Due to many aspects of our lives being digital, there is an inherent need for privacy and protection of that data. Encryption and decryption serve as the wall that keeps out most intruders while still providing access to the intended audiences. Some important examples of encryption in daily life include: 
            
            <ul>
                <li>Secure Chat: Encryption is used to secure online communication like messaging apps, and social media platforms. It establishes a channel in which the sender and intended recipient(s) can send and receive messages and averts unauthorized third parties. Email can also be secured, but as of now, most only provide the feature as an additional setting that must be turned on, instead of being enabled by default.</li>
                <li>E-Commerce: Protecting financial transactions and personal information during online shopping and banking is also done with encryption. Credit card info, bank account numbers, and other sensitive data are all kept confidential. The simple and painless online shopping experience we know today is largely due to web browsers’ use of cookies. Learn more about their impact <a href='/Browsers'>here</a>.</li>
                <li>Cloud File Storage / Sharing: Cloud-based storage is a critical aspect for housing photos, videos, documents, and other important files without having to store them directly on a device or drive. Encryption is especially necessary in this case because storage can seem appealing to malicious attackers due to the high volume of content that would be accessible to them if they are able to break in. Encrypting files while sharing or collaborating with others is essential to upholding their privacy and security because more than one person will have access to them.</li>
                <li>Virtual Private Networks (VPNs): VPNs are used to protect internet traffic and ensure that online activity cannot be tracked or monitored by third parties. This is mainly done through encryption, and disguising internet traffic. The traffic is usually described as coming from a different geographical location to assist in protecting the user of the VPN. Check this <a href="/VPN">page</a> for more information about VPNs.</li>
            </ul>

        </p>

        <p className='reference-container'>
            References:
            <br></br><br></br>
            [1] - <a href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/" target="_blank">Geeks For Geeks</a>
            <br></br><br></br>
            [2] - <a href="https://trilightzone.org/privacy-articles/index.html" target="_blank">Cryptography and Privacy</a>
            <br></br><br></br>            
            [3] - <a href="https://ronanthewriter.com/applications-of-cryptography-in-daily-life/" target="_blank">Applications of Cryptography</a>
            <br></br><br></br>
            [4] - <a href="https://messengernews.fb.com/2021/08/13/messenger-updates-end-to-end-encrypted-chats-with-new-features/" target="_blank">Facebook Messenger</a>
            
        </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Encryption