import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Card,
  Grid,
} from '@material-ui/core';
function List({
  userList,
  classes,
  handleSelectUser
}) {
  return (
    <div className={classes.table}>
        <Grid container spacing={3}>
          {userList.length > 0 &&
            userList.map(
              ({ id, name, Image}) => {
                return (
                  <Grid item xs={3} key={id}>
                      <Card onClick={()=>handleSelectUser(id)}>
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

export default List;
