import 'bootstrap/dist/css/bootstrap.css';
import {Button} from './Button';

function AppComponent(){
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {
        array.map((arr) => {
           return <div key={arr}>Hello world</div>
        })
      }
      
      <Button></Button>
    </div>
   

  );

};

export default AppComponent;

