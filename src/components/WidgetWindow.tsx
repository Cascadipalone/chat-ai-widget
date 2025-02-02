import { Dispatch, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';

import Chat from './Chat';
import { ReactComponent as CloseIcon } from '../icons/ic-widget-close.svg';
import { ReactComponent as CollapseIcon } from '../icons/icon-collapse.svg';
import { ReactComponent as ExpandtIcon } from '../icons/icon-expand.svg';

const StyledWidgetWindowWrapper = styled.div<{
  isOpen: boolean;
  isExpanded: boolean;
}>`
  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
  background-color: #fff;
  position: fixed;
  bottom: 84px;
  right: 20px;
  height: 640px;
  min-height: 80px;
  width: 400px;
  max-width: 80vw;
  max-height: 80vh;
  box-shadow: 0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);
  border-radius: 16px;
  overflow: hidden;
  transform-origin: right bottom;
  transition: width 200ms ease 0s, height 200ms ease 0s,
    max-height 200ms ease 0s, transform 150ms cubic-bezier(0, 1.2, 1, 1) 0s,
    opacity 83ms ease-out 0s;
  transform: scale(0.15);
  opacity: 0;

  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        z-index: 10000;
        pointer-events: all;
        transform: scale(1);
        opacity: 1;
        transition: width 200ms ease 0s, height 200ms ease 0s,
          max-height 200ms ease 0s,
          transform 300ms cubic-bezier(0, 1.2, 1, 1) 0s,
          opacity 83ms ease-out 0s;
      `
    );
  }}
  /** widget close button for mobile version */
  .widget-close-button {
    display: none;
  }

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 743px;
      height: 723px;
    `}
`;

const StyledExpandButton = styled.button`
  position: fixed;
  right: 42px;
  top: 16px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCloseButton = styled.button`
  position: fixed;
  right: 12px;
  top: 16px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WidgetWindow = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledWidgetWindowWrapper isOpen={isOpen} isExpanded={isExpanded}>
      <StyledExpandButton onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? <CollapseIcon /> : <ExpandtIcon />}
      </StyledExpandButton>
      <StyledCloseButton onClick={() => setIsOpen(() => false)}>
        <CloseIcon />
      </StyledCloseButton>
      <Chat />
    </StyledWidgetWindowWrapper>
  );
};

export default WidgetWindow;
