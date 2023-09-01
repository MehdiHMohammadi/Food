import Header from "./components/header";
const API_ENDPOINT = "https://react-mini-projects-api.classbon.com/story/list";

const App = () => {
  console.log("APP");

  return (
    <>
      <div className="h-screen   bg-slate-700">
        <Header />
        <h1 className="text-3xl ">فست فود</h1>
      </div>
    </>
  );
};

export default App;
