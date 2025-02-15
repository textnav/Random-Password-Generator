import { List } from "@raycast/api";
import { Actions } from "./Action";
import { Details } from "./Details";
import { StoryListItemProps } from "./interface";

export function StoryListItem(item: StoryListItemProps) {
  const icon = item.icon;

  const itemProps = item.showingDetails
    ? {
        detail: <Details {...item} />,
      }
    : { accessoryTitle: item.accessoryTitle, subtitle: item.subtitle };

  return (
    <List.Item
      icon={icon}
      title={item.password}
      actions={<Actions password={item.password} setShowingDetails={item.setShowingDetails} />}
      {...itemProps}
    />
  );
}
