import { Skeleton } from "@heroui/react";

const MessageSkeleton = () => {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div key={index} className={`max-w-xs mb-3 ${index % 2 === 0 ? "ml-auto" : ""}`}>
          <div className="flex items-end gap-2">
            {index % 2 !== 0 && <Skeleton className="w-8 h-8 rounded-full" />}
            <div className={`rounded-2xl px-4 py-2 ${index % 2 === 0 ? "bg-blue-50" : "bg-gray-50"}`}>
              <Skeleton className={index % 3 === 0 ? "w-64 h-3" : index % 3 === 1 ? "w-52 h-3" : "w-40 h-3"} />
              {index % 3 !== 2 && <Skeleton className={`mt-2 ${index % 2 === 0 ? "w-48 h-3" : "w-56 h-3"}`} />}
              {index % 4 === 0 && <Skeleton className="mt-2 w-32 h-3" />}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageSkeleton;
