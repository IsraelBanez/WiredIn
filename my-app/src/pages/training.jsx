import React, { Component, useRef, useState, useEffect  } from 'react';
import NavPanel from '../components/NavPanel'
import '../styles/training.css'
import { getDatabase, ref, set, update } from "firebase/database";
import { UserAuth } from '../context/AuthContext';


const topics = ["CIA", "Browser", "Tor",
              "Password Handling", "Anti-Virus", "Encryption",
              "Malware", "Reality of Security", "Keys", "Machine Learning",
              "Multifactor"]

// ["/CIA", "/Browsers", "/Tor",
//                 "/PasswordHandling", "/Anti-Virus", "/Encryption",
//                 "/Malware", "/RealityOfSecurity", "/Keys", "/MachineLearning",
//                 "/MultiFactor"]

// {
//   questionText: "",
//   answerOptions: [
//     { answerText: "", isCorrect: false },
//     { answerText: "", isCorrect: false },
//     { answerText: "", isCorrect: true },
//     { answerText: "", isCorrect: false },
//   ]
// },

const questions = {
  "CIA" : [{
    questionText: 'What does CIA stand for in the context of cybersecurity?',
    answerOptions: [
      { answerText: 'Confidentiality, Integrity, and Availability', isCorrect: true },
      { answerText: 'Central Intelligence Agency', isCorrect: false },
      { answerText: 'Cybersecurity Information and Analysis', isCorrect: false },
      { answerText: 'Critical Infrastructure Assessment', isCorrect: false },
    ]
  },
  {
    questionText: 'Why is CIA important in cybersecurity?',
    answerOptions: [
      { answerText: 'It is a framework for categorizing different types of cyber threats.', isCorrect: false },
      { answerText: 'It helps protect sensitive information and systems from unauthorized access, modification, or destruction.', isCorrect: true },
      { answerText: 'It refers to a government intelligence agency responsible for national security.', isCorrect: false },
      { answerText: 'It stands for Cybersecurity Investigation and Analysis.', isCorrect: false },
    ]
  },
  {
    questionText: 'What does confidentiality refer to?',
    answerOptions: [
      { answerText: 'The use of strong passwords and multi-factor authentication.', isCorrect: false },
      { answerText: 'The ability to keep information private, ensuring that only authorized individuals have access to it.', isCorrect: false },
      { answerText: 'The process of encrypting data to prevent unauthorized access.', isCorrect: false },
      { answerText: 'The practice of monitoring network traffic for potential security breaches.', isCorrect: true },
    ],
  },
  {
    questionText: 'Why is confidentiality important in the protection of sensitive information?',
    answerOptions: [
      { answerText: 'To ensure the availability of information during system failures.', isCorrect: false },
      { answerText: 'To authenticate the identity of users accessing sensitive information.', isCorrect: false },
      { answerText: 'To prevent disclosure or unauthorized access, which can lead to identity theft, financial loss, and reputational damage.', isCorrect: true },
      { answerText: 'To facilitate data sharing and collaboration among different organizations.', isCorrect: false },
    ],
  },
  {
    questionText: 'What does integrity refer to in the context of CIA?',
    answerOptions: [
      { answerText: 'The accuracy and consistency of information, ensuring that it is not tampered with or altered without authorization.', isCorrect: true },
      { answerText: 'The process of monitoring and responding to cybersecurity incidents.', isCorrect: false },
      { answerText: 'The ability of systems to recover from hardware or software failures.', isCorrect: false },
      { answerText: 'The protection of data from unauthorized access during transmission.', isCorrect: false },
    ],
  },
  {
    questionText: 'Why is integrity important in various domains such as finance, healthcare, and national security?',
    answerOptions: [
      { answerText: 'To comply with industry regulations and standards.', isCorrect: false },
      { answerText: 'To protect classified information from unauthorized disclosure.', isCorrect: false },
      { answerText: 'To ensure high-speed and reliable network connections.', isCorrect: false },
      { answerText: 'To prevent false or misleading data from being used, which can have serious consequences.', isCorrect: true },
    ],
  },
  {
    questionText: 'What does availability mean in the context of CIA?',
    answerOptions: [
      { answerText: 'The process of securing networks against external threats.', isCorrect: false },
      { answerText: 'The practice of creating regular backups of data.', isCorrect: false },
      { answerText: 'The ability to access information when needed and ensuring that systems are designed to prevent downtime and disruptions.', isCorrect: true },
      { answerText: 'The use of encryption to protect sensitive information.', isCorrect: false },
    ],
  },
  {
    questionText: 'Why is availability important in maintaining critical services and productivity?',
    answerOptions: [
      { answerText: 'To prevent unauthorized access to sensitive information.', isCorrect: false },
      { answerText: 'To enforce data retention policies.', isCorrect: false },
      { answerText: 'To detect and respond to cybersecurity incidents.', isCorrect: false },
      { answerText: 'To ensure that critical services can operate uninterrupted while also avoiding lost productivity and financial loss.', isCorrect: true },
    ]
  }
  ],
  "Browser" : 
    [
      {
        questionText: 'What is the purpose of web browsers?',
        answerOptions: [
          { answerText: 'To access websites and interact with them conveniently', isCorrect: true },
          { answerText: 'To create websites and host them online', isCorrect: false },
          { answerText: 'To secure internet connections', isCorrect: false },
          { answerText: 'To block advertisements on websites', isCorrect: false },
        ]
      },
      {
        questionText: 'What happens when a user enters a website URL in a web browser?',
        answerOptions: [
          { answerText: 'The web browser sends a request to the web server associated with that website.', isCorrect: true },
          { answerText: "The web browser creates a local copy of the website on the user's device.", isCorrect: false },
          { answerText: 'The web browser generates a unique identifier for the website.', isCorrect: false },
          { answerText: "The web browser encrypts the user's internet connection.", isCorrect: false },
        ]
      },
      {
        questionText: 'What is a web server?',
        answerOptions: [
          { answerText: 'A computer program that renders websites in web browsers.', isCorrect: false },
          { answerText: 'A physical device that stores web page information.', isCorrect: true },
          { answerText: 'A software application that protects against malware.', isCorrect: false },
          { answerText: "A user's personal computer used for web browsing.", isCorrect: false },
        ]
      },
      {
        questionText: 'What is the purpose of cookies in web browsing?',
        answerOptions: [
          { answerText: 'To provide a secure internet connection for the user.', isCorrect: false },
          { answerText: 'To block unwanted advertisements on websites.', isCorrect: false },
          { answerText: 'To store and remember user-specific information during browsing.', isCorrect: true },
          { answerText: 'To prevent websites from tracking user behavior.', isCorrect: false },
        ]
      },
      {
        questionText: 'How do websites sometimes use cookies in a way that can violate privacy?',
        answerOptions: [
          { answerText: 'Websites use cookies to improve website performance and loading speed.', isCorrect: false },
          { answerText: 'Cookies are used to provide personalized recommendations on websites.', isCorrect: false },
          { answerText: 'Websites can track user behavior and gather personal information without explicit consent.', isCorrect: true },
          { answerText: 'Cookies are used to encrypt sensitive data during internet communication.', isCorrect: false },
        ]
      },
      {
        questionText: 'What is one way to combat possible privacy violations related to cookies?',
        answerOptions: [
          { answerText: 'Disabling JavaScript in the web browser settings.', isCorrect: false },
          { answerText: 'Clearing cookies regularly from the web browser.', isCorrect: true },
          { answerText: 'Blocking all advertisements on websites.', isCorrect: false },
          { answerText: 'Using a virtual private network (VPN) while browsing.', isCorrect: false },
        ]
      },
      {
        questionText: 'True or False: Clicking the "Deny" or "Disallow" button for cookies always prevents websites from accessing cookies.',
        answerOptions: [
          { answerText: 'True', isCorrect: false },
          { answerText: 'False', isCorrect: true }
        ]
      },
      {
        questionText: 'What is cache?',
        answerOptions: [
          { answerText: 'Cache is a type of malware that steals personal information from web browsers.', isCorrect: false },
          { answerText: 'Cache is a temporary storage location on a device that improves loading speed.', isCorrect: true },
          { answerText: 'Cache is a type of encryption used for secure internet connections.', isCorrect: false },
          { answerText: 'Cache is a browser extension that blocks advertisements on websites.', isCorrect: false },
        ]
      },
      {
        questionText: 'Name two web browsers known for their focus on security and privacy.',
        answerOptions: [
          { answerText: 'Google Chrome and Safari', isCorrect: false },
          { answerText: 'Firefox and Internet Explorer', isCorrect: false },
          { answerText: 'Tor and Brave', isCorrect: true },
          { answerText: 'Opera and Microsoft Edge', isCorrect: false },
        ]
      },
      {
        questionText: 'True or False: Browsers are responsible for storing and delivering web page information to users.',
        answerOptions: [
          { answerText: 'True', isCorrect: false },
          { answerText: 'False', isCorrect: true }
        ]
      }
    ]
  ,
  "Tor" : 
      [
        {
          questionText: "What is the main concern regarding individuals' data in today's age?",
          answerOptions: [
            { answerText: "Unauthorized access to personal information", isCorrect: true },
            { answerText: "Lack of data storage capacity", isCorrect: false },
            { answerText: "Slow internet connection speeds", isCorrect: false },
            { answerText: "Inaccurate data collection methods", isCorrect: false },
          ]
        },
        {
          questionText: "What is Tor and what does it stand for?",
          answerOptions: [
            { answerText: "A browser that allows users to access the internet anonymously and securely", isCorrect: true },
            { answerText: "A social media platform for sharing encrypted messages", isCorrect: false },
            { answerText: "An encryption protocol used by government agencies", isCorrect: false }
          ]
        },
        {
          questionText: "True or False: Tor was initially developed in the 1990s by the US Navy Research Lab to protect government communication.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "True or False: Tor Browser was released in 2008 to make Tor accessible to everyday internet users.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "What are some benefits of using Tor?",
          answerOptions: [
            { answerText: "Access to blocked websites and online services", isCorrect: false },
            { answerText: "Protection against tracking and surveillance", isCorrect: false },
            { answerText: "Enhanced privacy and anonymity", isCorrect: false },
            { answerText: "All of the above", isCorrect: true },
          ]
        },
        {
          questionText: "True or False: Tor is illegal in most countries.",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true }
          ]
        },
        {
          questionText: "What are some misconceptions surrounding Tor?",
          answerOptions: [
            { answerText: "It is illegal and solely used for illegal activities on the dark web.", isCorrect: false },
            { answerText: "It can only be accessed by government agencies.", isCorrect: false },
            { answerText: "Browsing is much slower", isCorrect: false },
            { answerText: "a and c", isCorrect: true },
          ]
        },
        {
          questionText: "What notable event brought mass surveillance by the US government into the spotlight and involved the use of Tor?",
          answerOptions: [
            { answerText: "The Panama Papers leak", isCorrect: false },
            { answerText: "The Arab Spring protests", isCorrect: false },
            { answerText: "The Snowden Leak", isCorrect: true },
            { answerText: "The Cambridge Analytica scandal", isCorrect: false },
          ]
        },
        {
          questionText: "What illegal operation involved Tor from 2011 to 2013?",
          answerOptions: [
            { answerText: "The Silk Road operation", isCorrect: true },
            { answerText: "The WikiLeaks whistleblowing campaign", isCorrect: false },
            { answerText: "The Anonymous hacker collective", isCorrect: false },
            { answerText: "The DarkSide ransomware attacks", isCorrect: false },
          ]
        }
      ]
  ,
  "Password Handling" : 
      [
        {
          questionText: "True or False: Password handling and management are important in computer security because passwords are often predictable and easy to guess.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "True or False: Companies face challenges in enforcing strict password regulations because users may resort to insecure practices to remember complex passwords.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "What is Multi-Factor Authentication (MFA or 2FA)?",
          answerOptions: [
            { answerText: "A technique that adds an additional layer of identification for users during the login process", isCorrect: true },
            { answerText: "A method for storing passwords in a secure database", isCorrect: false },
            { answerText: "An encryption algorithm used to protect user data", isCorrect: false },
            { answerText: "A process for generating complex passwords automatically", isCorrect: false },
          ]
        },
        {
          questionText: "What is the main advantage of using passphrases instead of passwords?",
          answerOptions: [
            { answerText: "Passphrases are easier to remember", isCorrect: false },
            { answerText: "Passphrases are more difficult to crack", isCorrect: true },
            { answerText: "Passphrases are shorter in length", isCorrect: false },
            { answerText: "Passphrases are less secure than passwords", isCorrect: false },
          ]
        },
        {
          questionText: "How can users create a memorable passphrase?",
          answerOptions: [
            { answerText: "By using common phrases and sentences", isCorrect: false },
            { answerText: "By using personal information such as birth dates or addresses", isCorrect: false },
            { answerText: "By associating a story or visual imagery with the passphrase", isCorrect: true },
            { answerText: "By using short, unrelated words and numbers", isCorrect: false },
          ]
        },
        {
          questionText: "What is the primary benefit of using password managers?",
          answerOptions: [
            { answerText: "They eliminate the need for passwords", isCorrect: false },
            { answerText: "They provide additional layers of authentication", isCorrect: false },
            { answerText: "They encrypt data to protect it from unauthorized access", isCorrect: false },
            { answerText: "They store login information and generate strong passwords", isCorrect: true },
          ]
        },
        {
          questionText: "True or False: Password managers provide benefits but have no associated risks.",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true }
          ]
        },
        {
          questionText: "What is one potential risk associated with password managers?",
          answerOptions: [
            { answerText: "They are not compatible with all devices", isCorrect: false },
            { answerText: "They may slow down the login process", isCorrect: false },
            { answerText: "They can be a target for data breaches", isCorrect: true }
          ]
        },
        {
          questionText: "What action is recommended if one's login information is compromised?",
          answerOptions: [
            { answerText: "Report the incident to the authorities", isCorrect: false },
            { answerText: "Immediately change passwords for important websites", isCorrect: true },
            { answerText: "Notify all contacts in the address book", isCorrect: false }
          ]
        },
        {
          questionText: "True or False: It is important for users to balance password complexity and memorability.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        }
      ]
  ,
  "Anti-Virus" :  
      [
        {
          questionText: "What is the purpose of antivirus software?",
          answerOptions: [
            { answerText: "To enhance computer performance", isCorrect: false },
            { answerText: "To prevent physical damage to a computer", isCorrect: false },
            { answerText: "To detect and remove malicious software (malware)", isCorrect: true },
            { answerText: "To improve internet connectivity", isCorrect: false },
          ]
        },
        {
          questionText: "What is one of the significant advantages of using antivirus software?",
          answerOptions: [
            { answerText: "It protects against physical theft of the computer", isCorrect: false },
            { answerText: "It improves the computer's processing speed", isCorrect: false },
            { answerText: "It provides protection against malware", isCorrect: true },
            { answerText: "It increases the computer's storage capacity", isCorrect: false },
          ]
        },
        {
          questionText: "What does automatic updating mean in the context of antivirus software?",
          answerOptions: [
            { answerText: "The software automatically scans the computer for malware", isCorrect: false },
            { answerText: "The software automatically repairs any damaged files", isCorrect: false },
            { answerText: "The software automatically removes unused programs", isCorrect: false },
            { answerText: "The software stays up-to-date with the latest threat definitions", isCorrect: true },
          ]
        },
        {
          questionText: "What scanning capabilities does antivirus software have?",
          answerOptions: [
            { answerText: "It can scan for physical threats to the computer", isCorrect: false },
            { answerText: "It can scan emails and attachments for malware", isCorrect: true },
            { answerText: "It can scan and detect every possible malware", isCorrect: false }
          ]
        },
        {
          questionText: "What is a potential downside of antivirus software in terms of system performance?",
          answerOptions: [
            { answerText: "It increases the risk of system crashes", isCorrect: false },
            { answerText: "It requires manual intervention for updates", isCorrect: false },
            { answerText: "It can slow down computer performance", isCorrect: true },
            { answerText: "It consumes excessive storage space", isCorrect: false },
          ]
        },
        {
          questionText: "What is a false positive in the context of antivirus software?",
          answerOptions: [
            { answerText: "When antivirus software fails to detect malware", isCorrect: false },
            { answerText: "When antivirus software mistakenly flags a legitimate program as malware", isCorrect: true },
            { answerText: "When antivirus software crashes the computer system", isCorrect: false },
            { answerText: "When antivirus software generates too many notifications", isCorrect: false },
          ]
        },
        {
          questionText: "True or False: All antivirus software programs come at a cost.",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true }
          ]
        },
        {
          questionText: "Is antivirus software 100% foolproof in protecting against all malware?",
          answerOptions: [
            { answerText: "Yes, antivirus software provides complete protection against all malware", isCorrect: false },
            { answerText: "No, there is always a chance that new and undetected malware can bypass detection", isCorrect: true },
            { answerText: "It depends on the brand of antivirus software used", isCorrect: false },
            { answerText: "It depends on the user's internet connection speed", isCorrect: false },
          ]
        },
        {
          questionText: "What is one advantage mentioned in the article regarding the use of antivirus software?",
          answerOptions: [
            { answerText: "Improved computer aesthetics", isCorrect: false },
            { answerText: "Enhanced gaming experience", isCorrect: false },
            { answerText: "Peace of mind knowing personal information is safer and more secure", isCorrect: true },
            { answerText: "Ability to run multiple operating systems simultaneously", isCorrect: false },
          ]
        },
        {
          questionText: "Should the decision to use antivirus software be based on personal needs and preferences?",
          answerOptions: [
            { answerText: "No, it is always necessary to use antivirus software", isCorrect: false },
            { answerText: "Yes, the decision should be based on personal needs and preferences", isCorrect: true },
            { answerText: "It depends on the user's internet usage habits", isCorrect: false },
            { answerText: "It depends on the computer's brand and model", isCorrect: false },
          ]
        }
      ]
  ,
  "Encryption" : 
      [
        {
          questionText: "What is encryption?",
          answerOptions: [
            { answerText: "The process of converting normal-oriented information into a secret text", isCorrect: true },
            { answerText: "The process of reversing the message", isCorrect: false },
            { answerText: "The process of shifting letters in a message", isCorrect: false },
            { answerText: "The process of disguising internet traffic", isCorrect: false },
          ]
        },
        {
          questionText: "What is decryption?",
          answerOptions: [
            { answerText: "The process of converting normal-oriented information into a secret text", isCorrect: false },
            { answerText: "The process of reversing an encryption back into plain-text", isCorrect: true },
            { answerText: "The process of shifting letters in a message", isCorrect: false },
            { answerText: "The process of disguising internet traffic", isCorrect: false },
          ]
        },
        {
          questionText: "What is a Caesar Cipher?",
          answerOptions: [
            { answerText: "The process of converting normal-oriented information into a different language", isCorrect: false },
            { answerText: "The process of reversing the encryption", isCorrect: false },
            { answerText: "The process of shifting each letter in a message a certain amount", isCorrect: true },
            { answerText: "The process of disguising internet traffic", isCorrect: false },
          ]
        },
        {
          questionText: "What are some examples of encryption's application in daily life?",
          answerOptions: [
            { answerText: "Secure chat applications", isCorrect: false },
            { answerText: "E-commerce transactions", isCorrect: false },
            { answerText: "Cloud file storage and sharing", isCorrect: false },
            { answerText: "All of the above", isCorrect: true },
          ]
        },
        {
          questionText: "How is encryption used in secure chat applications?",
          answerOptions: [
            { answerText: "To protect financial transactions and personal information", isCorrect: false },
            { answerText: "To prevent tracking or monitoring by third parties", isCorrect: false },
            { answerText: "To establish a channel for secure online communication", isCorrect: true },
            { answerText: "To protect files from unauthorized access", isCorrect: false },
          ]
        },
        {
          questionText: "Why is encryption important in e-commerce?",
          answerOptions: [
            { answerText: "To protect financial transactions and personal information", isCorrect: true },
            { answerText: "To prevent tracking or monitoring by third parties", isCorrect: false },
            { answerText: "To establish a channel for secure online communication", isCorrect: false },
            { answerText: "To protect files from unauthorized access", isCorrect: false },
          ]
        },
        {
          questionText: "Why is encryption necessary for cloud file storage and sharing?",
          answerOptions: [
            { answerText: "To protect financial transactions and personal information", isCorrect: false },
            { answerText: "To prevent tracking or monitoring by third parties", isCorrect: false },
            { answerText: "To establish a channel for secure online communication", isCorrect: false },
            { answerText: "To protect files from potential unauthorized access", isCorrect: true },
          ]
        },
        {
          questionText: "What is the purpose of using a Virtual Private Network (VPN)?",
          answerOptions: [
            { answerText: "To protect financial transactions and personal information", isCorrect: false },
            { answerText: "To prevent tracking or monitoring by third parties", isCorrect: true },
            { answerText: "To establish a channel for secure online communication", isCorrect: false },
            { answerText: "To protect files from unauthorized access", isCorrect: false },
          ]
        },
        {
          questionText: "True or False: Encryption can provide complete invulnerability to unauthorized access.",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true }
          ]
        }
      ]
  ,
  "Malware" : 
      [
        {
          questionText: "True or False: Malware refers to any type of software designed to negatively impact a computer system, network, or device.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "What are three different forms of malware?",
          answerOptions: [
            { answerText: "Viruses, worms, and spyware", isCorrect: true },
            { answerText: "Encryption, firewalls, and VPNs", isCorrect: false },
            { answerText: "Brute force attacks, phishing, and social engineering", isCorrect: false },
            { answerText: "Encryption, biometrics, and firewalls", isCorrect: false },
          ]
        },
        {
          questionText: "What are some signs of unauthorized email or system usage that could indicate malware?",
          answerOptions: [
            { answerText: "Slow system performance, unexpected pop-ups, and unusual network activity", isCorrect: true },
            { answerText: "Encryption errors, strong passwords, and secure connections", isCorrect: false },
            { answerText: "Firewall alerts, VPN logs, and encrypted email attachments", isCorrect: false },
            { answerText: "Anti-virus updates, system backups, and software patches", isCorrect: false },
          ]
        },
        {
          questionText: "How can malware affect network activity?",
          answerOptions: [
            { answerText: "By increasing internet speed and optimizing network performance", isCorrect: false },
            { answerText: "By encrypting sensitive data and securing network connections", isCorrect: false },
            { answerText: "By disrupting network communication and stealing information", isCorrect: true },
            { answerText: "By providing secure remote access and preventing unauthorized access", isCorrect: false },
          ]
        },
        {
          questionText: "What are some indications of memory misuse caused by malware?",
          answerOptions: [
            { answerText: "Unusual CPU usage, excessive disk activity, and memory errors", isCorrect: true },
            { answerText: "Strong passwords, multi-factor authentication, and encryption", isCorrect: false },
            { answerText: "Firewalls, intrusion detection systems, and virtual private networks", isCorrect: false },
            { answerText: "Secure email communication, spam filters, and anti-phishing measures", isCorrect: false },
          ]
        },
        {
          questionText: "What is a possible first step if you notice symptoms of malware?",
          answerOptions: [
            { answerText: "Ignore the symptoms and continue using the system", isCorrect: false },
            { answerText: "Update your anti-virus software and perform a full system scan", isCorrect: true },
            { answerText: "Share the symptoms on social media for advice", isCorrect: false },
            { answerText: "Contact your internet service provider for assistance", isCorrect: false },
          ]
        },
        {
          questionText: "Name two actions you can take to protect your computer from malware.",
          answerOptions: [
            { answerText: "Using strong passwords and regularly updating software", isCorrect: true },
            { answerText: "Enabling automatic system updates and ignoring security warnings", isCorrect: false },
            { answerText: "Disabling firewalls and antivirus software for improved performance", isCorrect: false },
            { answerText: "Opening email attachments from unknown sources without caution", isCorrect: false },
          ]
        },
        {
          questionText: "What is the importance of installing anti-virus and anti-malware software?",
          answerOptions: [
            { answerText: "They guarantee complete protection against all forms of malware", isCorrect: false },
            { answerText: "They increase system performance and optimize network activity", isCorrect: false },
            { answerText: "They help detect and remove malicious software from your computer", isCorrect: true },
            { answerText: "They eliminate the need for other security measures, such as firewalls", isCorrect: false },
          ]
        },
        {
          questionText: "How can you be cautious when opening emails or downloading attachments from unknown sources?",
          answerOptions: [
            { answerText: "Only open emails from known sources and never download attachments", isCorrect: false },
            { answerText: "Disable email notifications and avoid opening any emails", isCorrect: false },
            { answerText: "Verify the sender's identity and use reputable antivirus software for scanning", isCorrect: true },
            { answerText: "Share the email with friends and colleagues to get their opinion", isCorrect: false },
          ]
        },
        {
          questionText: "Why is it important to be aware of the symptoms of malware?",
          answerOptions: [
            { answerText: "To impress friends and colleagues with your technical knowledge", isCorrect: false },
            { answerText: "To contribute to the spread of malware awareness campaigns", isCorrect: false },
            { answerText: "To take immediate action and protect your computer from further harm", isCorrect: true }
          ]
        },
      ]
  ,
  "Reality of Security" : 
      [
        {
          questionText: "What is one example of a tradeoff when it comes to security and privacy?",
          answerOptions: [
            { answerText: "Easy accessibility to information and little security", isCorrect: false },
            { answerText: "Almost complete invulnerability to attacks and difficulty accessing information", isCorrect: false },
            { answerText: "A and B", isCorrect: true },
          ]
        },
        {
          questionText: "True or False: The Caesar Cipher is sufficient for protecting data on the internet.",
          answerOptions: [
            { answerText: "True", isCorrect: false },
            { answerText: "False", isCorrect: true }
          ]
        },
        {
          questionText: "What is meant by 'breaking' an encryption?",
          answerOptions: [
            { answerText: "Gaining unauthorized access to encrypted information or learning of the decryption key", isCorrect: true },
            { answerText: "Creating a secure encryption key", isCorrect: false },
            { answerText: "Implementing a robust encryption algorithm", isCorrect: false },
            { answerText: "Encrypting sensitive data", isCorrect: false },
          ]
        },
        {
          questionText: "What is brute force in the context of decryption?",
          answerOptions: [
            { answerText: "A decryption strategy that systematically tries every possibility", isCorrect: true },
            { answerText: "A method for creating strong encryption keys", isCorrect: false },
            { answerText: "The process of breaking an encryption algorithm", isCorrect: false },
            { answerText: "A type of social engineering attack", isCorrect: false },
          ]
        },
        {
          questionText: "How can one protect against brute force decryption attacks?",
          answerOptions: [
            { answerText: "Providing unlimited password attempts", isCorrect: false },
            { answerText: "Using strong encryption keys and unaffiliated passwords", isCorrect: true },
            { answerText: "Sharing encryption keys", isCorrect: true }
          ]
        },
        {
          questionText: "What is social engineering in the context of security attacks?",
          answerOptions: [
            { answerText: "Manipulating individuals to divulge sensitive information", isCorrect: true },
            { answerText: "Exploiting software vulnerabilities to gain unauthorized access", isCorrect: false },
            { answerText: "Implementing strong encryption algorithms", isCorrect: false },
            { answerText: "Creating malicious software to infect computer systems", isCorrect: false },
          ]
        },
        {
          questionText: "What is malware?",
          answerOptions: [
            { answerText: "Any type of software designed to negatively impact a computer system", isCorrect: true },
            { answerText: "A type of encryption algorithm", isCorrect: false },
            { answerText: "A strategy for protecting against brute force attacks", isCorrect: true },
            { answerText: "A method of social engineering", isCorrect: false },
          ]
        },
        {
          questionText: "Why should an encryption algorithm be resistant to brute force attacks?",
          answerOptions: [
            { answerText: "To ensure easy accessibility to encrypted information", isCorrect: false },
            { answerText: "To allow for faster decryption speed", isCorrect: false },
            { answerText: "To make it difficult and time-consuming for adversaries to guess the encryption key", isCorrect: true },
            { answerText: "To prevent social engineering attacks", isCorrect: false },
          ]
        },
        {
          questionText: "Why is it important to find the right balance between robustness and practicality in encryption methods?",
          answerOptions: [
            { answerText: "To ensure complete invulnerability to attacks", isCorrect: false },
            { answerText: "To simplify the implementation of encryption algorithms", isCorrect: false },
            { answerText: "To prevent the need for encryption options", isCorrect: false },
            { answerText: "To avoid sacrificing performance for security or vice versa", isCorrect: true },
          ]
        },
        {
          questionText: "What should one be willing to accept when considering a secure encryption scheme?",
          answerOptions: [
            { answerText: "Easy accessibility to encrypted information", isCorrect: false },
            { answerText: "Lack of resource-intensive methods", isCorrect: false },
            { answerText: "Sacrificing overall performance to protect extremely sensitive data", isCorrect: true },
            { answerText: "Unlimited password attempts", isCorrect: false },
          ]
        },
      ]
  ,
  "Keys" : 
      [
        {
          questionText: "What is symmetric key encryption?",
          answerOptions: [
            { answerText: "A technique where two different keys are used for encryption and decryption.", isCorrect: false },
            { answerText: "A technique where the same key is used for both encryption and decryption.", isCorrect: true },
            { answerText: "A technique where a public key and a private key are used for encryption and decryption.", isCorrect: false },
            { answerText: "A technique where encryption and decryption are performed without the use of any key.", isCorrect: false },
          ]
        },
        {
          questionText: "What are two important qualities of symmetric key encryption?",
          answerOptions: [
            { answerText: "Speed and compatibility.", isCorrect: false },
            { answerText: "Efficiency and security.", isCorrect: true },
            { answerText: "Scalability and flexibility.", isCorrect: false },
            { answerText: "Key pairing and security.", isCorrect: false },
          ]
        },
        {
          questionText: "What is the main vulnerability of symmetric key encryption?",
          answerOptions: [
            { answerText: "The secrecy of the key.", isCorrect: true },
            { answerText: "The complexity of the encryption algorithm.", isCorrect: false },
            { answerText: "The efficiency of the encryption process.", isCorrect: false },
            { answerText: "The need for a secure channel for key exchange.", isCorrect: false },
          ]
        },
        {
          questionText: "How is the key usually distributed in symmetric key encryption?",
          answerOptions: [
            { answerText: "The key is usually physically communicated to the intended recipients.", isCorrect: false },
            { answerText: "The key is usually shared over the internet using secure channels.", isCorrect: true },
            { answerText: "The key is usually generated by the encryption algorithm.", isCorrect: false },
            { answerText: "The key is usually distributed through a public key infrastructure.", isCorrect: false },
          ]
        },
        {
          questionText: "What is asymmetric key encryption?",
          answerOptions: [
            { answerText: "A technique where two different keys are used for encryption and decryption.", isCorrect: false },
            { answerText: "A technique where the same key is used for both encryption and decryption.", isCorrect: false },
            { answerText: "A technique where a public key and a private key are used for encryption and decryption.", isCorrect: true },
            { answerText: "A technique where encryption and decryption are performed without the use of any key.", isCorrect: false },
          ]
        },
        {
          questionText: "What are two important qualities of asymmetric key encryption?",
          answerOptions: [
            { answerText: "Speed and compatibility.", isCorrect: false },
            { answerText: "Efficiency/response time and security.", isCorrect: false },
            { answerText: "Scalability and flexibility.", isCorrect: false },
            { answerText: "Key pairing and security.", isCorrect: true },
          ]
        },
        {
          questionText: "How is the key distribution problem solved in asymmetric key encryption?",
          answerOptions: [
            { answerText: "The private key is shared over the internet using secure channels.", isCorrect: false },
            { answerText: "The public key is generated by the encryption algorithm.", isCorrect: false },
            { answerText: "The public key can be distributed to anyone, while the private key is kept secret.", isCorrect: true },
            { answerText: "The key is distributed through a public key infrastructure.", isCorrect: false },
          ]
        },
        {
          questionText: "Name two examples of asymmetric key encryption algorithms.",
          answerOptions: [
            { answerText: "AES and DES.", isCorrect: false },
            { answerText: "RSA and Diffie-Hellman Key Exchange.", isCorrect: true },
            { answerText: "Blowfish and Twofish.", isCorrect: false },
            { answerText: "Hash functions and SHA-1.", isCorrect: false },
          ]
        }
      ]
  ,
  "Machine Learning" : 
      [
        {
          questionText: "What is the main concern regarding individuals' data in today's age?",
          answerOptions: [
            { answerText: "Unauthorized access to personal information", isCorrect: true },
            { answerText: "Lack of data storage capacity", isCorrect: false },
            { answerText: "Slow internet connection speeds", isCorrect: false },
            { answerText: "Inaccurate data collection methods", isCorrect: false },
          ]
        },
        {
          questionText: "True or False: Machine learning is a subfield of artificial intelligence.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "True or False: Machine learning is popular in the field of cybersecurity due to its ability to evolve to cyber threats.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "How does machine learning enhance threat detection and response in cybersecurity?",
          answerOptions: [
            { answerText: "By adapting to emerging threats and identifying patterns or behaviors that may go unnoticed by traditional methods", isCorrect: false },
            { answerText: "By storing vast amounts of data for analysis", isCorrect: false },
            { answerText: "By improving incident response time", isCorrect: false },
            { answerText: "All of the above", isCorrect: true },
          ]
        },
        {
          questionText: "How does machine learning contribute to network security?",
          answerOptions: [
            { answerText: "By monitoring and analyzing network traffic for potential security breaches", isCorrect: true },
            { answerText: "By applying predefined rules or signatures to detect network threats", isCorrect: false },
            { answerText: "By encrypting network traffic to prevent unauthorized access", isCorrect: false },
            { answerText: "None of the above", isCorrect: false },
          ]
        },
        {
          questionText: "True or False: Machine learning algorithms can learn from network traffic and detect anomalies.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "What is one potential problem with machine learning in the context of security and privacy?",
          answerOptions: [
            { answerText: "Adversaries can use machine learning techniques to develop sophisticated attacks", isCorrect: false },
            { answerText: "Machine learning requires vast amounts of data, raising privacy concerns", isCorrect: false },
            { answerText: "Lack of transparency and explainability of machine learning algorithms", isCorrect: false },
            { answerText: "All of the above", isCorrect: true },
          ]
        },
        {
          questionText: "True or False: Organizations must ensure they handle user data ethically and responsibly when using machine learning.",
          answerOptions: [
            { answerText: "True", isCorrect: true },
            { answerText: "False", isCorrect: false }
          ]
        },
        {
          questionText: "What is the demand for trust, transparency, and explainability in machine learning?",
          answerOptions: [
            { answerText: "To provide clear explanations of how machine learning systems operate and how data is used", isCorrect: false },
            { answerText: "To develop interpretable models and techniques for explaining algorithmic decisions", isCorrect: false },
            { answerText: "To build trust and confidence in the context of security and privacy", isCorrect: false },
            { answerText: "All of the above", isCorrect: true },
          ]
        }
      ]
  ,
  "Multifactor" : 
      [
        {
          questionText: "What does 2FA stand for?",
          answerOptions: [
            { answerText: "Two-Factor Authentication", isCorrect: true },
            { answerText: "Two-Factor Authorization", isCorrect: false },
            { answerText: "Two-Factor Access", isCorrect: false },
            { answerText: "Two-Factor Association", isCorrect: false },
          ]
        },
        {
          questionText: "What is the purpose of 2FA?",
          answerOptions: [
            { answerText: "To make account logins faster", isCorrect: false },
            { answerText: "To provide additional layers of security", isCorrect: true },
            { answerText: "To bypass password requirements", isCorrect: false },
            { answerText: "To track user activity", isCorrect: false },
          ]
        },
        {
          questionText: "What are the two forms of identification typically required in 2FA?",
          answerOptions: [
            { answerText: "Something you remember and something you see", isCorrect: false },
            { answerText: "Something you know and something you have", isCorrect: true },
            { answerText: "Something you hear and something you feel", isCorrect: false },
            { answerText: "Something you touch and something you taste", isCorrect: false },
          ]
        },
        {
          questionText: "Why is using the same password for multiple online accounts a security risk?",
          answerOptions: [
            { answerText: "It makes it harder to remember passwords", isCorrect: false },
            { answerText: "It increases the chance of forgetting passwords", isCorrect: false },
            { answerText: "It simplifies the login process", isCorrect: false },
            { answerText: "It allows hackers to access multiple accounts if one password is compromised", isCorrect: true },
          ]
        },
        {
          questionText: "How does 2FA make it harder for hackers to gain access to your online accounts?",
          answerOptions: [
            { answerText: "It encrypts all user data", isCorrect: false },
            { answerText: "It blocks all suspicious login attempts", isCorrect: false },
            { answerText: "It requires an additional form of identification", isCorrect: true },
            { answerText: "It automatically changes passwords regularly", isCorrect: false },
          ]
        },
        {
          questionText: "What are some examples of the second form of identification in 2FA?",
          answerOptions: [
            { answerText: "Security questions and answers", isCorrect: false },
            { answerText: "Email addresses and phone numbers", isCorrect: false },
            { answerText: "Usernames and passwords", isCorrect: false },
            { answerText: "Smartphone-generated codes and biometric data", isCorrect: true },
          ]
        },
        {
          questionText: "How does the process of 2FA work?",
          answerOptions: [
            { answerText: "By providing an additional form of identification after entering a password", isCorrect: true },
            { answerText: "By scanning user devices for malware", isCorrect: false },
            { answerText: "By requiring users to reset their passwords regularly", isCorrect: false },
            { answerText: "By encrypting user data during transmission", isCorrect: false },
          ]
        },
        {
          questionText: "Describe a scenario of how 2FA might work.",
          answerOptions: [
            { answerText: "After entering a password, the user completes a Captcha.", isCorrect: false },
            { answerText: "After entering a password, the user is prompted to enter their email address.", isCorrect: false },
            { answerText: "After entering a password, the user logs in sucessfully.", isCorrect: false },
            { answerText: "After entering a password, the user generates a unique code using an authentication app.", isCorrect: true },
          ]
        },
        {
          questionText: "What is the recommendation regarding the use of 2FA?",
          answerOptions: [
            { answerText: "Disable 2FA to simplify the login process", isCorrect: false },
            { answerText: "Use 2FA only for unimportant online accounts", isCorrect: false },
            { answerText: "Enable 2FA on all important online accounts", isCorrect: true },
            { answerText: "Share 2FA codes with others for convenience", isCorrect: false },
          ]
        },
      ]
  };

function displayText2() {
  // const db = getDatabase();
  // const userQuizRef = ref(db, 'users/' + user.uid + '/firstname');
  // update(ref(db, `/${auth.currentUser.uid}/${tempId}`), {
  //   completed: !status
  // });
  var text = document.getElementById("textField");
  text.style.display = "block";
}

function Training() {
  const {user, logout} = UserAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
  const [currentQuiz, setQuiz] = useState("CIA");
	const [score, setScore] = useState(0);


  const returnTarget = () => {
    return currentQuiz + " Quiz"
  }
  const displayText = () => {
    if (user != null){
      const db = getDatabase();
      const target = currentQuiz + " Quiz"
      const userQuizRef = update(ref(db, 'users/' + user.uid),{[target] : score})

    }
    var text = document.getElementById("textField");
    text.style.display = "block";
  }

  const handleCurrentQuestion = async => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const handleQuiz = (s) =>{
    
    setQuiz(s);
    console.log(questions[s])
  }

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div>
      <NavPanel></NavPanel>
      <div className='training-main-container'>
          <div className='trainning-title-container'><p className='training-title'>Test Your Skills</p></div>
          <div className='training-quiz-container'>
            <div className='training-topic-section'>
              
                { topics.map((titles) => 
                    <button className='topic-section-card' onClick={() => handleQuiz(titles)}>
                      <h1 >{titles}</h1>
                    </button>
                )}
             
            </div>
            <div className='training-question-section'>
             
                {/* {showScore ? (
                  <div className='score-section'>
                    You scored {score} out of {questions.length}
                  </div>
                  ) : ( */}
                          
                          {questions[currentQuiz].map((quest) => 
                          <div className='app'>
                            <>
                            <div className='question-section'>
                              <div className='question-count'>
                              
                                <span >Question 0/8</span>
                                {/* {() => handleCurrentQuestion() } */}
                                
                              </div>
                              
                              <div className='question-text'>{quest.questionText}</div>
                            </div>

                            <div className='answer-section'>
                              {quest.answerOptions.map((answerOption) => (
                                <button className='quiz-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                              ))}
                            </div>
                            
                            </>
                            </div>
                          )}
                          <button className="score-button" onClick={() => displayText()}>Submit</button>

                          <div className='score-display' id="textField" style={{display: 'none'}}>
                          You scored: {score}
                          </div>
                          
                          
                   
                          
                      </div>
              </div>
          <div style={{minHeight: "10vh"}}></div>
      </div>
    </div>

  )
}

export default Training