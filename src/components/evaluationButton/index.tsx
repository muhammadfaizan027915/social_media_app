"use client";
import { Button } from "../ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

type EvaluationButtonProps = {
    iconType: "like" | "dislike";
    evaluationCount?: number;
};

function EvaluationButton({ iconType, evaluationCount }: EvaluationButtonProps) {
    return (
        <div className="flex items-center gap-2">
            <Button variant={"ghost"} size={"sm"} className="p-0 hover:bg-none!important">
                {iconType === "like" ? <ThumbsUp size={20} /> : <ThumbsDown size={20} />}
            </Button>
            <p>{evaluationCount}k</p>
        </div>
    );
}

export default EvaluationButton;
