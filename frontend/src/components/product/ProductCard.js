import PropTypes from 'prop-types';
import {
  CardMedia,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  description: {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    overflow: 'hidden'
  },
  productImage: {
    width: '80px',
    height: '80px'
  },
  cardInfoLayout: {
    display: 'flex',
    alignItems: 'center'
  },
  updatedAt: {
    margin: '0 5px'
  }
});

const ProductCard = ({ product, ...rest }) => {
  const classes = useStyles();
  const setTimeDifference = (updatedAt) => {
    const date1 = dayjs();
    return date1.diff(updatedAt, 'day');
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent className={classes.cardInfoLayout}>
        <Box
          sx={{
            mr: 3,
          }}
        >
          <CardMedia
            alt="Product"
            className={classes.productImage}
            src="img"
            image={product.images[0]}
          />
        </Box>
        <div>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.title}
          </Typography>
          <div className={classes.description} dangerouslySetInnerHTML={{ __html: product.description }} />

        </div>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <AccessTimeIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >
              Updated

              <span className={classes.updatedAt}>

                {setTimeDifference(product.updatedAt)}
                {' '}
                days
              </span>

              ago
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <EditIcon color="action" />
            <Typography
              color="textSecondary"
              display="inline"
              sx={{ pl: 1 }}
              variant="body2"
            >

              Edit
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
