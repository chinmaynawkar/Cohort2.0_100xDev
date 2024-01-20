import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaHeart, FaImage } from 'react-icons/fa';
import avatarImg from '../assets/sukuna.png';
import coverImg from '../assets/photo.avif';

const ProfileItems = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 100px; 
  position: relative;
  overflow: hidden; /* Hide overflow for the rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added a subtle shadow */
`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden; /* Hide overflow for the rounded corners */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const ProfileInfo = styled.div`
  padding: 20px;
`;

const Location = styled.p`
  margin-top: 10px;
`;

const LocationLine = styled.hr`
  border: 1px solid #ddd;
  margin: 15px 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const StatItem = styled.span`
  color: #666;
  font-weight: bold;
  margin: 5px 0;
`;

const FollowersIcon = styled(FaUsers)`
  margin-right: 5px;
`;

const LikesIcon = styled(FaHeart)`
  margin-right: 5px;
`;

const PhotosIcon = styled(FaImage)`
  margin-right: 5px;
`;

function Profile() {
  const user = {
    name: 'Chinmay Nawkar',
    avatar: avatarImg,
    location: 'Pune, In',
    followers: 5400,
    likes: 5678,
    photos: 40,
  };

  return (
    <ProfileItems>
      <CoverContainer>
        <CoverImage src={coverImg} alt="Cover Image" />
        <Avatar src={user.avatar} alt={user.name} />
      </CoverContainer>
      <ProfileInfo>
        <h1>{user.name}</h1>
        <Location>{user.location}</Location>
        <LocationLine />
        <Stats>
          <StatItem>
            <FollowersIcon /> {user.followers}
          </StatItem>
          <StatItem>
            <LikesIcon /> {user.likes}
          </StatItem>
          <StatItem>
            <PhotosIcon /> {user.photos}
          </StatItem>
        </Stats>
      </ProfileInfo>
    </ProfileItems>
  );
}

export default Profile;
