import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    isLoading: {
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "none",
    },
}));

export default useStyles;