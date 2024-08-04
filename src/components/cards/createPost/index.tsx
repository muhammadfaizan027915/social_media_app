import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getNameInitials } from "@/lib/utils";
import { User } from "@/interfaces/types";
import UserAvatar from "@/components/userAvatar";

type CreatePostProps = {
    user?: User | null;
};

function CreatePost({ user }: CreatePostProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Write what&lsquo;s in your mind ?</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <UserAvatar
                        avatarTitle={user?.fullName}
                        avatarSubTitle={user?.emailAddress}
                        avatarFallback={getNameInitials(user?.fullName)}
                        avatarUrl={user?.imageUrl}            
                    />
                    <Textarea className="h-44" maxLength={300} name="content" />
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="imageUrl">Image URL (Optional)</Label>
                        <Input placeholder="htts://example.com/photo/123.jpg" id="imageUrl" name="imageUrl" />
                    </div>
                    <Button>Create Post</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default CreatePost;
