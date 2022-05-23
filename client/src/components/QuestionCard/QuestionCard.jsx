import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const QuestionsViewVotes = styled.div`
  padding-left: 8px;
  font-size: 10px;
  margin-top: -10px;
  .respuestas{
    color: green;
  }
  .votos, .vistas{
    color: #A8A3B5;
  }
`

export default function QuestionCard() {

  return (
    <Card sx={{ maxWidth: '100%',backgroundColor: 'transparent' }}>
      <CardHeader
       titleTypographyProps={{
         fontSize: 20,
         color: 'white',
        }}
        subheaderTypographyProps={{
          fontSize: 12,
          color: '#A8A3B5'
      }}
      
      avatar={ <Avatar sx={{ bgcolor: yellow[500], color: '#392E57' }} aria-label="recipe"> M1 </Avatar> }
      title="Why does Javascript alert is undefined [on hold]"
      subheader="September 14, 2021"
      />
      <QuestionsViewVotes>
        <CheckCircleOutlineIcon 
        />
        <p className="respuestas" >8 Respuestas</p>
        <p className="votos">12 Votos</p>
        <p className="vistas">103 Vistas</p>

      </QuestionsViewVotes>

      <CardContent>
        <Typography variant="body2" color="#A8A3B5">
          I have 3 radio buttons in wich im trying to alert value of radio buttons <br/>
          by assigning iit to a variable...
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
     
    </Card>
  );
}
