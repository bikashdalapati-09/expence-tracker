import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function About() {
  const [data, setData] = useState(null);
  const [follow, setFollow] = useState("Follow");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const info = await fetch("https://api.github.com/users/bikashdalapati-09");
    const resData = await info.json();
    setData(resData);
  };

  if (data === null) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        {/* TOP SECTION */}
        <div className="flex gap-8">
          {/* LEFT SIDEBAR (Avatar + Info) */}
          <div className="w-1/4">
            <img
              src={data.avatar_url}
              alt="avatar"
              className="w-48 h-48 rounded-full border"
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-900">
              Bikash Dalapati
            </h1>

            <p className="text-gray-500 text-lg">@bikashdalapati-09</p>

            <button
              className="mt-4 w-full border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFollow("Followed");
              }}
            >
              {follow}
            </button>

            <div className="flex gap-4 mt-4 text-sm text-gray-600">
              <span>
                <strong className="text-gray-900">{data.followers}</strong>{" "}
                followers
              </span>
              <span>
                <strong className="text-gray-900">{data.following}</strong>{" "}
                following
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-3/4">
            {/* STATS BAR */}
            <div className="flex gap-6 border-b pb-4 text-sm text-gray-600">
              <span>
                <strong className="text-gray-900">{data.public_repos}</strong>{" "}
                Repositories
              </span>
              <span>
                <strong className="text-gray-900">{data.public_gists}</strong>{" "}
                Gists
              </span>
              <span>
                <strong className="text-gray-900">{data.followers}</strong>{" "}
                Followers
              </span>
            </div>

            {/* PLACEHOLDER FOR REPOS */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">
                Popular repositories
              </h2>

              <div className="grid grid-cols-2 gap-4 cursor-pointer">
                <div className="border rounded-md p-4 hover:bg-gray-50">
                  <h3 className="font-semibold text-blue-600">
                    expence-tracker
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Track your daily expense in real life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
