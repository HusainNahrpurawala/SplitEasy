import { makeStyles } from '@material-ui/core/styles';
import pink from "@material-ui/core/colors/pink"

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100%',
        'user-select': 'none',
        'text-align': 'center',
        flexDirection: "column"
    },
    icon: {
        width: '100%',
        height: '100%',
        color: theme.palette.secondary.main,
    },
    iconBox: {
        width: 50,
        'margin-right': 10,
    },
    title: {
        'font-weight': 100,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main || pink[500]
    },
}));

export default useStyles;