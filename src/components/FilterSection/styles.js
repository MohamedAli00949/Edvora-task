import {makeStyles} from '@mui/styles';

export default makeStyles((theme) => ({
    container: {
        padding: '20px 35px',
        background: '#131313',
        borderRadius: '30px',
    },
    heading: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '20px',
        lineHeight: '24px',
        color: "#A5A5A5",
    },
    break: {
        border: 'none',
        height: '1.2px',
        background: '#A5A5A5',
        borderRadius: '5px',
        marginBlock: "15px",
    },
    sButton: {
        justifyContent: 'space-between',
        textTransform: 'capitalize',
        borderRadius: "4.68775px",
        zIndex: '10',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '17px',
        lineHeight: '20px',
        color: '#FFFFFF',
    }
}))