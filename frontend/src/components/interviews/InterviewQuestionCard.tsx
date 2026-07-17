import { Button } from "../ui/button";

import type { InterviewQuestion } from "../../types/interview-question";

interface Props {

    interview: InterviewQuestion | null | undefined;

    isGenerating: boolean;

    onGenerate: () => void;

}

export default function InterviewQuestionCard({interview, isGenerating, onGenerate}: Props) {

    if (!interview || interview == undefined || Object.keys(interview).length === 0) {
        return (

            <div className="border rounded-lg p-6 bg-white shadow">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-xl font-bold">

                            AI Interview Assistant

                        </h2>

                        <p className="text-gray-500 mt-1">

                            Generate interview questions tailored for this candidate.

                        </p>

                    </div>

                    <Button
                        onClick={onGenerate}
                        disabled={isGenerating}
                    >
                        {isGenerating
                            ? "Generating..."
                            : "Generate Questions"}
                    </Button>

                </div>

            </div>

        );

    }

    return (

        <div className="border rounded-lg p-6 bg-white shadow">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-xl font-bold">

                        AI Interview Assistant

                    </h2>

                    <p className="text-gray-500">

                        AI-generated interview plan

                    </p>

                </div>

                <Button
                    variant="outline"
                    onClick={onGenerate}
                    disabled={isGenerating}
                >
                    Regenerate
                </Button>

            </div>

            <div className="space-y-6">

                <section>

                    <h3 className="font-semibold mb-3">

                        Technical Questions

                    </h3>

                    <ol className="list-decimal ml-5 space-y-2">

                        {interview.technical_questions.map((item) => (
                            <div key={item.question} className="mb-4">
                                <p className="font-medium">{item.question}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Expected Answer: {item.answer}
                                </p>
                            </div>
                        ))}

                    </ol>

                </section>

                <section>

                    <h3 className="font-semibold mb-3">

                        Behavioral Questions

                    </h3>

                    <ol className="list-decimal ml-5 space-y-2">
                        {interview.behavioral_questions.map((item) => (
                            <div key={item.question} className="mb-4">
                                <p className="font-medium">{item.question}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Expected Answer: {item.answer}
                                </p>
                            </div>
                        ))}
                    </ol>

                </section>

                <section>

                    <h3 className="font-semibold mb-3">

                        Follow-up Questions

                    </h3>

                    <ol className="list-decimal ml-5 space-y-2">
                        {interview.follow_up_questions.map((item) => (
                            <div key={item.question} className="mb-4">
                                <p className="font-medium">{item.question}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Expected Answer: {item.answer}
                                </p>
                            </div>
                        ))}
                    </ol>

                </section>

                <section>

                    <h3 className="font-semibold mb-3">

                        Evaluation Notes

                    </h3>

                    <p className="text-gray-700">

                        {interview.evaluation_notes}

                    </p>

                </section>

            </div>

        </div>

    );

}