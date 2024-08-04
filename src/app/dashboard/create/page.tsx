import CreatePost from "@/components/cards/createPost";
import { getUserProfile } from "@/lib/api";

async function Create() {
    const user = await getUserProfile();
    return (
        <div className="max-w-[798px] mx-auto">
            <CreatePost user={user} />
        </div>
    );
}

export default Create;
