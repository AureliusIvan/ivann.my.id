"use server"

import { promises as fs } from 'fs';


const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/AureliusIvan',
        {
            mode: 'cors',
            next: {
                revalidate: 3600 * 24
            }
        }
    );
    return response.json();
}

const getAllSlugs = async () => {
    const postsDirectory = process.cwd() + '/src/posts';
    const filenames = await fs.readdir(postsDirectory);
    return filenames.map(filename => {
        return filename.replace(/\.md$/, '');
    });
}

export {
    getGithubData,
    getAllSlugs
}
