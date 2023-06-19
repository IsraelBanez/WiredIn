import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function RoS() {
  return (
    <div className='main-body2'>
        <NavPanel></NavPanel>
         <div className='content'>
        
        <p className='title-container'>
            Reality of Security and Encryption
            <br></br>
        </p>

        <p className='text-container'>
            When it comes to security and privacy, the problems needing to be solved are rarely black and white. There are many examples where choosing one solution leads to a tradeoff in certain benefits and makes choosing the right answer difficult. One example of this would be cryptography due to the complex nature of implementing an encryption / decryption algorithm to secure information.
        </p>

        <p className='text-container'>
            It would be nice if the Caesar Cipher was able to protect our data while it resides on the internet, however, this is far from the case. We want our data to remain safe, and that means the incorporated encryption algorithm should be robust enough to prevent most adversaries from breaking the encryption. “Breaking” an encryption occurs when a third party (a member not intended to receive information from group communications) learns of the decryption key or is able to discern the original text from the encrypted version. A third party can obtain the key by a variety of means, including but not limited to:
            <ul>
                <br></br>
                <li>Brute force: a decryption strategy used to break encrypted data by systematically trying every possibility for a key / password until the right one is chosen. It is typically used as a last resort, or when other decryption techniques are unsuccessful. It can be effective for breaking simple encryption schemes with short keys, but it becomes exponentially more difficult as the key length and complexity increase. To protect against brute force decryption attacks, strong encryption keys, unaffiliated passwords, and limiting the number of attempts allowed to enter a password should be used.</li>
                <br></br>
                <li>Social engineering: an attacking technique used to manipulate individuals into divulging sensitive information in a believable way. Social engineering attacks can take many forms, but the one that is most easily recognized is the phishing scam. This usually involves a convincing email sent to a specific individual that requests personal information or to follow a provided link that compromises their software security. Social engineering attacks are prevalent because they exploit human psychology and trust, and are therefore effective when executed properly.</li>
                <br></br>
                <li>Malware (Malicious Software): any type of software that is designed to negatively impact a computer system, network, or device. Malware comes in many different forms to improve its chances of infecting a device, including email attachments, software downloads, and malicious links.</li>
            </ul>
            Any encryption algorithm used should be brute force resistant and have as few vulnerabilities as possible. Social engineering and malware are a result of physical / human weaknesses, so they aren’t as important for the algorithm itself.
        </p>

        <p className='text-container'>
            The unfortunate reality in most scenarios is that it is not plausible to communicate with an unbreakable encryption. Given enough time or resources, a malicious party can find a way to break an encryption scheme and obtain the message. Due to this, we have to find the right balance between the robustness and practicality of our chosen encryption method. Oftentimes, the more secure a method is, the more resource intensive (time, power, memory) it becomes. An unspoken expectation we as consumers have when using the internet is that it should be quick to respond (and we tend to get frustrated quickly when it isn’t). Therefore, it is critical to determine how much performance we are willing to sacrifice to ensure that our information and data is protected by a worthwhile encryption scheme. Currently, most scenarios don’t deal with extremely sensitive data, so they can place more importance on quicker responses but a weaker algorithm. However, when the time comes, it is worth noting that one should be willing to accept that the price of a secure encryption scheme might come at the cost of the overall performance.
        </p>

        <p className='reference-container'>
            References:
            <br></br><br></br>
            [1] - <a target="_blank" href="https://ieeexplore.ieee.org/document/6781860">Cryptographic Application Trade-Offs</a>

            <br></br><br></br>
            [2] - <a target="_blank" href="https://eprint.iacr.org/2019/258.pdf">Time and Memory Trade Off</a>
        </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default RoS