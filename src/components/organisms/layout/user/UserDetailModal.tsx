import { memo, VFC} from "react";
import { Stack,Modal,ModalOverlay, ModalContent,ModalHeader, ModalCloseButton,ModalBody, FormControl, FormLabel, Input} from "@chakra-ui/react";
import { User } from "../../../../types/api/user"

type Props = {
  user: User | null;
  isOpen:boolean;
  onClose: () => void;
}
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
return(
  <Modal
  isOpen={isOpen}
  onClose={onClose}
  autoFocus={false}>
  <ModalOverlay>
    <ModalContent pd={6}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={user?.username} isReadonly />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={user?.name} isReadonly />
          </FormControl>
          <FormControl>
            <FormLabel>Mail</FormLabel>
            <Input value={user?.email} isReadonly />
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input value={user?.phone} isReadonly />
          </FormControl>
        </Stack>
      </ModalBody>
    </ModalContent>
  </ModalOverlay>
</Modal>
)
})

