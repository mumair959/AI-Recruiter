export interface InterviewQuestionItem {
    question: string;
    answer: string;
}

export interface InterviewQuestion {
    id: number;
    application_id: number;
    technical_questions: InterviewQuestionItem[];
    behavioral_questions: InterviewQuestionItem[];
    follow_up_questions: InterviewQuestionItem[];
    evaluation_notes: string;
}