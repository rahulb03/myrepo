import React, { useState } from 'react';
import TrainerPage from './trainerpage';
import Job from './job';
import Message from './message';
import { BsSearch, BsFilter } from 'react-icons/bs';
import './trainer.css'; // Import CSS file for styling
import imageArray from './imagearray';
const Trainer = () => {
  const [activeTab, setActiveTab] = useState('trainers');

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const trainerData = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4.5,
      image: imageArray[10],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",

      location:"surat"
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4.8,
      image: imageArray[11],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

    },
    {
      id: 1,
      name: 'John Doe',
      rating: 4.5,
      image: imageArray[10],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4.8,
      image: imageArray[11],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

     
    },
   
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4.8,
      image: imageArray[11],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

    },
    {
      id: 1,
      name: 'John Doe',
      rating: 4.5,
      image: imageArray[10],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4.8,
      image: imageArray[11],
      about: "The report of the excavation concluded that there were ruins of a massive structure beneath the ruins of the mosque which was indicative of remains which are distinctive features found associated with the temples of north India, but did not conclusively conclude that the structure was a temple, nor did the survey .",
      location:"surat"

     
    },
   
   
  ];

  

  return (
    <div>
      <div className="col text-start">
        <h1>Trainers</h1>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <button className={`nav-link btn ${activeTab === 'trainers' ? 'active' : ''}`} onClick={() => handleTabClick('trainers')}>Trainers</button>
    </li>
    <li className="nav-item">
      <button className={`nav-link btn ${activeTab === 'job' ? 'active' : ''}`} onClick={() => handleTabClick('job')}>Job</button>
    </li>
    <li className="nav-item"> 
      <button className={`nav-link btn ${activeTab === 'message' ? 'active' : ''}`} onClick={() => handleTabClick('message')}>Message</button>
    </li>
  </ul>
</nav>



      <div className="input-group">
      
      <span className="input-group-text"><BsSearch /></span> 
      <input type="text" className="form-control" placeholder="Search..." aria-label="Search"  />
      <button className="input-filter btn btn-outline-secondary" type="button" id="button-addon2"><BsFilter /></button> 
      
      </div>

     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imageArray[8]} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imageArray[9]} className="d-block w-100" alt="..." />
    </div>
    
  </div>
</div> 
      
      <div className="contain ">
        {activeTab === 'trainers' && <TrainerPage trainerData= {trainerData} />}
        {activeTab === 'job' && <Job />}
        {activeTab === 'message' && <Message />}
      </div>
    </div>
  );
}

export default Trainer;
