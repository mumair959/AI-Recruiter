interface Props {
    skills: string[];
}

export default function SkillsCard({

    skills,

}: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="font-bold mb-4">

                Skills

            </h2>

            <div className="flex flex-wrap gap-2">

                {skills.map(skill => (

                    <span

                        key={skill}

                        className="bg-blue-100 text-blue-700 rounded-full px-3 py-1"

                    >

                        {skill}

                    </span>

                ))}

            </div>

        </div>

    );

}