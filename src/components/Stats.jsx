import React, { useEffect } from "react";
import "../styles/Stats/Stats.css";
import { ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../features/statsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  // eslint-disable-next-line no-unused-vars
  const { items, status, error } = stats;

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let isMounted = true;

    // If status is 'idle', then fetch the posts data from the API
    if (status === "idle") {
      dispatch(getStats());
    }

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [status, dispatch]);

  const metrics = items[0]?.data[0];

  const errorsYesterday = metrics?.errors_yesterday
    .toString()
    .replace(".", ",");
  const zeroesYesterday = metrics?.zeroes_yesterday
    .toString()
    .replace(".", ",");
  const timeoutYesterday = metrics?.timeout_yesterday
    .toString()
    .replace(".", ",");

  return (
    <section className='stats'>
      <section className='stats__firstRow'>
        <div className='stats__errors'>
          <div className='stats__errors--badge'></div>
          <div>
            <h3>Errors: {errorsYesterday?.slice(0, 4)}%</h3>
            <h4>Average: 0,11%</h4>
          </div>
        </div>

        <div className='stats__zeroes'>
          <div className='stats__zeroes--badge'></div>
          <div>
            <h3>Zeroes: {zeroesYesterday?.slice(0, 4)}%</h3>
            <h4>Average: 0,11%</h4>
          </div>
        </div>

        <div className='stats__timeouts'>
          <div className='stats__timeouts--badge'></div>
          <div>
            <h3>Timeouts: {timeoutYesterday?.slice(0, 4)}%</h3>
            <h4>Average: 0,11%</h4>
          </div>
        </div>
      </section>

      <section className='stats__secondRow'>
        <div className='stats__progress'>
          <ProgressBar>
            <ProgressBar now={40} key={1} />
            <ProgressBar now={30} key={2} />
            <ProgressBar now={20} key={3} />
            <ProgressBar now={10} key={4} />
          </ProgressBar>
        </div>
      </section>

      <section className='stats__thirdRow'>
        <div className='stats__metric'>
          <div className='stats__metric-yellow'>
            <div className='stats__metric-yellow--badge'></div>
            <h3>Error 500: 256</h3>
          </div>

          <div className='stats__metric-purple'>
            <div className='stats__metric-purple--badge'></div>
            <h3>Error 501: 800</h3>
          </div>

          <div className='stats__metric-blue'>
            <div className='stats__metric-blue--badge'></div>
            <h3>Error 502: 650</h3>
          </div>

          <div className='stats__metric-gray'>
            <div className='stats__metric-gray--badge'></div>
            <h3>Other: 330</h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Stats;
