import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function Tor() {
  return (
    <div className="main-body2">
        <NavPanel></NavPanel>
        <div className='content'>
        
        <br></br>
        <p className='title-container'>
            Tor
            <br></br>
        </p>

        <p className='text-container'>
            One of the most valuable assets in today's age is the data individuals generate on a regular basis. With this data, a lot of possibilities exist such as improving the lives and experiences of the population through the integration of modern devices or bridging worlds through vast interconnected systems (the internet). However, not everyone sees or shares the same motives with some wanting to abuse those data in order to make a profit, hurt others, or perform other harmful means. Thus, in recent years, there has been a growing desire and awareness regarding the security of an individual’s data. And an approach to such concerns is browsers that preserve the user's privacy such as Tor.
            <br></br><br></br>
            History:
            <br></br><br></br>
            Tor, or The Onion Router, is a free open-source software developed and maintained by Tor Project.  It was initially developed in the 1990s by the US Navy Research Lab when the lack of internet security and its capability for tracking and surveillance became a clear threat to government communication. The Tor network itself was released in 2002 but not a lot of users understood it as it catered more towards activists and tech-savvy users. It was not until 2008 when Tor Browser was released making it accessible to everyday internet users. 
        </p>

        <p className='text-container'>
            What is it?
            <br></br><br></br>
            In essence, Tor allows users to access the internet anonymously and securely with as much privacy as possible. It does so by routing the communications/traffic between users and the site they trying to access through multiple servers run by volunteers all around the world and encrypting it each step of the way. By doing this, it makes it difficult for third parties like government agencies, internet providers, and malicious hackers from learning about the sites a user visits and prevents the site from learning the user's original destination. Aside from acting as a strong defense against other entities, it also acts as a key for users to access websites and online services that may be blocked in their country or region. 
            <br></br><br></br>
            Misconceptions:
            <br></br><br></br>
            Tor is one of the most well-known buzzwords when it comes to internet privacy. However, it is also surrounded by many mysteries which spreads stories that have propagated negative connotations or misconceptions for the browser given all the creepypastas that surround it. One of the biggest misconceptions is that it is illegal due to it being heavily associated with illegal activities on the dark web, such as drug trafficking and online marketplaces for illegal goods and services. However, Tor is actually legal in most, if not all, countries. It is simply a free software designed for users to connect to the Tor network and exercise their purpose/agenda. Also, another misconception is that by accessing it, users are immediately bombarded by illegal activity, yet it acts like most browsers which prompt users to a search engine. Overall, as long as users are not actively looking for trouble, then they will not find it. 
            <br></br><br></br>
            Real-world Events:
            <br></br><br></br>
            <ul>
                <li>Tor was instrumental in protecting those during the 2010s Arab Spring protests by allowing for secure and anonymous communication among activists and journalists alike.</li>
                <li>It was used in the Snowden Leak in 2013 where mass surveillance of the US government was put in the spotlight.</li>
                <li>From 2011 to 2013  Tor was used for the Silk Road operation that saw the development of an online black market, exchanging illegal substances and activities.</li>
            </ul>
        </p>

        <p className='reference-container'>
        For more on Tor you can visit their <a href="https://www.torproject.org/" target="_blank">website</a> or the sites listed below. To use Tor you can follow the <a href="https://tb-manual.torproject.org/installation/" target="_blank">manual</a>.
        <br></br><br></br>
        <a href="https://www.torproject.org/about/history/" target="_blank">Tor History</a>
        <br></br><br></br>
        <a href="https://www.investopedia.com/terms/t/tor.asp" target="_blank">What is Tor?</a>
        <br></br><br></br>
        <a href="https://www.pnas.org/doi/10.1073/pnas.2011893117#bibliography" target="_blank">Potential Tor Harms</a>
        </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Tor