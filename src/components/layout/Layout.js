import React  from 'react';
import { createUseStyles } from 'react-jss';
import Navigation from '../navigation/NavigationBar';

export const Layout = (props) => {
  const classes = useStyles();

  const { width = null, children } = props

  return (
    <div style={{ width: width ? `${width}px` : '100%', margin: '0 auto'}}>
        <Navigation/>
        <div className={classes.wrapper}>
            {children}
        </div>
    </div>
  )
}

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: 32,
  }
});