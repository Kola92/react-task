import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../features/statsSlice";
import "../styles/Sales/Sales.css";

const Sales = () => {
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

  const strYesterday = metrics?.str_yesterday;
  const strLastFriday = metrics?.str_last_3days;

  return (
    <section className='sales'>
      <Row className='sales__row'>
        <Col md={1} className='sales__firstCol'>
          <div className='sales__circleBadge'></div>
          <div className='sales__cartIcon'>
            <FaShoppingCart />
          </div>
        </Col>
        <Col md={3} className='sales__secondCol'>
          <div className='sales__stat'>
            <h3>Sales</h3>
            {/* <div className='sales__secondCol--badge'></div> */}
          </div>

          <h4>
            {parseInt(strYesterday)} <span>Yesterday</span>
          </h4>
          <h4 className='sales__grayText'>
            {parseInt(strLastFriday)} <span> Last friday</span>
          </h4>
        </Col>
        <Col md={8} className='sales__thirdCol'>
          <div>
            <h3>STR: 6.2%</h3>
            <h3>Avg. Check: 8 903</h3>
          </div>

          <p className='sales__grayText'>
            Conversion from cliks to bookings on all devices.
          </p>
          <p>
            Help: <a href='/str'>STR</a>, <a href='/bookings'>Bookings</a>,{" "}
            <a href='/avg'>Avg. Check</a>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Sales;
