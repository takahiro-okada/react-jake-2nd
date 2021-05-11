import { memo, VFC, useState, useEffect, ChangeEvent } from "react";
import { Stack,Modal,ModalOverlay, ModalContent,ModalHeader, ModalCloseButton,ModalBody, FormControl, FormLabel, Input, ModalFooter} from "@chakra-ui/react";
import { User } from "../../../../types/api/user"
import { PrimaryButton } from "../../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen:boolean;
  onClose: () => void;
  isAdmin?: boolean;
}
export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect (()=> {
    setUserName(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  },[user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)


  const onClickUpdate = () => alert()

return(
  <Modal
  isOpen={isOpen}
  onClose={onClose}
  autoFocus={false}>
  <ModalOverlay>
    <ModalContent pd={2}>
      <ModalHeader>ユーザー詳細</ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <Input value={userName} isReadonly={!isAdmin} onChange={onChangeUserName}/>
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <Input value={name} isReadonly={!isAdmin} onChange={onChangeName}/>
          </FormControl>
          <FormControl>
            <FormLabel>Mail</FormLabel>
            <Input value={email} isReadonly={!isAdmin} onChange={onChangeEmail}/>
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <Input value={phone} isReadonly={!isAdmin} onChange={onChangePhone}/>
          </FormControl>
        </Stack>
      </ModalBody>
      {isAdmin && (
        <ModalFooter>
        <PrimaryButton onClick={onClickUpdate}>更新
        </PrimaryButton>
      </ModalFooter>
      )}
    </ModalContent>
  </ModalOverlay>
</Modal>
)
})

