export default function DashboardPage() {

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-4">

        <div className="border p-4 rounded-lg">
          <p>Total Jobs</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>

        <div className="border p-4 rounded-lg">
          <p>Total Candidates</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>

        <div className="border p-4 rounded-lg">
          <p>Applications</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>

        <div className="border p-4 rounded-lg">
          <p>Matches</p>
          <h3 className="text-2xl font-bold">0</h3>
        </div>

      </div>

    </div>
  );
}