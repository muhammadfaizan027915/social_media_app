import { Input, InputProps } from "@/components/ui/input";
import { Label, LabelProps } from "@radix-ui/react-label";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextFieldProps = Partial<{
    id: string;
    label: string;
    name: string;
    errors: string[];
    labelProps: LabelProps;
    inputProps: InputProps;
    errorProps: HTMLAttributes<HTMLParagraphElement>;
}>;

function TextField({ id, label, name, errors, labelProps, inputProps, errorProps }: TextFieldProps) {
    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor={id} {...labelProps}>
                {label}
            </Label>
            <Input id={id} name={name} {...inputProps} />
            {errors?.map((error: string, index: number) => (
                <p key={index} {...errorProps} className={cn(["text-sm text-red-600", errorProps?.className])}>
                    {error}
                </p>
            ))}
        </div>
    );
}

export default TextField;
