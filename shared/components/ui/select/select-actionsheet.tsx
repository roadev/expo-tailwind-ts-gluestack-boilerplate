'use client';

import { H4 } from '@expo/html-elements';
import { createActionsheet } from '@gluestack-ui/core/actionsheet/creator';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  ViewStyle,
} from 'react-native';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import { tva, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
  MotionComponentProps,
} from '@legendapp/motion';

import React from 'react';

type IAnimatedPressableProps = React.ComponentProps<typeof Pressable> &
  MotionComponentProps<typeof Pressable, ViewStyle, unknown, unknown>;

const AnimatedPressable = createMotionAnimatedComponent(
  Pressable
) as React.ComponentType<IAnimatedPressableProps>;

type IMotionViewProps = React.ComponentProps<typeof View> &
  MotionComponentProps<typeof View, ViewStyle, unknown, unknown>;

const MotionView = Motion.View as React.ComponentType<IMotionViewProps>;

export const UIActionsheet = createActionsheet({
  Root: View,
  Content: withStyleContext(MotionView),
  Item: withStyleContext(Pressable),
  ItemText: Text,
  DragIndicator: View,
  IndicatorWrapper: View,
  Backdrop: AnimatedPressable,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText: H4,
  Icon: UIIcon,
  AnimatePresence,
});

cssInterop(UIActionsheet, { className: 'style' });
cssInterop(UIActionsheet.Content, { className: 'style' });
cssInterop(UIActionsheet.Item, { className: 'style' });
cssInterop(UIActionsheet.ItemText, { className: 'style' });
cssInterop(UIActionsheet.DragIndicator, { className: 'style' });
cssInterop(UIActionsheet.DragIndicatorWrapper, { className: 'style' });
cssInterop(UIActionsheet.Backdrop, { className: 'style' });
cssInterop(UIActionsheet.ScrollView, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIActionsheet.VirtualizedList, {
  className: 'style',
  ListFooterComponentClassName: 'ListFooterComponentStyle',
  ListHeaderComponentClassName: 'ListHeaderComponentStyle',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIActionsheet.FlatList, {
  className: 'style',
  ListFooterComponentClassName: 'ListFooterComponentStyle',
  ListHeaderComponentClassName: 'ListHeaderComponentStyle',
  columnWrapperClassName: 'columnWrapperStyle',
  contentContainerClassName: 'contentContainerStyle',
  indicatorClassName: 'indicatorStyle',
});
cssInterop(UIActionsheet.SectionList, { className: 'style' });
cssInterop(UIActionsheet.SectionHeaderText, { className: 'style' });
cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const actionsheetStyle = tva({ base: 'w-full h-full web:pointer-events-none' });

const actionsheetContentStyle = tva({
  base: 'items-center rounded-tl-3xl rounded-tr-3xl p-2 bg-background-0 web:pointer-events-auto web:select-none shadow-lg pb-safe',
});

const actionsheetItemStyle = tva({
  base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 data-[checked=true]:bg-background-100',
});

const actionsheetItemTextStyle = tva({
  base: 'text-typography-700 font-normal font-body tracking-md text-left mx-2',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const actionsheetDragIndicatorStyle = tva({
  base: 'w-16 h-1 bg-background-400 rounded-full',
});

const actionsheetDragIndicatorWrapperStyle = tva({
  base: 'w-full py-1 items-center',
});

const actionsheetBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-dark web:cursor-default web:pointer-events-auto',
});

const actionsheetScrollViewStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetVirtualizedListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetFlatListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetSectionListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetSectionHeaderTextStyle = tva({
  base: 'leading-5 font-bold font-heading my-0 text-typography-500 p-3 uppercase',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '5xl': 'text-5xl',
      '4xl': 'text-4xl',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },

    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow500',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

const actionsheetIconStyle = tva({
  base: 'text-typography-900',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'w-4 h-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
});

type IActionsheetProps = VariantProps<typeof actionsheetStyle> &
  React.ComponentProps<typeof UIActionsheet> & { className?: string };

type IActionsheetContentProps = VariantProps<typeof actionsheetContentStyle> &
  React.ComponentProps<typeof UIActionsheet.Content> & { className?: string };

type IActionsheetItemProps = VariantProps<typeof actionsheetItemStyle> &
  React.ComponentProps<typeof UIActionsheet.Item> & { className?: string };

type IActionsheetItemTextProps = VariantProps<typeof actionsheetItemTextStyle> &
  React.ComponentProps<typeof UIActionsheet.ItemText> & { className?: string };

type IActionsheetDragIndicatorProps = VariantProps<typeof actionsheetDragIndicatorStyle> &
  React.ComponentProps<typeof UIActionsheet.DragIndicator> & {
    className?: string;
  };

type IActionsheetDragIndicatorWrapperProps = VariantProps<
  typeof actionsheetDragIndicatorWrapperStyle
> &
  React.ComponentProps<typeof UIActionsheet.DragIndicatorWrapper> & {
    className?: string;
  };

type IActionsheetBackdropProps = VariantProps<typeof actionsheetBackdropStyle> &
  React.ComponentProps<typeof UIActionsheet.Backdrop> & {
    className?: string;
  };

type IActionsheetScrollViewProps = VariantProps<typeof actionsheetScrollViewStyle> &
  React.ComponentProps<typeof UIActionsheet.ScrollView> & {
    className?: string;
  };

type IActionsheetVirtualizedListProps = VariantProps<typeof actionsheetVirtualizedListStyle> &
  React.ComponentProps<typeof UIActionsheet.VirtualizedList> & {
    className?: string;
  };

type IActionsheetFlatListProps = VariantProps<typeof actionsheetFlatListStyle> &
  React.ComponentProps<typeof UIActionsheet.FlatList> & {
    className?: string;
  };

type IActionsheetSectionListProps = VariantProps<typeof actionsheetSectionListStyle> &
  React.ComponentProps<typeof UIActionsheet.SectionList> & {
    className?: string;
  };

type IActionsheetSectionHeaderTextProps = VariantProps<typeof actionsheetSectionHeaderTextStyle> &
  React.ComponentProps<typeof UIActionsheet.SectionHeaderText> & {
    className?: string;
  };

type IActionsheetIconProps = VariantProps<typeof actionsheetIconStyle> &
  React.ComponentProps<typeof UIActionsheet.Icon> & {
    className?: string;
    as?: React.ElementType;
  };

const Actionsheet = React.forwardRef<React.ComponentRef<typeof UIActionsheet>, IActionsheetProps>(
  ({ className, ...props }, ref) => (
    <UIActionsheet
      ref={ref}
      className={actionsheetStyle({
        class: className,
      })}
      {...props}
    />
  )
);

const ActionsheetContent = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.Content>,
  IActionsheetContentProps & { className?: string }
>(({ className, ...props }, ref) => (
  <UIActionsheet.Content
    ref={ref}
    className={actionsheetContentStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetItem = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.Item>,
  IActionsheetItemProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.Item
    ref={ref}
    className={actionsheetItemStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetItemText = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.ItemText>,
  IActionsheetItemTextProps
>(({ className, isTruncated, bold, underline, strikeThrough, size, ...props }, ref) => (
  <UIActionsheet.ItemText
    ref={ref}
    className={actionsheetItemTextStyle({
      class: className,
      isTruncated: isTruncated as boolean,
      bold: bold as boolean,
      underline: underline as boolean,
      strikeThrough: strikeThrough as boolean,
      size,
    })}
    {...props}
  />
));

const ActionsheetDragIndicator = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.DragIndicator>,
  IActionsheetDragIndicatorProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.DragIndicator
    ref={ref}
    className={actionsheetDragIndicatorStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetDragIndicatorWrapper = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.DragIndicatorWrapper>,
  IActionsheetDragIndicatorWrapperProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.DragIndicatorWrapper
    ref={ref}
    className={actionsheetDragIndicatorWrapperStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetBackdrop = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.Backdrop>,
  IActionsheetBackdropProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.Backdrop
    animate={{
      opacity: 0.5,
    }}
    exit={{
      opacity: 0,
    }}
    initial={{
      opacity: 0,
    }}
    {...props}
    ref={ref}
    className={actionsheetBackdropStyle({
      class: className,
    })}
  />
));

const ActionsheetScrollView = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.ScrollView>,
  IActionsheetScrollViewProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.ScrollView
    ref={ref}
    className={actionsheetScrollViewStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetVirtualizedList = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.VirtualizedList>,
  IActionsheetVirtualizedListProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.VirtualizedList
    ref={ref}
    className={actionsheetVirtualizedListStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetFlatList = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.FlatList>,
  IActionsheetFlatListProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.FlatList
    ref={ref}
    className={actionsheetFlatListStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetSectionList = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.SectionList>,
  IActionsheetSectionListProps
>(({ className, ...props }, ref) => (
  <UIActionsheet.SectionList
    ref={ref}
    className={actionsheetSectionListStyle({
      class: className,
    })}
    {...props}
  />
));

const ActionsheetSectionHeaderText = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.SectionHeaderText>,
  IActionsheetSectionHeaderTextProps
>(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      sub,
      italic,
      highlight,
      ...props
    },
    ref
  ) => (
    <UIActionsheet.SectionHeaderText
      ref={ref}
      className={actionsheetSectionHeaderTextStyle({
        class: className,
        isTruncated: isTruncated as boolean,
        bold: bold as boolean,
        underline: underline as boolean,
        strikeThrough: strikeThrough as boolean,
        size,
        sub: sub as boolean,
        italic: italic as boolean,
        highlight: highlight as boolean,
      })}
      {...props}
    />
  )
);

const ActionsheetIcon = React.forwardRef<
  React.ComponentRef<typeof UIActionsheet.Icon>,
  IActionsheetIconProps
>(({ className, as: AsComp, size = 'sm', ...props }, ref) => {
  if (AsComp) {
    return (
      <AsComp
        ref={ref}
        className={actionsheetIconStyle({
          class: className,
          size,
        })}
        {...props}
      />
    );
  }
  return (
    <UIActionsheet.Icon
      ref={ref}
      className={actionsheetIconStyle({
        class: className,
        size,
      })}
      {...props}
    />
  );
});

export {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetIcon,
};
