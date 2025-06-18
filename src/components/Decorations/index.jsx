import { twClsx } from "../../misc/functions";
import React, { memo, useCallback, useEffect, useState } from "react";

const CIRCLE_STATUS = { pending: 0, tracing: 1, traced: 2, hidden: 3 };
const DOUBLE_UNDERLINE_STATUS = {
  pending: 0,
  first_expanding: 1,
  second_expanding: 2,
  done: 3,
};

/**
 * @returns
 * @param {{
 *      className?: string,
 *      stroke?: string,
 *      active?: boolean,
 *      onAnimationsEnd?: () => void,
 *      strokeWidth?: number,
 *      hideOnTraced?: boolean
 * }}
 */
const Circle = memo(
  ({
    className,
    active,
    onAnimationsEnd,
    stroke,
    strokeWidth,
    hideOnTraced,
  }) => {
    const [status, setStatus] = useState(CIRCLE_STATUS.pending);
    useEffect(() => {
      setStatus((status) => {
        if (status === CIRCLE_STATUS.pending && active) {
          return CIRCLE_STATUS.tracing;
        }
        if (status === CIRCLE_STATUS.hidden) {
          onAnimationsEnd?.();
        }
        return status;
      });
    }, [status, setStatus, active]);

    const onOpacityTransitionEnd = useCallback(
      () => setStatus(CIRCLE_STATUS.hidden),
      [setStatus]
    );
    const onTracingAnimationEnd = useCallback(
      () => setStatus(CIRCLE_STATUS.traced),
      [setStatus]
    );

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className={twClsx(
          className,
          active ? "transition-opacity" : "hidden",
          status >= CIRCLE_STATUS.traced && hideOnTraced && "opacity-0"
        )}
        onTransitionEnd={onOpacityTransitionEnd}
        width="100%"
        height="100%"
        strokeWidth={strokeWidth}
      >
        <path
          d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
          fill="none"
          stroke={stroke}
          className={twClsx(
            status === CIRCLE_STATUS.tracing && "animate-trace-path"
          )}
          onAnimationEnd={onTracingAnimationEnd}
        />
      </svg>
    );
  }
);

const Underline = memo(({ className, active, onAnimationEnd, fill }) => {
  return (
    <svg
      viewBox="0 0 300 10"
      id="svg"
      className={twClsx(
        className,
        "transition-all w-0 h-[10px] overflow-hidden",
        active ? "duration-[750ms] ease-out w-full" : "duration-0"
      )}
      preserveAspectRatio="none"
      onTransitionEnd={onAnimationEnd}
    >
      <path
        d="M3,5 C100,0 200,0 297,5 V297,10 C200,5 100,5 3,10 V0"
        fill={fill}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="3"
        cy="8"
        r="3"
        fill={fill}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="297"
        cy="8"
        r="3"
        fill={fill}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
});

const DoubleUnderline = memo(
  ({ classNames, active, onAnimationsEnd, fill }) => {
    const [status, setStatus] = useState(DOUBLE_UNDERLINE_STATUS.pending);
    useEffect(() => {
      setStatus((s) => {
        if (!active) {
          return DOUBLE_UNDERLINE_STATUS.pending;
        }
        if (s === DOUBLE_UNDERLINE_STATUS.pending && active) {
          return DOUBLE_UNDERLINE_STATUS.first_expanding;
        }
        return s;
      });
    }, [status, active]);
    const onFirstAnimationEnd = useCallback(
      () => setStatus(DOUBLE_UNDERLINE_STATUS.second_expanding),
      [setStatus]
    );
    return (
      <div>
        <Underline
          active={status >= DOUBLE_UNDERLINE_STATUS.first_expanding}
          onAnimationEnd={onFirstAnimationEnd}
          className={classNames?.first}
          fill={fill}
        />
        <div className="w-[90%] mx-auto">
          <Underline
            active={status >= DOUBLE_UNDERLINE_STATUS.second_expanding}
            onAnimationEnd={onAnimationsEnd}
            className={classNames?.second}
            fill={fill}
          />
        </div>
      </div>
    );
  }
);

const Decorations = { Circle, Underline, DoubleUnderline };
export default Decorations;
