import CreatePostModal from "@/components/modals/createPost";
import { getUserProfile } from "@/lib/api";

async function CreatePost() {
    const user = await getUserProfile();
    return <CreatePostModal user={user} />;
}

export default CreatePost;
