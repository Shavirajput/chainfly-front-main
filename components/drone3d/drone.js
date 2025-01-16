import React from 'react';

const Drone3D = () => {
  return (
    <video width="100%" height="auto" controls>
      <source src="/static/drone.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Drone3D;
