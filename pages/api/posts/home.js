
import { getAllPostsForHome } from "../../../lib/api";

/**
 * Get posts for home page
 */
export default async function homePosts(req, res) {
	const  allPosts  = await getAllPostsForHome(false);
	res.json({ allPosts });
}
