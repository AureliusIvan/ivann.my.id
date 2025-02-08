"use server";

import { getDocuments } from 'outstatic/server'

async function getPostData() {
    return getDocuments('posts', ['title', "description", "slug"])
}

export { getPostData }
