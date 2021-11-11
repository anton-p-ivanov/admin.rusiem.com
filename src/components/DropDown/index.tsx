import React from 'react';

import classNames from 'classnames';

import useClickOutside from 'utils/useClickOutside';

import DropDownDivider from './components/DropDownDivider';
import DropDownLink from './components/DropDownLink';

import type { TDropDown } from './types';
import './styles.scss';

const DropDown: TDropDown = (props) => {
  const { toggle, variant = 'right', children } = props;
  const [ref, isVisible, setIsVisible] = useClickOutside<HTMLDivElement>(false);
  const className = classNames([
    'dropdown__menu',
    `dropdown__menu--${variant}`,
    isVisible && 'dropdown__menu--visible',
  ]);

  const toggleDropDown = () => setIsVisible(!isVisible);

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="dropdown__toggle" onClick={toggleDropDown}>
        {toggle}
      </button>
      <div className={className}>{children}</div>
    </div>
  );
};

DropDown.Link = DropDownLink;
DropDown.Divider = DropDownDivider;

export default DropDown;
