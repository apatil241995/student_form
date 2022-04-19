import { Grid, Card, Box, Typography } from "@mui/material";

function Userlist() {
  return (
    <div>
      <Typography variant="h3" component="div">
        List of Students
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={2} >
        <Grid item p={2}>
          <Box width={300}>
            <Card>
              <Typography variant="h5" component="div">
                Name:- { }
              </Typography>

              <Typography variant="h5" component="div">
                Gender:- { }
              </Typography>

              <Typography variant="h5" component="div">
                Bio:- { }
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Userlist;