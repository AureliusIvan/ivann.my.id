"use server"

const getGithubData = async () => {
  const response = await fetch('https://api.github.com/users/AureliusIvan',
      {
        next: {
          revalidate: 3600 * 24
        }
      }
  );
  return response.json();
}

export {getGithubData}