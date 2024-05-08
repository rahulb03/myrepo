import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar, FaComment, FaMapMarkerAlt } from 'react-icons/fa'; // Import FaTelegram
import { RiSendPlaneFill} from 'react-icons/ri';
import './trainerpage.css';

const TrainerPage = ({ trainerData }) => {
  const [favorites, setFavorites] = useState([]);
  const [connectedTrainers, setConnectedTrainers] = useState([]);

  const handleFavoriteClick = (trainerId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(trainerId)
        ? prevFavorites.filter(id => id !== trainerId)
        : [...prevFavorites, trainerId]
    );
  };

  const handleConnectClick = (trainerId) => {
    setConnectedTrainers((prevConnected) =>
      prevConnected.includes(trainerId)
        ? prevConnected.filter(id => id !== trainerId)
        : [...prevConnected, trainerId]
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const trainersPerPage = 4;

  // Calculate index of first and last trainers for the current page
  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = trainerData.slice(indexOfFirstTrainer, indexOfLastTrainer);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="trainer-page">
      <div className="head">
        <div className='yellow-column'></div>
        <h3>Top Trainers</h3>
      </div>
     
      <div className="trainer-list">
        {trainerData.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <div className="card-header">
              <span className="ratings">
                {trainer.rating} <FaStar className="star-icon" />
              </span>
              <span className="heart-icon" onClick={() => handleFavoriteClick(trainer.id)}>
                {favorites.includes(trainer.id) ? (
                  <FaHeart style={{ transform: 'scale(1.2)' }} />
                ) : (
                  <FaRegHeart />
                )}
              </span>
            </div>
            <img className="trainer-image" src={trainer.image} alt={trainer.name} />
            <div className="card-body">
              <h4 className="trainer-name">{trainer.name}</h4>
              <button className="connect-button" onClick={() => handleConnectClick(trainer.id)}>
                {connectedTrainers.includes(trainer.id) ? <FaComment /> : (
                  <>
                   connect {/* Use FaTelegram and replace text with icon */}
                  </>
                )}
              </button>
              <button><RiSendPlaneFill/></button>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row">
          {currentTrainers.map((trainer, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <span className="ratings">
                    {trainer.rating} <FaStar className="star-icon" />
                  </span>
                </div>
                <div className="card-body">
                  <div className='information'>
                    <div className="ima">
                      <img className="trainer2-image" src={trainer.image} alt={trainer.name} />
                      <p className="trainer-name"> {trainer.name}</p>
                      <span className="location">
                        <FaMapMarkerAlt className="locations" /> {trainer.location}
                      </span>
                    </div>
                    <p className="card-text">About: {trainer.about}</p>
                  </div>
                  <div className="buttons">
                    <button className=''>Connect</button>
                    <button className=''>Message</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
          </li>
          {Array.from({ length: Math.ceil(trainerData.length / trainersPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === Math.ceil(trainerData.length / trainersPerPage) ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TrainerPage;
