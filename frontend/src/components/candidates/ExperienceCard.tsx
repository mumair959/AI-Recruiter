import type { CandidateProfile } from "../../types/candidate";

export default function ExperienceCard({

    profile,

}: {

    profile: CandidateProfile;

}) {

    return (

        <div className="border rounded-lg p-6">

            <h2 className="font-bold mb-4">

                Experience

            </h2>

            <p>
                <strong>Total Years: </strong> {profile.experience_years} Years
            </p>

            <p>
                <strong>Career Level: </strong> {profile.seniority}
            </p>

        </div>

    );

}