import React, {useState}  from 'react'
import '../styles/topics.css'
import NavPanel from '../components/NavPanel'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { FiSearch, IoIosArrowBack  } from "react-icons/fi";
import DownArrow from '../icons/down-arrow.png'
import Multiselect from 'multiselect-react-dropdown';
import CIA from "../thumbnails/cia.png"
import BROWSER from "../thumbnails/browsers.png"
import TOR from "../thumbnails/tor.png"
import PASSWORD from "../thumbnails/password.png"
import ANTIVIRUS from"../thumbnails/antivirus.png"
import ENCRYPTION from "../thumbnails/encryption.png"
import MALWARE from "../thumbnails/malware.png"
import SECURITY from "../thumbnails/security.png"
import ALGORITHM from "../thumbnails/algorithm.jpeg"
import ML from "../thumbnails/ml.png"
import MULTIFACTOR from "../thumbnails/2fa.png"

const subpages = 
                [["/CIA", CIA], ["/Browsers", BROWSER], ["/Tor",TOR],
                ["/PasswordHandling",PASSWORD], ["/Anti-Virus", ANTIVIRUS], ["/Encryption",ENCRYPTION],
                ["/Malware", MALWARE], ["/RealityOfSecurity", SECURITY], ["/Keys",ALGORITHM],
                 ["/MachineLearning", ML],
                ["/MultiFactor",MULTIFACTOR]]

const tags = [
  {
    cat: [["/Anti-Virus", ANTIVIRUS], ["/Browsers", BROWSER], ["/PasswordHandling",PASSWORD], ["/Malware", MALWARE]],
    key: 'tips'
  },
  {
    cat: [["/Encryption",ENCRYPTION], ["/Keys",ALGORITHM], ["/RealityOfSecurity", SECURITY]],
    key: 'communication'
  },
  {
    cat: [["/Browsers", BROWSER], ["/Tor",TOR], ["/RealityOfSecurity", SECURITY]],
    key: 'browsing'
  },
  {
    cat: [["/MultiFactor",MULTIFACTOR], ["/CIA", CIA], ["/MachineLearning", ML], ["/PasswordHandling",PASSWORD]],
    key: 'authentication'
  },
  {
    cat: [["/MachineLearning", ML], ["/MultiFactor",MULTIFACTOR], ["/PasswordHandling",PASSWORD], ["/Browsers", BROWSER], ["/RealityOfSecurity", SECURITY]],
    key: 'recent trends'
  }
]

function Topics() {
  const [titles, setTitles] = useState(subpages);
  const [value, setValue] = useState([]);
  const onChange = (event) => {
    setValue([...event.value]);
  }

  var s = new Set();
  var temp = new Set();
  var sCount = 0;

  const handleTags = (e) => {
    console.log(e)
    e.map((topic) => 
    topic.cat.forEach(element => {

      
      
      if (sCount == 0){
        s.add(element)
      } else if (s.has(element)){
        temp.add(element)
      }

      console.log(s)
      console.log(Array.from(element))
      console.log(temp)

      if (topic.cat[topic.cat.length - 1] === element){
        if (sCount > 0){
          s.clear()
          s = temp
          temp.clear()
        } else {
          sCount = 1
        }
      }
    }));

    if (e.length == 0){
      setTitles(subpages);
    } else{
      setTitles(Array.from(s));
    }
  }

  const handleFilter = (e) => {
    console.log(e)
    const searchWord = e.target.value;
    const filteredTargets = subpages.filter((value) => {
      return value[0].toLowerCase().includes((searchWord.toLowerCase()));
    });
    if (searchWord === ""){
      setTitles(subpages);
    } else{
      setTitles(filteredTargets);
    }
  };

  return (
    <div>
      <NavPanel></NavPanel>
      <div className='topic-main-container'>

        <div className='topic-title-container'><p className='topic-title'>Ready to Learn</p></div>
        
        <div className='topic-search-bar-container'>    
            <div className='topic-search-icon'><FiSearch /></div>
            <input className="topic-search-bar" type="text" id='search' onChange={handleFilter} />
        </div>

        <div className='topic-tag-container'>
          <div className='topic-tag-info'>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck(){}}
            onRemove={handleTags}
            onSearch={function noRefCheck(){}}
            onSelect={handleTags} /*function noRefCheck(){ (tar) => console.log(tar)} */
            options={tags}
            showCheckbox
          />
          </div>
        </div>
              
        <div className='topic-articles-container'>
          <p className='topic-articles-title'>Articles</p>
          <div className='topic-article-body'>
            
            {titles.map((sub) => 
              <div className='topic-article-card'>
                <a href={sub[0]} className='topic-thumbnail'>
                  <img className='topic-thumbnail-image' src={sub[1]}></img>
                </a>
                <div className='topic-thumbnail-desc'>
                  <div className='topic-thumbnail-desc-title'>
                    <h1>{sub[0].substring(1)}</h1>
                    
                    <p>published</p>
                  </div>
                  <div className='topic-thumbnail-link'>
                    <a href={sub[0]}>
                    <img  className='topic-down-arrow' src={DownArrow}/>
                    </a>
                  </div>
                </div>
              </div>)}

          </div>
        </div>
      </div>

    </div>
  )
}


export default Topics