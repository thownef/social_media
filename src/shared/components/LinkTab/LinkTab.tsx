import { Tab, TabProps, Tooltip } from "@mui/material";

type LinkTabProps = TabProps & { labelTooltip: string };

const LinkTab = ({ labelTooltip, ...props }: LinkTabProps) => {
  return (
    <Tooltip title={labelTooltip}>
      <Tab {...props} />
    </Tooltip>
  );
};

export default LinkTab;
