import PostFeed from "@/components/userFeed";
import CreatePostTrigger from "@/components/cards/createPostTrigger";
import { INITIAL_NUMBER_OF_POSTS } from "@/lib/constants";
import { getPosts } from "@/lib/api";



async function Feed() {
    const initialPosts = await getPosts(0, INITIAL_NUMBER_OF_POSTS);

    return (
        <div className="flex flex-col gap-4">
            <CreatePostTrigger />
            <PostFeed initialPosts={initialPosts} />
        </div>
    );
}

export default Feed;
