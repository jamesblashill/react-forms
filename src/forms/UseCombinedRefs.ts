import * as React from "react";

export function useCombinedRefs<T>(...refs: (React.ForwardedRef<T> | React.RefObject<T>)[]) {
  const targetRef = React.useRef<T>(null)

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef?.current)
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
