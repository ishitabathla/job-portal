import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Grid,
} from '@material-ui/core';
function SelectedUsers({
  shortlisted,
  selectedUsers
}) {
  const userList = shortlisted
  ? selectedUsers.shortlisted
  : selectedUsers.rejected;
  return (
    <div>
      <Typography variant="h5">{shortlisted ? 'Shortlisted Users': 'Rejected Users'}</Typography>
        <Grid container spacing={3}>
          {userList.length > 0 &&
            userList.map(
              ({ id, name, Image}) => {
                return (
                  <Grid item xs={3} key={id}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt="User"
                            height="200px"
                            image={Image}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                  </Grid>
                );
              }
            )}
          </Grid>
    </div>
  );
}

export default SelectedUsers;
