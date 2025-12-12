function Modal({
  isVisible,
  errorMessage,
}: {
  isVisible: boolean;
  errorMessage: null | string;
}) {
  if (isVisible === true)
    return (
      <div id="outterModal">
        <div id="innerModal">
          {/* <h3>The form submitted successfuly</h3> */}
          <h3 style={{ color: errorMessage == null ? "green" : "red" }}>
            {errorMessage == null
              ? "The form submitted successfuly"
              : errorMessage}
          </h3>
        </div>
      </div>
    );
  else {
    return <></>;
  }
}

export default Modal;
