interface Props {
    education: string[];
}

export default function EducationCard({ education }: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="text-xl font-semibold mb-4">
                Education
            </h2>

            <ul className="list-disc ml-5">

                {education.map(item => (

                    <li key={item}>
                        {item}
                    </li>

                ))}

            </ul>

        </div>

    );

}