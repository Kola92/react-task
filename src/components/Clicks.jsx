import touchIcon from "../assets/images/touch-icon.png";
import { Col, Row } from "react-bootstrap";
import "../styles/Clicks/Clicks.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStats } from "../features/statsSlice";

const Clicks = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  // eslint-disable-next-line no-unused-vars
  const { items, status } = stats;

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

  const clicksYesterday = metrics?.clicks_current_yesterday;
  const clicksLastFriday = metrics?.clicks_current_last_3days;
  const ctr = metrics?.ctr_yesterday.toString().replace(".", ",");

  return (
    <section className='clicks'>
      <Row className='clicks__row'>
        <Col md={1} className='clicks__firstCol'>
          <div className='clicks__circleBadge'></div>
          <div className='clicks__touchIcon'>
            <img src={touchIcon} alt='Touch Icon' />
          </div>
        </Col>
        <Col md={3} className='clicks__secondCol'>
          <div className='clicks__stat'>
            <h3>Clicks</h3>
            <div className='clicks__secondCol--badge'>-13%</div>
          </div>

          <h4>
            {clicksYesterday?.toLocaleString()} <span>Yesterday</span>
          </h4>
          <h4 className='clicks__grayText'>
            {clicksLastFriday?.toLocaleString()} <span>Last friday</span>
          </h4>
        </Col>
        <Col md={8} className='clicks__thirdCol'>
          <div>
            <h3>CTR: {ctr?.slice(0, 4)}%</h3>
          </div>

          <p className='clicks__grayText'>
            Conversion from searches to clicks on all devices.
          </p>
          <p>
            Help: <a href='/ctr'>CTR</a>, <a href='/clicks'>Clicks</a>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Clicks;
