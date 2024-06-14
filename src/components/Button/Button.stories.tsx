import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Box, CircularProgress, Icon } from '@mui/material';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  children: 'Secondary Button',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'contained',
  color: 'success',
  children: 'Success Button',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'contained',
  color: 'error',
  children: 'Error Button',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'contained',
  color: 'warning',
  children: 'Warning Button',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'contained',
  color: 'info',
  children: 'Info Button',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Outlined Primary Button',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Outlined Secondary Button',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  variant: 'text',
  color: 'primary',
  children: 'Text Primary Button',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  variant: 'text',
  color: 'secondary',
  children: 'Text Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Disabled Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Loading Button',
  startIcon: <CircularProgress size={20} color="inherit" />,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'contained',
  color: 'primary',
  children: 'With Icon',
  startIcon: <Icon>send</Icon>,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Small Button',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Large Button',
  size: 'large',
};
