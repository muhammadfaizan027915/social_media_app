"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getNameInitials } from "@/lib/utils";
import { INITIAL_FORM_STATE } from "@/lib/constants";
import { createPost } from "@/actions/post";
import { User } from "@/interfaces/types";
import { useFormState } from "react-dom";

import UserAvatar from "@/components/userAvatar";
import TextField from "@/components/common/textField";
import SubmitButton from "@/components/common/submitButton";
import AlertMessage from "@/components/common/alertMessage";

type CreatePostProps = {
    user?: User | null;
    onSuccess?: () => void;
};

function CreatePost({ user, onSuccess }: CreatePostProps) {
    const [state, dispatch] = useFormState(createPost, INITIAL_FORM_STATE);

    const submitCreatePost = (formData: FormData) => {
        dispatch(formData);
        onSuccess?.();
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>Write what&lsquo;s in your mind ?</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4" action={submitCreatePost}>
                    {state.message && (
                        <AlertMessage type={state.success ? "success" : "danger"}>{state.message}</AlertMessage>
                    )}
                    <UserAvatar
                        avatarTitle={user?.fullName}
                        avatarSubTitle={user?.emailAddress}
                        avatarFallback={getNameInitials(user?.fullName)}
                        avatarUrl={user?.imageUrl}
                    />
                    <TextField
                        name="body"
                        type={"textarea"}
                        textareaProps={{ className: "h-44", maxLength: 300 }}
                        errors={state.errors?.body}
                    />
                    <div className="flex flex-col space-y-1.5">
                        <TextField
                            name="imageUrl"
                            label="Image URL (Optional)"
                            errors={state.errors?.imageUrl}
                            inputProps={{
                                id: "imageUrl",
                                placeholder: "htts://example.com/photo/123.jpg",
                            }}
                        />
                    </div>
                    <SubmitButton>Create Post</SubmitButton>
                </form>
            </CardContent>
        </Card>
    );
}

export default CreatePost;
