interface Experience {

    title: string;

    company: string;

}

interface Props {

    experience: Experience[];

}

export default function ExperienceHistoryCard({

    experience,

}: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="text-xl font-semibold mb-4">

                Experience History

            </h2>

            <div className="space-y-4">

                {experience.map((job, index) => (

                    <div
                        key={index}
                        className="border-b pb-3"
                    >

                        <h3 className="font-semibold">

                            {job.title}

                        </h3>

                        <p className="text-gray-500">

                            {job.company}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}