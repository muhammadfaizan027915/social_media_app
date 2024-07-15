import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@/components/ui/button";

function SubmitButton({ children, ...props }: ButtonProps) {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} {...props}>
            {pending ? "Submitting..." : children}
        </Button>
    );
}

export default SubmitButton;
