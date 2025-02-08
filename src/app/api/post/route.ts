import { getDocuments } from "outstatic/server";

export const dynamic = 'force-static';

export const GET = async () => {
    return getDocuments('posts', ['title', "description", "slug"])
}