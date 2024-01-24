import { useState } from 'react';
import questionsData from './data'
import Question from './questions/Question';

const App = () => {

  const [questionInd, setQuestionInd] = useState(0)

  return (
    <section>
      {questionsData.map((question) => {
        return <>
          <p onClick={ () => setQuestionInd( question.id - 1 )}>{question.id}</p>
          {question.id === questionsData[questionInd].id &&
            <Question key={question.id} question={question} />
            
          }<br />
        </>
      })}
    </section>
  )

};
export default App;
