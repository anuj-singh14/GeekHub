require('dotenv').config();

const {
  MONGOURI,
  SECRETKEY,
  GITHUBCLIENTID,
  GITHUBCLIENTSECRET,
  GITHUBACCESSTOKEN,
} = process.env;

const config = {
  mongoURI: MONGOURI,
  jwtSecret: SECRETKEY,
  githubClientId: GITHUBCLIENTID,
  githubClientSecret: GITHUBCLIENTSECRET,
  githubAccessToken: GITHUBACCESSTOKEN,
};

module.exports = config;
