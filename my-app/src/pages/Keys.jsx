import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'
import symmetric from '../symmetric-key.png'
import asymmetric from '../asymmetric-key.png'


function Keys() {
  return (
    <div className="main-body2">
        <NavPanel></NavPanel>
        <div className='content'>
            <br></br>
            <p className='title-container'>
                Encryption Keys: Notable Differences
            </p>

            <p className='text-container'>
                <div class="img-brand" href="" style={{margin: "auto"}}>
                    <img src={symmetric} alt="Symmetric Key Encryption"width="650" height="350"></img>
                    [1] - Visualization of Symmetric Key Encryption
                </div>
                Symmetric Key Encryption:
                <br></br>
                Symmetric key encryption, also known as secret key encryption, is a technique where the same key is used for both the encryption and decryption processes. The key is known only to the authorized parties involved in the communication. In this scheme, the sender encrypts the message using the secret key, and the receiver decrypts it using the same key. Symmetric key encryption is generally easier to visualize. In the above infographic, each party can use the same key to encrypt and decrypt. Although this process seems simple and effective, it can provide a few vulnerabilities, which will be discussed later.
                <br></br>
                Important qualities about symmetric key encryption:
                <ul>
                    <li>Efficiency/Response Time: Symmetric key encryption algorithms are generally faster and more computationally efficient. This can be attributed to shorter key lengths, easier key modifying operations, and less key management.</li>
                    <li>Security: The security of symmetric key encryption relies heavily on the secrecy of the key. If an attacker gains access to the key, they can decrypt the encrypted data. This aspect becomes even more paramount when considering that the key is vulnerable from both sides, encryption and decryption. Since the keys are identical, a symmetric key provides third parties extra opportunities to try and obtain it.</li>
                    <li>Key Permission: As the same key is used for encryption and decryption, the challenge lies in securely distributing the key to the intended recipients. Distributing keys can become much harder to do for a multitude of reasons. Typically, if two parties are wanting to communicate over the internet, it suggests a significant amount of distance between them, making physical communication to distribute keys unfavorable. The problem that arises from this is how do the parties then find a way to properly confirm the keys are the same without giving others access to it? The internet, the place they originally wanted to make more secure for themselves, is one of their few options to even share the key.</li>
                </ul>
                Examples of symmetric key encryption algorithms include Advanced Encryption Standard (AES), Data Encryption Standard (DES), and Triple DES (3DES).
            </p>

            <p className='text-container'>
                <div class="img-brand" style={{margin: "auto"}}>
                    <img src={asymmetric} alt="Caesar Cipher"width="650" height="350"></img>
                    [1] - Visualization of Asymmetric Key Encryption
                </div>
                Asymmetric Key Encryption:
                <br></br>
                Asymmetric key encryption, also known as public key encryption, is a method that uses two distinct keys: a public key and a private key. The public key is freely available and used for encryption, while the private key is kept secret and used for decryption. The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.
                <br></br>
                It’s important to note that public key encryption impacted the rise of the internet and its use worldwide for multiple reasons. Mainly, aspects like robust communication and securing online shopping/e-commerce. Without asymmetric keys, some of these wouldn’t be available, which would have made the internet much less appealing due to the lack of security.
                <br></br>
                Important qualities about asymmetric key encryption:
                <ul>
                    <li>Key Pairing: Asymmetric key encryption involves a pair of keys: the public key and the private key. The public key is used to encrypt data, and the corresponding private key is used to decrypt it. The key separation makes visualization more difficult and the overall process more complicated, but it provides extra protection for both parties by securing their private keys from being shared.</li>
                    <li>Security: Public key provides mechanisms for secure communication, digital signatures, and authentication. It allows anyone to encrypt a message using the recipient's public key, ensuring only the recipient with the corresponding private key can decrypt it.</li>
                    <li>Key Permission: The key distribution problem is much simpler with public key when compared to symmetric key encryption. The public key can be freely distributed, meaning anyone can encrypt a message for the intended recipient without requiring a secure channel for key exchange.</li>
                </ul>
                Examples of asymmetric key encryption algorithms include RSA (Rivest-Shamir-Adleman) and Diffie-Hellman Key Exchange.
            </p>

            <p className='text-container'>
                Difference between Symmetric and Asymmetric Key Encryption:
                <br></br>
                In practice, symmetric and asymmetric key encryption are often used in combination. For example, in secure communication (email, instant messaging, etc.) protocols like Transport Layer Security (TLS), symmetric key encryption is used for efficient bulk encryption of data, while asymmetric key encryption is used for secure key exchange and authentication.
                <br></br>
                In a situation where one might need to choose between the two schemes, some key points should be used to differentiate them and help decide which one fits a scenario best. Symmetric key encryption is generally faster and more efficient for encrypting and decrypting large amounts of data, while asymmetric key encryption provides mechanisms for secure communication, digital signatures, and authentication.
            </p>

            <p className='reference-container'>
                [1] https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences
            </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Keys