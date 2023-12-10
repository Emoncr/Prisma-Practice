

import Link from "next/link";

export default function Home() {
  return (

    <div className="p-10">
      <h2>I'm showing how to prevent access to that dashboard without login</h2>
      <div className="mt-10">

        <Link className="px-5 py-3 bg-amber-600" href="/dashboard" >Go to Dashboard</Link>
      </div>
    </div>

  );
}
