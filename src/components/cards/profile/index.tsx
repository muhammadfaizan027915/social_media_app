"use client";

import UserAvatar from "@/components/userAvatar";
import TextField from "@/components/common/textField";
import SubmitButton from "@/components/common/submitButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { INITIAL_FORM_STATE } from "@/lib/constants";
import { updateUser } from "@/actions/user";
import { User } from "@/interfaces/types";
import { useFormState } from "react-dom";

type ProfileCardProps = {
    user?: User;
};

function ProfileCard({ user }: ProfileCardProps) {
    const [state, dispatch] = useFormState(updateUser, INITIAL_FORM_STATE);
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col space-y-6" action={dispatch}>
                    <UserAvatar
                        avatarTitle={user?.fullName}
                        avatarSubTitle={user?.emailAddress}
                        avatarProps={{ className: "w-32 h-32" }}
                    />

                    <TextField
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        errors={state?.errors?.fullName}
                        inputProps={{ defaultValue: user?.fullName }}
                    />

                    <TextField
                        id="emailAddress"
                        label="Email Address"
                        name="emailAddress"
                        errors={state?.errors?.emailAddress}
                        inputProps={{ defaultValue: user?.emailAddress }}
                    />

                    <TextField
                        id="website"
                        label="Website"
                        name="website"
                        inputProps={{ type: "url" }}
                        errors={state?.errors?.fullName}
                    />

                    <TextField id="bio" label="Bio" name="bio" errors={state?.errors?.bio} />

                    <SubmitButton>Save Changes</SubmitButton>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
