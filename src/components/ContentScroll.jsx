import React, { forwardRef, useEffect, useState } from "react";

const ContentScroll = forwardRef(function ContentScroll({ reloadProps }, ref) {
  const [isScrollable, setIsScrollable] = useState([false, false]);
  const [contentWidth, setContentWidth] = useState(0);
  let isAlreadyLoaded = false;

  const contentRef = ref;

  //checkear si el contenido se ve interamente o hay que scrollear para verlo,
  //en caso de que no se vea activar las flechas de scroll con el useState
  const checkScrollable = () => {
    if (contentRef.current.scrollWidth > contentRef.current.clientWidth) {
      setIsScrollable([false, true]);
    } else {
      setIsScrollable([false, false]);
    }
    setContentWidth(contentRef.current.clientWidth);
  };

  useEffect(() => {
    contentRef.current.scrollBy({ left: -10000 });
    checkScrollable();
  }, reloadProps);

  useEffect(() => {
    if (isAlreadyLoaded) {
      return;
    }

    checkScrollable();

    window.addEventListener("resize", checkScrollable);

    const observer = new MutationObserver(checkScrollable);
    observer.observe(contentRef.current, { childList: true, subtree: true });
    isAlreadyLoaded = true;
    
    //scrollear contenido desde el raton del usuario
    const mouseScroll = (event) => {
      event.preventDefault();
      contentRef.current.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
      if (
        contentRef.current.scrollWidth -
          contentRef.current.scrollLeft -
          contentRef.current.clientWidth <=
        1
      ) {
        setIsScrollable([true, false]);
      } else if (contentRef.current.scrollLeft === 0) {
        setIsScrollable([false, true]);
      } else {
        setIsScrollable([true, true]);
      }
    };

    const scrollContainer = contentRef.current;
    scrollContainer.addEventListener("wheel", mouseScroll);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollLeft = () => {
    contentRef.current.scrollBy({
      left: -(contentWidth - 50),
      behavior: "smooth",
    });
    if (contentRef.current.scrollLeft - contentRef.current.clientWidth <= 0) {
      setIsScrollable([false, true]);
    }
  };

  const scrollRight = () => {
    contentRef.current.scrollBy({
      left: contentWidth - 50,
      behavior: "smooth",
    });
    if (
      contentRef.current.scrollLeft + contentRef.current.clientWidth * 2 >=
      contentRef.current.scrollWidth + 50
    ) {
      setIsScrollable([true, false]);
    }

    setIsScrollable(function (prev) {
      const newState = [...prev];
      newState[0] = true;
      return newState;
    });
  };

  return (
    <div className="scroll">
      {isScrollable[0] && (
        <div className="especial especial-sx" onClick={scrollLeft}>
          <span>&lt;</span>
        </div>
      )}
      {isScrollable[1] && (
        <div className="especial especial-dx" onClick={scrollRight}>
          <span>&gt;</span>
        </div>
      )}
    </div>
  );
});
export default ContentScroll;
