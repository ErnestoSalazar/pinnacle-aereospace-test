import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//components
import Button from '../Button';

//css
import ('./index.css');


export default function MenuCard({handleModal}) {
  return (
    <Card className={'card'}>
      <div className={'card-image-wrapper card-item'}>
        <CardMedia
          className={'card-media'}
          image="https://foodrevolution.org/wp-content/uploads/2018/03/blog-featured_healthy_foods-20180306.jpg"
          title="Paella dish"
          />
      </div>
      <CardContent className="card-item text-center">
        <Typography variant="body2" color="textSecondary" component="p">
          Alcachofa rellena de atun y escencias espaciales
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          $00.00
        </Typography>
      </CardContent>
      <CardContent className="card-item">
        <Button btnColor="primary" onClick={handleModal}>Details</Button>
      </CardContent>
    </Card>
  );
}