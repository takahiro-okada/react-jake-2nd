import { Wrap, WrapItem,Spinner,Center,useDisclosure } from "@chakra-ui/react";
import { memo, VFC, useEffect, useCallback} from "react";
import { UserCard } from "../organisms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers"
import { useSelectUser } from "../../hooks/useSelectUser"
import { UserDetailModal } from "../organisms/layout/user/UserDetailModal";


export const UserManagement: VFC = memo(() => {
const {isOpen, onOpen, onClose} = useDisclosure();
const {getUsers, users, loading} = useAllUsers();
const { onSelectUser, selectedUser} = useSelectUser();
useEffect (()=> getUsers(), [])

const onClickUser = useCallback((id:number) => {
  onSelectUser({ id, users, onOpen })
},[users,onSelectUser,onOpen]);

return (
  <>
  {loading ? (
    <Center height="100vh">
      <Spinner />
    </Center>
  ) : (
    <Wrap p={{ base:4, md:10 }}>
        {users.map((user)=>(
      <WrapItem key={user.id} mx="auto">
          <UserCard
          id={user.id}
          imageUrl="https://source.unsplash.com/random"
          userName={user.username}
          fullName={user.name}
          onClick={onClickUser}
          />
      </WrapItem>
          ))}
  </Wrap>
  )}
  <UserDetailModal
  isOpen={isOpen}
  onClose={onClose}
  user={selectedUser}
  />
  </>
)
})
