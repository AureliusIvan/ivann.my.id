import { getDocuments } from "outstatic/server";

export const dynamic = 'force-static';

export const GET = async () => {
    // return res.json(result)
    return getDocuments('posts', ['title', "description", "slug"])
}