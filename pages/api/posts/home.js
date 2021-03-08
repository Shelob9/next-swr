
import { getAllPostsForHome } from "../../../lib/api";

/**
 * Get posts for home page
 */
export default async function homePosts(req, res) {
    const allPosts = await getAllPostsForHome(false);
    res.setHeader('Cache-Control', 's-maxage=360, stale-while-revalidate');
	res.json({ allPosts });
}
