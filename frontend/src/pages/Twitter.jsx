import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ContentCard from "../components/ContentCard";
import { useContentStore } from "../store/ContentStore";

const Twitter = () => {
  const { contents, fetchContent } = useContentStore();

  useEffect(() => {
    fetchContent();
  }, []);

  const twitterContent = contents.filter(
    (item) => item?.contentType === "Twitter",
  );

  return (
    <Layout title="Twitter">
      {twitterContent.length === 0 ? (
        <div className=" mt-20">
          <div className="text-5xl mb-4">𝕏</div>

          <p className="text-lg font-semibold">No Tweets Saved Yet</p>

          <p className="text-sm text-gray-400 mt-2">
            Save valuable tweets and threads to your brain.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
          {twitterContent.map((item) => (
            <ContentCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Twitter;
