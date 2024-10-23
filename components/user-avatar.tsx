import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

export const UserAvatar = ({ user }: { user: { profileImageUrl?: string, firstName?: string, lastName?: string } }) => {
    return (
      <Avatar className="h-8 w-8">
        <AvatarImage src={user.profileImageUrl} />
        <AvatarFallback>
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    )
  };