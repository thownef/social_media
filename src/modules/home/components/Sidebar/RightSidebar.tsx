import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Divider } from "@heroui/react";

type Friend = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  actionIcon: string;
};

const SUGGESTED_FRIENDS: Friend[] = [
  {
    id: "olivia-anderson",
    name: "Olivia Anderson",
    role: "Financial Analyst",
    avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/o2m8kqtl_expires_30_days.png",
    actionIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/sk03vial_expires_30_days.png",
  },
  {
    id: "thomas-baker",
    name: "Thomas Baker",
    role: "Project Manager",
    avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/hs3ohgv8_expires_30_days.png",
    actionIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/ldp2audm_expires_30_days.png",
  },
  {
    id: "lily-lee",
    name: "Lily Lee",
    role: "Graphic Designer",
    avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/sb8kglex_expires_30_days.png",
    actionIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/j8vn0fd7_expires_30_days.png",
  },
  {
    id: "andrew-harris",
    name: "Andrew Harris",
    role: "Data Scientist",
    avatar: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/wqo2f9ja_expires_30_days.png",
    actionIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/xth6w17h_expires_30_days.png",
  },
];

const RightSidebar = () => {
  return (
    <div className="flex flex-col items-end max-h-[calc(100vh-76px)] overflow-y-auto">
      <div className="flex flex-col items-start bg-white w-full py-6 rounded-lg border border-solid border-[#ECF0F5]">
        <span className="text-[#0C1024] text-base font-bold ml-10">Suggested Friends</span>
        <Divider className="my-4" />
        {SUGGESTED_FRIENDS.map((friend, idx) => (
          <div className={`flex justify-between items-center self-stretch mx-8${idx !== SUGGESTED_FRIENDS.length - 1 ? " mb-6" : ""}`}>
            <div className="flex shrink-0 items-center gap-4">
              <img src={friend.avatar} alt={`${friend.name} avatar`} className="w-14 h-14 object-fill" loading="lazy" />
              <div className="flex flex-col shrink-0 items-start gap-1.5">
                <span className="text-[#0C1024] text-sm font-bold">{friend.name}</span>
                <span className="text-[#27364B] text-xs">{friend.role}</span>
              </div>
            </div>
            <Button isIconOnly size="sm" radius="sm" variant="flat" className="w-8 h-8">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
