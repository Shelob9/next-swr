import { getPostAndMorePosts } from "../../../lib/api";

/**
 * Get post by slug
 */
export default async function post(req, res) {
	const { slug } = req.query;
	const { post, posts } = await getPostAndMorePosts(slug, false);
	res.json({ slug, post, posts });
}
