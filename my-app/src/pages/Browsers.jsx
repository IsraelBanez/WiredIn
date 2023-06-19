import React from 'react'
import '../styles/info.css'
import NavPanel from '../components/NavPanel'
import Footer from '../components/Footer'

function Browsers() {
  return (
    <div className="main-body2">
        <NavPanel></NavPanel>
         <div className='content'>
        
        <br></br>
        <p className='title-container'>
            Browsers
            <br></br>
        </p>

        <p className='text-container'>
            Website browsers are commonplace in today’s society. Websites serve a large variety of purposes, and a convenient way to interact with them is through an internet browser. Their convenience can be attributed to how simplified the connection process is as well as compatibility with multiple types of devices like mobile phones, tablets, laptops, and desktop computers.  Despite seeming simple on the surface, browsers can often be more complex.
        </p>

        <p className='text-container'>
            The Website Connection Process:
            <br></br><br></br>
            When a device user wants to access a website, there are multiple steps that must happen before the website is loaded into the browser. First, when the user enters a website URL (define URL on this page) like google.com, their web browser sends a request to Google’s web servers. A web server is another piece of computer technology that has the sole purpose of storing and delivering web page information to users who request it throughout the World Wide Web. When a request is sent to a server, it accepts the request, and returns the requested information back as a response. In the earlier example, when a user asks for google.com, the Google web server sends back the information that results in the typical Google search page being loaded in by the browser. Without the browser's help and without the server’s response, the quick and streamlined searching experience that we associate with the internet would not be possible.
            <br></br><br></br>
            This example is only one of many. Searching, shopping, researching, gaming, and all other types of activities on the internet utilize this connectivity scheme. However, there are more pieces to connection than just a simple request and response. In 1994, Louis Montulli II created the cookie to improve usability and overall experience while on the internet. These cookies were (and are) used as crumbs collected from website visits and are stored physically on a device. As the public began to realize the power of cookies, their utilization exploded in popularity. Cookies are the main reason behind a web store's shopping carts remembering which items have been added, web accounts staying logged in as a certain user, and logging which websites have been visited recently. These uses were originally intended to be harmless but also helpful. In most cases, they still are; however, many websites currently use cookies in a way that is detrimental to a user’s privacy.
        </p>

        <p className='text-container'>
            Have ever wondered why the things you recently shopped for online are now suddenly appearing in every website ad afterwards?  Well, this behavior is linked to those ads viewing your cookies, and targeting the ads specifically to you in hopes of getting you to visit their site(s). Since websites utilize cookies, they are able to use them in ways that can violate privacy. This includes viewing previous browser history, login info, and more. This places us, the browser users and website visitors, in a conundrum. On one hand, we want to utilize the helpful features that come along with cookies, but we also do not want a multitude of websites accessing information that they should not have access to.
        </p>

        <p className='text-container'>
            To combat possible privacy violations, here are a few tips that can help:
            <br></br><br></br>
            <ul>
                <li>Use the incognito mode of your given browser. This can take many names, but most browsers have an option that hides many cookies from websites, keeping your information safe.</li>
                <br></br>
                <li>Only click the "Allow Cookies" button on websites you trust. Unfortunately, some websites view cookies even if the permissions are denied or ignored, so this solution is best paired with avoiding websites you would not want your information given to.</li>
                <br></br>
                <li>Clearing cache and cookies. Cookies and other personal information is stored on your devices, and browsers provide options for clearing that data. By keeping cookies restricted on your device, you decrease the odds of a website taking advantage of your information.</li>
                <br></br>
                <li>Try browsers tailored towards security and/or privacy. Examples of these include <a href="/Tor">Tor</a> and Brave.</li>
            </ul>
        </p>

        <p className='reference-container'>
            To learn more, we recommend checking out the following resources:
            <br></br><br></br>
            <a href="https://en.wikipedia.org/wiki/Web_browser" target="_blank">Web Browsers</a>
            <br></br><br></br>
            <a href="https://www.techtarget.com/whatis/definition/Web-server" target="_blank">Web Servers</a>
            <br></br><br></br>
            <a href="https://www.historyofinformation.com/detail.php?id=2102" target="_blank">HTTP Cookies</a>
        </p>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Browsers