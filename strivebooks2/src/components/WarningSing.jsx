import { Alert } from 'react-bootstrap'

const WarningSing = (props) => {
    
    return (
        
        <Alert variant='warning'>
        This is a warning alert with the prop
        <Alert.Link href="#"> {props.alertstring}</Alert.Link>. Give it a click if you
        like.
        </Alert>
)
}

export default WarningSing