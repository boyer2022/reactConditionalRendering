// conditional rendering - allows control what gets rendered
//                          in your application based on certain conditions
//                        )show, hide, or change components)

import UserGreeting from "./UserGreeting.jsx"

function App() {
  

  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Matt B"/>
    </>
  )
}

export default App
