import axios from 'axios';

const getGithubData = async () => {
  // return await fetch('https://api.github.com/users/AureliusIvan');
  return await axios.get('https://api.github.com/users/AureliusIvan');
}

export {getGithubData}