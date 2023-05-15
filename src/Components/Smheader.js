import { Divider } from '@mui/material';

import { Container } from 'react-bootstrap';

const SmHeader = (props) => {
  const {title} = props;
  return (
    <Container>
      <h6 class="display-6 text-primary">{title}</h6>
    </Container>

    
  )
}

export default SmHeader