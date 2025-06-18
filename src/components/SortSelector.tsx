import { Button, Menu, Portal, HStack } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface SortOrderProps {
  onSelectOrder: (order: string) => void;
  sortOrder: string;
}

export default function SortSelector({ onSelectOrder, sortOrder }: SortOrderProps) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="xs" w="175px">
          <HStack justify="space-between" w="100%">
            Order by: {sortOrders.find((order) => order.value === sortOrder)?.label || "Relevance"}
            <FaChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item onClick={() => onSelectOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
