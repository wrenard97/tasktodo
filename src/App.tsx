export default function App() {
  const FizzBuzz = () => {
    const renderFizzBuzz = () => {
      let items = [];

      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          items.push(<div key={i}>FizzBuzz</div>);
        } else if (i % 3 === 0) {
          items.push(<div key={i}>Fizz</div>);
        } else if (i % 5 === 0) {
          items.push(<div key={i}>Buzz</div>);
        } else {
          items.push(<div key={i}>{i}</div>);
        }
      }

      return items;
    };

    return (
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="grid grid-cols-5">{renderFizzBuzz()}</div>
      </div>
    );
  };

  return <FizzBuzz />;
}
