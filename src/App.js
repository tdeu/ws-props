import Profile from './profile/Profile'

function App() {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div className="App">
      <Profile
        fullName="Thomas De Rouck"
        bio="Je suis employé"
        profession="Marketing"
        handleName={handleName}
      >
        {"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}
      </Profile>
    </div>
  );
}

export default App;
