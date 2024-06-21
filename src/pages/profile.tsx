import React from 'react';

import { Container, Typography, Avatar, Box } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          alt="User Name"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          User Name
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Software Developer | Enthusiast | Learner
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">
            Hi, I&apos;m a passionate software developer with a knack for
            creating elegant solutions in the least amount of time. Experienced
            in various technologies and always eager to learn more. In my free
            time, I enjoy exploring new tools and frameworks, contributing to
            open source projects, and writing technical articles.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
