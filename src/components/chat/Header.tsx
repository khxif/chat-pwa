import { ArrowLeft, EllipsisVertical } from "lucide-react";

export default function Header() {
  return (
    <header
      className="max-w-6xl mx-auto py-5 flex flex-col space-y-4 border-b bg-[#E5E5E0]
    sticky top-0 left-0 w-full border-b-primary-gray/50 z-50 px-4 md:px-0 "
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center space-x-4">
          <ArrowLeft className="size-6 cursor-pointer" />
          <h1 className="text-xl md:text-2xl font-bold">Trip No. 31</h1>
        </span>

        <span>
          <img src="/edit.png" alt="icon" className="size-5 md:size-6 cursor-pointer" />
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
            alt="profile-pic"
            loading="lazy"
            className="rounded-full size-12 md:size-16"
          />
          <span className="flex flex-col space-y-1">
            <span className="flex items-center space-x-2 font-medium text-base md:text-xl">
              <h2 className="text-primary-gray ">From</h2>
              <h1>Marathahalli</h1>
            </span>

            <span className="flex items-center space-x-2 font-medium text-base md:text-xl">
              <h2 className="text-primary-gray ">To</h2>
              <h1>Koramangala</h1>
            </span>
          </span>
        </div>

        <EllipsisVertical className="size-6 md:size-7 cursor-pointer" />
      </div>
    </header>
  );
}
