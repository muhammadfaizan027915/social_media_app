import { Card, CardContent, CardFooter } from "@/components/ui/card";
import UserAvatar from "@/components/userAvatar";

function Post() {
    return (
        <Card>
            <CardContent className="p-4">
                <UserAvatar />
                <div className="mt-6">
                    <p className="font-normal">
                        WEBHere's a UI design of a real, implemented blog (https://www.nordicrose.net). Contents: •
                        Brief readme artboard • Front page / list page (desktop and mobile) • Article page (desktop and
                        mobile) Feel free to play around with … WEBHere's a UI design of a real, implemented blog
                        (https://www.nordicrose.net). Contents: • Brief readme artboard • Front page / list page
                        (desktop and mobile) • Article page (desktop and mobile) Feel free to play around with …
                        WEBHere's a UI design of a real, implemented blog (https://www.nordicrose.net). Contents: •
                        Brief readme artboard • Front page / list page (desktop and mobile) • Article page (desktop and
                        mobile) Feel free to play around with … WEBHere's a UI design of a real, implemented blog
                        (https://www.nordicrose.net). Contents: • Brief readme artboard • Front page / list page
                        (desktop and mobile) • Article page (desktop and mobile) Feel free to play around with …
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                
            </CardFooter>
        </Card>
    );
}

export default Post;
