import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserAvatar from "@/components/userAvatar";

function CreatePost() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Write what&lsquo;s in your mind ?</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <UserAvatar />
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
