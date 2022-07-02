import {
  Flex,
  IconButton,
  Button,
  SimpleGrid,
  useColorModeValue,
  Stack,
  chakra,
  Icon,
  ButtonGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

const TableComponent = () => {
  const data = [
    {
      bounty: "Bounty 1 - Ethereum",
      tags: "Solidity, React",
      by: "0xFirstCustomer",
    },
    {
      bounty: "Bounty 2 - Solana",
      tags: "Rust, React",
      by: "0xSecondCustomer",
    },
  ];
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>BOUNTY</Th>
            <Th>TAGS</Th>
            <Th>POSTED BY</Th>
          </Tr>
        </Thead>
        <Tbody>
            {data.map((token,tid)=>{
                return(
                    <Tr>
                        <Td>{token.bounty}</Td>
                        <Td>{token.tags}</Td>
                        <Td>{token.by}</Td>
                    </Tr>
                )
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
