function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
          {/* <h2>Functions</h2> */}
          <h3>Implied return</h3>
          fourTimesFive = { fourTimesFive }<br />
          mutiply(2, 4) = { multiply(4, 5) }<br />
        </>
      )
}
export default ImpliedReturn