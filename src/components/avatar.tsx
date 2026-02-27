import { Avatar } from "@base-ui/react/avatar";

interface AvatarComponentProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: string;
  outlineOffset?: string;
  className?: string;
}

export default function AvatarComponent({
  src,
  alt = "Avatar",
  fallback = "OG",
  size = "size-22",
  outlineOffset = "outline-offset-4",
  className,
}: AvatarComponentProps) {
  return (
    <Avatar.Root className={`block items-center ${size} my-4 rounded-md outline outline-border ${outlineOffset} overflow-hidden shrink-0 ${className ?? ""}`}>
      <Avatar.Image
        src={src}
        alt={alt}
        className="size-full object-cover"
      />
      <Avatar.Fallback
        className="flex size-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium"
      >
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
