import React from 'react';

import { Button as MuiButton, ButtonProps, SxProps } from '@mui/material';

import { useTheme } from '../../themes/ThemeContext';

export interface ButtonCustomProps extends Omit<ButtonProps, 'type' | 'size'> {
  state?: 'normal' | 'hover' | 'press' | 'focus' | 'disable';
  types?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'ghost'
    | 'link'
    | 'apple-primary'
    | 'apple-default'
    | 'apple-outline'
    | 'google'
    | 'facebook';
  size?: 'medium' | 'large' | 'small';
}

const Button: React.FC<ButtonCustomProps> = (props) => {
  const { theme } = useTheme();

  const btn = theme.comp?.btn;

  const stateStyle = {
    'apple-default': {
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.['on-Base'].Content.Disable,
      },
      focus: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      hover: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      normal: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      press: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
    },
    'apple-outline': {
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.['on-Base'].Content.Disable,
      },
      focus: {
        background: theme.color?.Social['Foreground-AppleOutline-Default'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.Social['Border-AppleOutline-Default']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      hover: {
        background: theme.color?.Social['Foreground-AppleOutline-Default'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.Social['Border-AppleOutline-Default']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      normal: {
        background: theme.color?.Social['Foreground-AppleOutline-Default'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.Social['Border-AppleOutline-Default']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
      press: {
        background: theme.color?.Social['Foreground-AppleOutline-Default'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.Social['Border-AppleOutline-Default']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-AppleWhite-Default'],
      },
    },
    'apple-primary': {
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.['on-Base'].Content.Disable,
      },
      focus: {
        background: theme.color?.Social['Foreground-AppleBlack-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: theme.color?.Social['Content-AppleBlack-Default'],
      },
      hover: {
        background: theme.color?.Social['Foreground-AppleBlack-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.Social['Content-AppleBlack-Default'],
      },
      normal: {
        background: theme.color?.Social['Foreground-AppleBlack-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.Social['Content-AppleBlack-Default'],
      },
      press: {
        background: theme.color?.Social['Foreground-AppleBlack-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: theme.color?.Social['Content-AppleBlack-Default'],
      },
    },
    default: {
      danger: {
        disable: {
          background: btn?.color.background.disable,
          border: `${btn?.borderWidth.default} solid ${btn?.color.border.disable}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: btn?.color.content.disable,
        },
        focus: {
          background: btn?.color.background['default-normal'],
          border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.Functional.Content.Error,
        },
        hover: {
          background: theme.color?.Functional.Foreground['Error Muted Hover'],
          border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content.Error,
        },
        normal: {
          background: btn?.color.background['default-normal'],
          border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content.Error,
        },
        press: {
          background: theme.color?.Functional.Foreground['Error Muted Pressed'],
          border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content.Error,
        },
      },
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.default} solid ${btn?.color.border.disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: btn?.color.background['default-normal'],
        border: `${btn?.borderWidth.default} solid ${btn?.color.border.default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content.default,
      },
      hover: {
        background: btn?.color.background['default-hover'],
        border: `${btn?.borderWidth.default} solid ${btn?.color.border.default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content.default,
      },
      normal: {
        background: btn?.color.background['default-normal'],
        border: `${btn?.borderWidth.default} solid ${btn?.color.border.default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content.default,
      },
      press: {
        background: btn?.color.background['default-pressed'],
        border: `${btn?.borderWidth.default} solid ${btn?.color.border.default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content.default,
      },
    },
    facebook: {
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: theme.color?.Social['Foreground-Facebook-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: theme.color?.Social['Content-Facebook-Default'],
      },
      hover: {
        background: theme.color?.Social['Foreground-Facebook-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-Facebook-Default'],
      },
      normal: {
        background: theme.color?.Social['Foreground-Facebook-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-Facebook-Default'],
      },
      press: {
        background: theme.color?.Social['Foreground-Facebook-Default'],
        border: 'none',
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.Social['Content-Facebook-Default'],
      },
    },
    ghost: {
      danger: {
        disable: {
          background: btn?.color.background['ghost-danger-disable'],
          border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-disable']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: btn?.color.content.disable,
        },
        focus: {
          background: btn?.color.background['ghost-danger-normal'],
          border: `${btn?.borderWidth.ghost} solid ${btn?.color.border.ghost}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.Functional.Content.Error,
        },
        hover: {
          background: btn?.color.background['ghost-danger-hover'],
          border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-hover']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
        normal: {
          background: btn?.color.background['ghost-danger-normal'],
          border: `${btn?.borderWidth.ghost} solid ${btn?.color.border.ghost}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
        press: {
          background: btn?.color.background['ghost-danger-press'],
          border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-pressed']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
      },
      disable: {
        background: btn?.color.background['ghost-disable'],
        border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-disable']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: theme.color?.Base.Foreground['Transparent Focused'],
        border: `${btn?.borderWidth.ghost} solid ${btn?.color.border.ghost}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content.ghost,
      },
      hover: {
        background: theme.color?.Base.Foreground.Hover,
        border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-hover']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.ghost,
      },
      normal: {
        background: btn?.color.background['ghost-normal'],
        border: `${btn?.borderWidth.ghost} solid ${btn?.color.border.ghost}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.ghost,
      },
      press: {
        background: theme.color?.Base.Foreground.Pressed,
        border: `${btn?.borderWidth.ghost} solid ${btn?.color.border['ghost-pressed']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.ghost,
      },
    },
    google: {
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: theme.color?.['on-Base'].Content.High,
      },
      hover: {
        background: theme.color?.Base.Foreground.Hover,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.['on-Base'].Content.High,
      },
      normal: {
        background: theme.color?.Base.Foreground['Elevated-16'],
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.['on-Base'].Content.High,
      },
      press: {
        background: theme.color?.Base.Foreground.Pressed,
        border: `${btn?.borderWidth.default} solid ${theme.color?.['on-Base'].Border.Default}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.['on-Base'].Content.High,
      },
    },
    link: {
      danger: {
        disable: {
          background: btn?.color.background.link,
          border: 'none',
          borderRadius: btn?.borderRadius.link,
          boxShadow: 'none',
          color: btn?.color.content.disable,
          height: 'fit-content',
          minHeight: 'fit-content',
          padding: '0px',
        },
        focus: {
          background: btn?.color.background.link,
          border: 'none',
          borderRadius: btn?.borderRadius.link,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.Functional.Content.Error,
          height: 'fit-content',
          minHeight: 'fit-content',
          padding: '0px',
        },
        hover: {
          background: btn?.color.background.link,
          border: 'none',
          borderRadius: btn?.borderRadius.link,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
          height: 'fit-content',
          minHeight: 'fit-content',
          padding: '0px',
        },
        normal: {
          background: btn?.color.background.link,
          border: 'none',
          borderRadius: btn?.borderRadius.link,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
          height: 'fit-content',
          minHeight: 'fit-content',
          padding: '0px',
        },
        press: {
          background: btn?.color.background.link,
          border: 'none',
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
          height: 'fit-content',
          minHeight: 'fit-content',
          padding: '0px',
        },
      },
      disable: {
        background: btn?.color.background.link,
        border: 'none',
        borderRadius: btn?.borderRadius.link,
        boxShadow: 'none',
        color: btn?.color.content.disable,
        height: 'fit-content',
        minHeight: 'fit-content',
        padding: '0px',
      },
      focus: {
        background: btn?.color.background.link,
        border: 'none',
        borderRadius: btn?.borderRadius.link,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content['link-normal'],
        height: 'fit-content',
        minHeight: 'fit-content',
        padding: '0px',
      },
      hover: {
        background: btn?.color.background.link,
        border: 'none',
        borderRadius: btn?.borderRadius.link,
        boxShadow: 'none',
        color: btn?.color.content.tertiary,
        height: 'fit-content',
        minHeight: 'fit-content',
        padding: '0px',
      },
      normal: {
        background: btn?.color.background.link,
        border: 'none',
        borderRadius: btn?.borderRadius.link,
        boxShadow: 'none',
        color: btn?.color.content['link-normal'],
        height: 'fit-content',
        minHeight: 'fit-content',
        padding: '0px',
      },
      press: {
        background: btn?.color.background.link,
        border: 'none',
        borderRadius: btn?.borderRadius.link,
        boxShadow: 'none',
        color: btn?.color.content.tertiary,
        height: 'fit-content',
        minHeight: 'fit-content',
        padding: '0px',
      },
    },
    primary: {
      danger: {
        disable: {
          background: btn?.color.background.disable,
          border: `${btn?.borderWidth.primary} solid ${btn?.color.border.disable}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: btn?.color.content.disable,
        },
        focus: {
          background: btn?.color.background['primary-danger-normal'],
          border: 'none',
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.['on-Functional'].Content.High,
        },
        hover: {
          background: btn?.color.background['primary-danger-hover'],
          border: 'none',
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.['on-Functional'].Content.High,
        },
        normal: {
          background: btn?.color.background['primary-danger-normal'],
          border: 'none',
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.['on-Functional'].Content.High,
        },
        press: {
          background: btn?.color.background['primary-danger-pressed'],
          border: 'none',
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.['on-Functional'].Content.High,
        },
      },
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: btn?.color.background['primary-normal'],
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.primary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content['primary-pressed'],
      },
      hover: {
        background: btn?.color.background['primary-hover'],
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.primary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content['primary-hover'],
      },
      normal: {
        background: btn?.color.background['primary-normal'],
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.primary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: theme.color?.['on-Primary'].Content.High,
      },
      press: {
        background: btn?.color.background['primary-pressed'],
        border: `${btn?.borderWidth.primary} solid ${btn?.color.border.primary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content['primary-pressed'],
      },
    },
    secondary: {
      danger: {
        disable: {
          background: btn?.color.background.disable,
          border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.disable}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: btn?.color.content.disable,
        },
        focus: {
          background: btn?.color.background['secondary-danger-normal'],
          border: `${btn?.borderWidth.secondary} solid ${theme.color?.Functional.Border.Error}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.Functional.Content.Error,
        },
        hover: {
          background: btn?.color.background['secondary-danger-hover'],
          border: `${btn?.borderWidth.secondary} solid ${theme.color?.Functional.Border.Error}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content['Error Hover'],
        },
        normal: {
          background: btn?.color.background['secondary-danger-normal'],
          border: `${btn?.borderWidth.secondary} solid ${theme.color?.Functional.Border.Error}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content.Error,
        },
        press: {
          background: btn?.color.background['secondary-danger-pressed'],
          border: `${btn?.borderWidth.secondary} solid ${theme.color?.Functional.Border.Error}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.Shadow?.Below.xs,
          color: theme.color?.Functional.Content.Error,
        },
      },
      disable: {
        background: theme.color?.Base.Foreground.Disable,
        border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.disable}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: btn?.color.background['secondary-normal'],
        border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.secondary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content['secondary-normal'],
      },
      hover: {
        background: btn?.color.background['secondary-hover'],
        border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.secondary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content['secondary-hover'],
      },
      normal: {
        background: btn?.color.background['secondary-normal'],
        border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.secondary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content['secondary-normal'],
      },
      press: {
        background: btn?.color.background['secondary-pressed'],
        border: `${btn?.borderWidth.secondary} solid ${btn?.color.border.secondary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.Shadow?.Below.xs,
        color: btn?.color.content['secondary-pressed'],
      },
    },
    tertiary: {
      danger: {
        disable: {
          background: btn?.color.background['tertiary-disable'],
          border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-disable']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: btn?.color.content.disable,
        },
        focus: {
          background: btn?.color.background['tertiary-danger-normal'],
          border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border.tertiary}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: theme.State?.Focused.Default,
          color: theme.color?.Functional.Content.Error,
        },
        hover: {
          background: btn?.color.background['tertiary-danger-hover'],
          border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-hover']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
        normal: {
          background: btn?.color.background['tertiary-danger-normal'],
          border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border.tertiary}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
        press: {
          background: btn?.color.background['tertiary-danger-pressed'],
          border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-pressed']}`,
          borderRadius: btn?.borderRadius.default,
          boxShadow: 'none',
          color: theme.color?.Functional.Content.Error,
        },
      },
      disable: {
        background: btn?.color.background['tertiary-disable'],
        border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-disable']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.disable,
      },
      focus: {
        background: theme.color?.Base.Foreground['Transparent Focused'],
        border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border.tertiary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: theme.State?.Focused.Default,
        color: btn?.color.content.tertiary,
      },
      hover: {
        background: btn?.color.background['tertiary-hover'],
        border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-hover']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.tertiary,
      },
      normal: {
        background: btn?.color.background['tertiary-normal'],
        border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border.tertiary}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.tertiary,
      },
      press: {
        background: btn?.color.background['tertiary-pressed'],
        border: `${btn?.borderWidth.tertiary} solid ${btn?.color.border['tertiary-pressed']}`,
        borderRadius: btn?.borderRadius.default,
        boxShadow: 'none',
        color: btn?.color.content.tertiary,
      },
    },
  }[props.types ?? 'primary'];

  const styles = ({ padding }: { padding: string }) => {
    return {
      ...stateStyle.normal,
      padding,
      '&:hover': {
        ...stateStyle.hover,
      },
      '&:active': {
        ...stateStyle.press,
      },
      '&:focus': {
        ...stateStyle.focus,
      },
      '&:disabled': {
        ...stateStyle.disable,
      },
    } as SxProps;
  };

  return <MuiButton sx={styles as SxProps} {...props} />;
};

export default Button;
