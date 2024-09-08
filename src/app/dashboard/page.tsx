"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaCalendarAlt, FaHistory } from 'react-icons/fa'; 
import { IoMdArrowForward } from 'react-icons/io'; 


const shinyEffect = `
  @keyframes shiny {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  dashboard: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#f0f4f8',
    position: 'relative',
  },
  sidebar: {
    width: '250px',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#003366', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  shinyOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)',
    backgroundSize: '200% 100%',
    animation: 'shiny 5s linear infinite', 
    pointerEvents: 'none', 
  },
  logo: {
    fontSize: '24px',
    margin: '20px 0',
    fontWeight: 'bold', 
    textAlign: 'center', 
    borderBottom: '2px solid #fff', 
    paddingBottom: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  navItem: {
    margin: '10px 0',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
  navLinkHover: {
    backgroundColor: '#add8e6', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  topImageContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    marginBottom: '20px',
    overflow: 'hidden',
  },
  topImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  timeBox: {
    marginBottom: '20px',
  },
  time: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#003366',
  },
  date: {
    fontSize: '18px',
    color: '#666',
  },
  loading: {
    fontSize: '18px',
    color: '#999',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
  },
  action: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    width: '250px', 
    height: '130px', 
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#00509e',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  actionHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  actionImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  actionImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  actionText: {
    position: 'absolute',
    bottom: '10px',
    left: '0',
    width: '100%',
    color: '#fff',
    fontSize: '18px', 
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 0',
    transition: 'transform 0.3s ease',
  },
  newMeeting: {
    backgroundColor: '#00509e',
  },
  scheduleMeeting: {
    backgroundColor: '#808080',
  },
  viewRecordings: {
    backgroundColor: '#004080',
  },
  joinMeeting: {
    backgroundColor: '#003366',
  },
  bottomRightImage: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
  },
  bottomRightImageIcon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

const Dashboard = () => {
  const [time, setTime] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/meet2.jpeg",
    "/images/meet1.png",
    "/images/meet3.jpeg",
    "/images/schedulmeet.jpeg",
    "/images/meet4.jpeg",
    "/images/record.png",
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-IN', { hour12: true });
      const formattedDate = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      setTime(`${formattedTime} - ${formattedDate}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const imageSliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageSliderInterval);
  }, [images.length]);

  const applyHoverStyles = (event: React.MouseEvent<HTMLDivElement>, isHovered: boolean) => {
    const target = event.currentTarget;
    const text = target.querySelector('span') as HTMLSpanElement;

    if (isHovered) {
      target.style.transform = 'scale(1.05)';
      target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
      text.style.transform = 'translateY(-10px)';
    } else {
      target.style.transform = 'scale(1)';
      target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      text.style.transform = 'translateY(0)';
    }
  };

  const applyNavLinkHoverStyles = (event: React.MouseEvent<HTMLAnchorElement>, isHovered: boolean) => {
    const target = event.currentTarget;

    if (isHovered) {
      Object.assign(target.style, styles.navLinkHover);
    } else {
      target.style.backgroundColor = 'transparent';
      target.style.boxShadow = 'none';
    }
  };

  return (
    <>
      <style>{shinyEffect}</style> 
      <div style={styles.dashboard}>
        <div style={styles.sidebar}>
          <div style={styles.shinyOverlay} /> 
          <h1 style={styles.logo}>Yoom</h1>
          <nav>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <Link href="/home" style={styles.navLink} onMouseEnter={(e) => applyNavLinkHoverStyles(e, true)} onMouseLeave={(e) => applyNavLinkHoverStyles(e, false)}>
                  <FaHome style={{ marginRight: '10px', fontSize: '20px' }} /> Home
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link href="/upcoming" style={styles.navLink} onMouseEnter={(e) => applyNavLinkHoverStyles(e, true)} onMouseLeave={(e) => applyNavLinkHoverStyles(e, false)}>
                  <FaCalendarAlt style={{ marginRight: '10px', fontSize: '20px' }} /> Upcoming
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link href="/previous" style={styles.navLink} onMouseEnter={(e) => applyNavLinkHoverStyles(e, true)} onMouseLeave={(e) => applyNavLinkHoverStyles(e, false)}>
                  <FaHistory style={{ marginRight: '10px', fontSize: '20px' }} /> Previous
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={styles.mainContent}>
          <div style={styles.topImageContainer}>
            <Image src={images[currentImageIndex]} alt="Top Image" layout="fill" objectFit="cover" style={styles.topImage} />
          </div>
          <div style={styles.timeBox}>
            {time ? (
              <>
                <div style={styles.time}>{time.split(' - ')[0]}</div>
                <div style={styles.date}>{time.split(' - ')[1]}</div>
              </>
            ) : (
              <div style={styles.loading}>Loading...</div>
            )}
          </div>
          <div style={styles.actions}>
            <div
              style={{ ...styles.action, ...styles.newMeeting }}
              onMouseEnter={(e) => applyHoverStyles(e, true)}
              onMouseLeave={(e) => applyHoverStyles(e, false)}
            >
              <div style={styles.actionImageContainer}>
                <Image src="/images/meet2.jpeg" alt="New Meeting" layout="fill" objectFit="cover" style={styles.actionImage} />
              </div>
              <span style={styles.actionText}>New Meeting</span>
            </div>
            <div
              style={{ ...styles.action, ...styles.scheduleMeeting }}
              onMouseEnter={(e) => applyHoverStyles(e, true)}
              onMouseLeave={(e) => applyHoverStyles(e, false)}
            >
              <div style={styles.actionImageContainer}>
                <Image src="/images/meet1.png" alt="Schedule Meeting" layout="fill" objectFit="cover" style={styles.actionImage} />
              </div>
              <span style={styles.actionText}>Schedule Meeting</span>
            </div>
            <div
              style={{ ...styles.action, ...styles.viewRecordings }}
              onMouseEnter={(e) => applyHoverStyles(e, true)}
              onMouseLeave={(e) => applyHoverStyles(e, false)}
            >
              <div style={styles.actionImageContainer}>
                <Image src="/images/meet3.jpeg" alt="View Recordings" layout="fill" objectFit="cover" style={styles.actionImage} />
              </div>
              <span style={styles.actionText}>View Recordings</span>
            </div>
            <div
              style={{ ...styles.action, ...styles.joinMeeting }}
              onMouseEnter={(e) => applyHoverStyles(e, true)}
              onMouseLeave={(e) => applyHoverStyles(e, false)}
            >
              <div style={styles.actionImageContainer}>
                <Image src="/images/schedulmeet.jpeg" alt="Join Meeting" layout="fill" objectFit="cover" style={styles.actionImage} />
              </div>
              <span style={styles.actionText}>Join Meeting</span>
            </div>
          </div>
        </div>
        <div style={styles.bottomRightImage}>
          <Image src="/images/videoconf.png" alt="Bottom Right" layout="fill" objectFit="cover" style={styles.bottomRightImageIcon} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
