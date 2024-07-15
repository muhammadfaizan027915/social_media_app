import { Card, CardContent } from "@/components/ui/card";
import EvaluationButton from "@/components/evaluationButton";
import UserAvatar from "@/components/userAvatar";
import Image from "next/image";

function Post() {
    return (
        <Card>
            <CardContent className="p-4">
                <UserAvatar />
                <div className="mt-6">
                    <p className="font-normal"></p>
                    <div className="flex justify-center bg-gray-50 mt-4 h-96 w-full relative">
                        <Image
                            fill
                            src="https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg"
                            alt="Post Image"
                            objectFit="contain"
                        />
                    </div>
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
