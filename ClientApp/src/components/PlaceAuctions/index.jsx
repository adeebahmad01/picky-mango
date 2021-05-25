import React, { useCallback, useEffect, useRef, useState } from "react";
import InfiniteCalendar, { withRange, Calendar } from "react-infinite-calendar";
import CustomInput from "../utils/CustomInput";

import "react-infinite-calendar/styles.css";
import { Collapse } from "@material-ui/core";

const PlaceAuctions = () => {
  const [open, setOpen] = useState(false);
  const startRef = useRef();
  const endRef = useRef();
  const dateSelect = useCallback(({ start, end }) => {
    startRef.current.value = start.toDateString();
    endRef.current.value = end.toDateString();
  }, []);
  const handleClose = () => setOpen(false);
  const stopPropagation = (e) => e.stopPropagation();
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);
  const CalendarWithRange = withRange(Calendar);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <CustomInput
              ref={startRef}
              defaultValue={new Date().toDateString()}
              readOnly
              onFocus={(e) => {
                setOpen(true);
              }}
              onClick={stopPropagation}
              className="has-val"
              label="Start Date"
            />
          </div>
          <div className="col-lg-6">
            <CustomInput
              ref={endRef}
              className="has-val"
              onClick={stopPropagation}
              onFocus={(e) => {
                setOpen(true);
              }}
              defaultValue={new Date().toDateString()}
              readOnly
              label="End Date"
            />
          </div>
          <div className="col-12">
            <Collapse onClick={stopPropagation} in={open}>
              <InfiniteCalendar
                Component={CalendarWithRange}
                height={300}
                width={`100%`}
                theme={{
                  weekdayColor: "var(--color-primary)",
                  headerColor: "var(--color-primary-dark)",
                  selectionColor: "var(--color-primary)",
                  todayColor: "var(--color-primary-dark)",
                  accentColor: "var(--color-primary-dark)",
                  floatingNav: {
                    background: "var(--color-primary-dark)",
                    color: "#FFF",
                  },
                }}
                minDate={new Date()}
                selected={{
                  end: new Date(),
                }}
                onSelect={dateSelect}
                displayOptions={{
                  layout: "landscape",
                  showTodayHelper: false,
                }}
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceAuctions;
