import { Avatar } from "@base-ui/react/avatar";

export default function AvatarComponent() {
  return (
    <Avatar.Root className="block items-center size-22 my-4 rounded-md outline outline-border outline-offset-4 overflow-hidden shrink-0">
      <Avatar.Image
        src="/images/profile.png"
        alt="Avatar"
        className="size-full object-cover"
      />
      <Avatar.Fallback
        className="flex size-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium"
      >
        OG
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
