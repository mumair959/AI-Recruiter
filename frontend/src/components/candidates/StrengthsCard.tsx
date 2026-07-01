interface Props {

    strengths: string[];

}

export default function StrengthsCard({

    strengths,

}: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="text-xl font-semibold mb-4">

                Strengths

            </h2>

            <ul className="list-disc ml-5">

                {strengths.map(strength => (

                    <li key={strength}>

                        {strength}

                    </li>

                ))}

            </ul>

        </div>

    );

}