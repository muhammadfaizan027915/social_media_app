import PostFeed from "@/components/userFeed";
import CreatePostTrigger from "@/components/cards/createPostTrigger";
import { PAGE_SIZE_OF_POSTS } from "@/lib/constants";
import { getInitialPosts } from "@/lib/api";

async function Feed() {
    const response = await getInitialPosts(PAGE_SIZE_OF_POSTS);
    const totalPosts = response?.totalPosts;
    const initialPosts = response?.posts;

    return (
        <div className="flex flex-col gap-4">
            <CreatePostTrigger />
            <PostFeed initialPosts={initialPosts} totalPosts={totalPosts} />
        </div>
    );
}

export default Feed;
