import { getNameInitials } from "@/lib/utils";
import { Post as FeedPost } from "@/interfaces/types";
import { Card, CardContent } from "@/components/ui/card";
import EvaluationButton from "@/components/evaluationButton";
import UserAvatar from "@/components/userAvatar";
import Image from "next/image";

type PostProps = {
    post: FeedPost;
};

function Post({ post }: PostProps) {
    const createdBy = post?.createdBy;
    return (
        <Card>
            <CardContent className="p-4">
                <UserAvatar
                    avatarUrl={createdBy?.imageUrl}
                    avatarTitle={createdBy?.fullName}
                    avatarSubTitle={createdBy?.emailAddress}
                    avatarFallback={getNameInitials(createdBy?.fullName)}
                />
                <div className="mt-6">
                    <p className="font-normal">{post?.body}</p>
                    {post?.imageUrl && (
                        <div className="flex justify-center bg-gray-50 mt-4 h-96 w-full relative">
                            <Image fill src={post.imageUrl} alt="Post Image" />
                        </div>
                    )}
                </div>
                <div className="flex gap-4 mt-4">
                    <EvaluationButton iconType={"like"} evaluationCount={10} />
                    <EvaluationButton iconType={"dislike"} evaluationCount={1} />
                </div>
            </CardContent>
        </Card>
    );
}

export default Post;
