import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

export const styles = theme => ({
  groupInfo: {
    color: theme.typography.title.color,
    marginBottom: theme.spacing.unit * 1.5,
  },
});

const GroupPanelEmptyMessageBase = ({
  getMessage,
  classes,
  className,
  ...restProps
}) => (
  <div
    className={classNames(classes.groupInfo, className)}
    {...restProps}
  >
    {getMessage('groupByColumn')}
  </div>
);

GroupPanelEmptyMessageBase.propTypes = {
  getMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

GroupPanelEmptyMessageBase.defaultProps = {
  className: undefined,
};

export const GroupPanelEmptyMessage = withStyles(styles, { name: 'GroupPanelEmptyMessage' })(GroupPanelEmptyMessageBase);
