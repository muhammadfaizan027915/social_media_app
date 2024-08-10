import { Input, InputProps } from "@/components/ui/input";
import { Label, LabelProps } from "@radix-ui/react-label";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextFieldProps = Partial<{
    id: string;
    label: string;
    name: string;
    errors: string[];
    labelProps: LabelProps;
    inputProps: InputProps;
    textareaProps: TextareaProps;
    errorProps: HTMLAttributes<HTMLParagraphElement>;
    type: "input" | "textarea";
}>;

function TextField({
    id,
    type = "input",
    label,
    name,
    errors,
    labelProps,
    inputProps,
    textareaProps,
    errorProps,
}: TextFieldProps) {
    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor={id} {...labelProps}>
                {label}
            </Label>
            {type === "input" ? (
                <Input id={id} name={name} {...inputProps} />
            ) : (
                <Textarea name={name} {...textareaProps} />
            )}
            {errors?.map((error: string, index: number) => (
                <p key={index} {...errorProps} className={cn(["text-sm text-red-600", errorProps?.className])}>
                    {error}
                </p>
            ))}
        </div>
    );
}

export default TextField;
