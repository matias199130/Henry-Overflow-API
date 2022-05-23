import styled from '@emotion/styled'
import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const CardQuestionContainer = styled.div`
  color: pink;
  height: 60px;
  width: 70%;
  background-color: #392E57;
  margin-left: 30px;
  margin-bottom: 10px;
  /* border: 1px solid pink; */
  .CardQuestionTitle {
    color: #A8A3B5;
    padding-top: 16px;
    span{ padding-left: 100px; }
  }
`

const CardQuestion = styled.div`
  margin-top: 25px; 
  height: 500px;
  width: 100%;
  background-color: #392E57;
  /* border: 1px solid cyan; */
`


export const Questions = () => {
  return (
    <div>
      <CardQuestionContainer>
        <div className='CardQuestionTitle'>
          <span>Nuevas</span>
          <span>Mas Visitados</span>
          <span>Mejores Calificadas</span>
        </div>
        <CardQuestion>
          <QuestionCard />
        </CardQuestion>

      </CardQuestionContainer>
    </div>
  )
}

