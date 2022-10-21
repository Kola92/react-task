import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row } from "react-bootstrap";
import { BsFunnelFill } from "react-icons/bs";
import "../styles/Searches/Searches.css";
import { getStats } from "../features/statsSlice";

const Searches = () => {
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

  const searchesYesterday = metrics?.searches_current_yesterday;
  const lastFriday = metrics?.searches_current_last_3days;

  return (
    <section className='searches'>
      <Row className='searches__row'>
        <Col md={1} className='searches__firstCol'>
          <div className='searches__circleBadge'></div>
          <div className='searches__funnelIcon'>
            <BsFunnelFill />
          </div>
        </Col>
        <Col md={3} className='searches__secondCol'>
          <div className='searches__stat'>
            <h3>Searches</h3>
            <div className='searches__secondCol--badge'>+5%</div>
          </div>

          <h4>
            {searchesYesterday?.toLocaleString()} <span>Yesterday</span>
          </h4>
          <h4 className='searches__grayText'>
            {lastFriday?.toLocaleString()} <span>Last friday</span>
          </h4>
        </Col>
        <Col md={8} className='searches__thirdCol'>
          <div>
            <h3>Mobile traffic: 100%</h3>
            <h3>Web traffic: 100%</h3>
          </div>

          <p className='searches__grayText'>
            You get 100% on mobile and desktop devices.
          </p>
          <p>
            Help: <a href='/searches'>Searches</a>,{" "}
            <a href='/pessimisation'>Pessimisation</a>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Searches;
