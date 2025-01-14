import { cn } from "@/lib/utils";

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

const ProfilePhoto = ({
  src = "https://dummyimage.com/400/8A2BE2/ffffff&text=Profile+Photo",
  alt = "Profile Photo",
  className,
}: ProfilePhotoProps) => {
  return (
    <div
      className={cn(
        "relative w-[400px] h-[400px] bg-black rounded-full p-2",
        'before:content-[""] before:absolute before:-inset-1',
        "before:bg-gradient-to-r before:from-purple-600 before:via-blue-600 before:to-purple-600",
        "before:rounded-full before:blur-md before:opacity-75",
        'after:content-[""] after:absolute after:-inset-1',
        "after:bg-gradient-to-r after:from-purple-500 after:via-blue-500 after:to-purple-500",
        "after:rounded-full after:blur-lg after:opacity-50",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};

export default ProfilePhoto;
