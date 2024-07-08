import Post from "@/components/cards/post";
import CreatePostTrigger from "@/components/cards/createPostTrigger";

function Feed() {
    return (
        <div className="flex flex-col gap-4">
            <CreatePostTrigger />
            <Post />
        </div>
    );
}

export default Feed;
