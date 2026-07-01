import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {candidateSchema, type CandidateFormData} from "../../types/candidate.schema";

interface Props {
    onSubmit: (data: CandidateFormData) => void;
    loading?: boolean;
}

export default function CandidateForm({onSubmit, loading = false}: Props) {

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm<CandidateFormData>({

        resolver: zodResolver(candidateSchema),

    });

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >

            <div>

                <label>Name</label>

                <input
                    {...register("name")}
                    className="border rounded w-full p-2"
                />

                <p className="text-red-500 text-sm">
                    {errors.name?.message}
                </p>

            </div>

            <div>

                <label>Email</label>

                <input
                    {...register("email")}
                    className="border rounded w-full p-2"
                />

                <p className="text-red-500 text-sm">
                    {errors.email?.message}
                </p>

            </div>

            <div>

                <label>Phone</label>

                <input
                    {...register("phone")}
                    className="border rounded w-full p-2"
                />

                <p className="text-red-500 text-sm">
                    {errors.phone?.message}
                </p>

            </div>

            <button
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >

                {loading
                    ? "Creating..."
                    : "Create Candidate"}

            </button>

        </form>

    );

}