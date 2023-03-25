import React, { useContext } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TokenContext from '../../context/tokenFormContext';
import TokenOverview from '../../components/TokenDetails/TokenOverview';
import TokenStandard from '../../components/TokenDetails/TokenStandard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const TokenDetails = () => {
  const [value, setValue] = React.useState(0);
  const { submitForm } = useContext(TokenContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabList = [
    {
      label: 'Overview',
      component: <TokenOverview />
    },
    {
      label: 'Token Standard',
      component: <TokenStandard />
    }
  ];

  return submitForm?.address ? (
    <Box sx={{ width: '100%', mt: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="token detail tabs"
        >
          {tabList.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabList.map((item, index) => (
        <TabPanel
          value={value}
          index={index}
          key={index}
        >
          {item.component}
        </TabPanel>
      ))}
    </Box>
  ) : (
    <></>
  );
};

export default TokenDetails;
