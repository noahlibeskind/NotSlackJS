import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@chakra-ui/react";
import React from "react";

const NewWorkspaceModal = ({ isOpen, onClose, submit, setWorkspaceInsert }) => {
  const handleInputChange = (e) => setWorkspaceInsert({ name: e.target.value });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalBody>
          <FormControl>
            <FormLabel>Workspace Name</FormLabel>
            <Input onChange={handleInputChange} />
          </FormControl>
          <Button onClick={submit}>Create</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewWorkspaceModal;
