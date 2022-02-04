
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    }
  return (
    <Box>
       <Box sx={{display:'flex', justifyContent:'space-between'}}>
         <Box sx={{width:'50%'}}>
         <Box>
         <Typography variant="h1" component="h2" sx={{fontSize:'28px', textDecoration:'underline'}}>FAQ</Typography>
         <Box>
           <Box>
           <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{textDecoration:'underline'}}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Box>
        </AccordionDetails>
      </Accordion>
           </Box>
         </Box>
         </Box>

         <Box>
         <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{textDecoration:'underline'}}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Box>
        </AccordionDetails>
      </Accordion>
         </Box>
         </Box>
         <Box sx={{width:'50%'}}>
         <Typography variant="h1" component="h2" sx={{fontSize:'28px', textAlign:'center'}}>Set your image</Typography>
         </Box>
       </Box>
    </Box>
  );
}

export default App;
