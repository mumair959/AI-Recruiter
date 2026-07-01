import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, type JobFormData } from "../../types/job.schema";

interface Props {
    onSubmit: (data: JobFormData) => void;
    loading?: boolean;
}

export default function JobForm({onSubmit, loading = false}: Props) {

    const {

        register,

        handleSubmit,

        formState: { errors },

    } = useForm<JobFormData>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            status: "Open",
            experience_years: 0,
        },
    });

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div>

                <label>Title</label>

                <input
                    {...register("title")}
                    className="border w-full p-2 rounded"
                />

                <p className="text-red-500 text-sm">
                    {errors.title?.message}
                </p>

            </div>

            <div>

                <label>Department</label>

                <input
                    {...register("department")}
                    className="border w-full p-2 rounded"
                />

            </div>

            <div>

                <label>Location</label>

                <input
                    {...register("location")}
                    className="border w-full p-2 rounded"
                />

            </div>

            <div>

                <label>Experience (Years)</label>

                <input
                    type="number"
                    {...register("experience_years")}
                    className="border w-full p-2 rounded"
                />

            </div>

            <div>

                <label>Description</label>

                <textarea
                    rows={6}
                    {...register("description")}
                    className="border w-full p-2 rounded"
                />

            </div>

            <div>

                <label>Requirements</label>

                <textarea
                    rows={4}
                    {...register("requirements")}
                    className="border w-full p-2 rounded"
                />

            </div>

            <button
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                {loading ? "Creating..." : "Create Job"}
            </button>

        </form>

    );

}