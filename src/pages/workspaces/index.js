import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  Modal,
  Spinner,
  Text,
} from "@chakra-ui/react";
import {
  createWorkspace,
  listWorkspaces,
} from "../../services/supabase.service";
import NewWorkspaceModal from "./newWorkspaceModal";

const Workspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [workspaceInsert, setWorkspaceInsert] = useState();
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getWorkspaces = async () => {
      const data = await listWorkspaces();
      setWorkspaces(data);
      setLoading(false);
    };
    getWorkspaces();
  }, []);

  const handleCreateWorkspace = async () => {
    setLoading(true);
    const newWorkspace = await createWorkspace(workspaceInsert);
    setWorkspaces([...workspaces, newWorkspace]);
    setLoading(false);
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <>
      <NewWorkspaceModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        submit={handleCreateWorkspace}
        setWorkspaceInsert={setWorkspaceInsert}
      />
      <Box p={4}>
        <Heading mb={4}>Workspaces</Heading>
        <List spacing={3}>
          {workspaces.map((workspace) => (
            <ListItem
              key={workspace.id}
              p={2}
              borderWidth={1}
              borderRadius="md"
            >
              {workspace.name}
            </ListItem>
          ))}
        </List>
        <Button onClick={() => setModalIsOpen(true)}>
          <Text>Create a workspace</Text>
        </Button>
      </Box>
    </>
  );
};

export default Workspaces;
