import UserAvatar from "@/components/userAvatar";
import TextField from "@/components/common/textField";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/interfaces/types";

type ProfileCardProps = {
    user?: User;
};

function ProfileCard({ user }: ProfileCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col space-y-6">
                    <UserAvatar
                        avatarTitle={user?.fullName}
                        avatarSubTitle={user?.emailAddress}
                        avatarProps={{ className: "w-32 h-32" }}
                    />

                    <TextField
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        inputProps={{ value: "Muhammad Faizan" }}
                    />

                    <TextField
                        id="emailAddress"
                        label="Email Address"
                        name="emailAddress"
                        inputProps={{ value: "muhammadfaizan027915@gmail.com", disabled: true }}
                    />

                    <TextField id="website" label="Website" name="website" inputProps={{ type: "url" }} />

                    <TextField id="bio" label="Bio" name="bio" />

                    <Button>Save Changes</Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
