import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import './style.css';

export function ProfileCard() {
  const teachers = [
    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/about.jpg",
    },
    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/",
    },
    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/",
    },
    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/",
    },
    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/",
    },

    {
      name: "Natalie Paisley",
      qualification: "CEO / Co-Founder",
      imageUrl: "/images/",
    },
  ];

  return (
    <>
      <div className="header-container">
        <h1>Our Teachers</h1>
      </div>

      <div className="grid-container">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <div className="image-container">
              <Image src={teacher.imageUrl} alt="profile-picture" layout="fill" objectFit="cover" />
            </div>
            <div className="info-container">
              <h4>{teacher.name}</h4>
              <p>{teacher.qualification}</p>
            </div>
            <div className="social-icons">
              {/* Add social icons here */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
