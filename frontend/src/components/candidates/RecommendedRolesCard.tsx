interface Props {

    roles: string[];

}

export default function RecommendedRolesCard({

    roles,

}: Props) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="text-xl font-semibold mb-4">

                Recommended Roles

            </h2>

            <ul className="list-disc ml-5">

                {roles.map(role => (

                    <li key={role}>

                        {role}

                    </li>

                ))}

            </ul>

        </div>

    );

}