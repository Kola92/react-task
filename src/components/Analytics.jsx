import Clicks from "./Clicks";
import Searches from "./Searches";
import Sales from "./Sales";

const Analytics = () => {
  return (
    <div className='analytics'>
      <div className='analytics__firstRow'>
        <Searches />
      </div>

      <div className='analytics__secondRow'>
        <Clicks />
      </div>

      <div className='analytics__thirdRow'>
        <Sales />
      </div>
    </div>
  );
};

export default Analytics;
