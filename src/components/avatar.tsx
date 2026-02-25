import { Avatar } from "@base-ui/react/avatar";

export default function AvatarComponent() {
  return (
    <Avatar.Root className="block items-center size-22 my-4 rounded-md outline outline-border outline-offset-4 overflow-hidden shrink-0">
      <Avatar.Image
        src="https://avatars.githubusercontent.com/u/77024639?s=400&u=03aa540e8c6555a35e37359092da1841c72fbb02&v=4"
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
