import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ContentCard from "../components/ContentCard";
import { useContentStore } from "../store/ContentStore";

const Urls = () => {
  const { contents, fetchContent } = useContentStore();

  useEffect(() => {
    fetchContent();
  }, []);

  const urlContent = contents.filter((item) => item?.contentType === "URL");

  return (
    <Layout title="URLs">
      {/* Stats */}
      <div className="mb-6">
        <p className="text-sm text-gray-400">{urlContent.length} links saved</p>
      </div>

      {/* Empty State */}
      {urlContent.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 mt-20">
          <div className="text-5xl mb-4">🔗</div>

          <p className="text-lg font-semibold">No Links Saved Yet</p>

          <p className="text-sm text-gray-400 mt-2">
            Save useful websites, articles, and resources.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
          {urlContent.map((item) => (
            <ContentCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Urls;
