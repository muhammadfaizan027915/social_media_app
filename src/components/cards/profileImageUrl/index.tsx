import SubmitButton from "@/components/common/submitButton";
import TextField from "@/components/common/textField";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { updateUser } from "@/actions/user";

type ProfileImageUrlProps = {
    defaultProfileImageUrl?: string;
    onSuccess?: () => void;
};

function ProfileImageUrl({ defaultProfileImageUrl, onSuccess }: ProfileImageUrlProps) {
    const onSubmit = async (formData: FormData) => {
        const result = await updateUser(undefined, formData);
        if (!result?.errors) {
            onSuccess?.();
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Change Profile Image</CardTitle>
                <CardDescription>Paste profile image here to change.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={onSubmit} className="flex flex-col gap-2">
                    <TextField
                        inputProps={{
                            type: "url",
                            name: "imageUrl",
                            placeholder: "Paste image URL here.",
                            defaultValue: defaultProfileImageUrl,
                        }}
                    />
                    <SubmitButton>Save Changes</SubmitButton>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProfileImageUrl;
