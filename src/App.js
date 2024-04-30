import React from "react";
import Props from "./Props";


const App = () => {
  return (
    <>
      <h1 className="card-text text-center text-danger my-4">
        Bootstrap cards with props
      </h1>

      <div className="container my-4">
        <div className="row">
          <Props
            imgsrc="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
            title="House 1"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More"
          />

          <Props
            imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7s4GlZ5eNj9_lhj0muVt0kNl4HCJu4gLsl9igdrUQg&s"
            title="House 2"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More"
          />

          <Props
            imgsrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/485777661.jpg?k=72d29a3b3797bbe5ef10f9786030329170e94f4dc0652125f9b716d0930c080c&o=&hp=1"
            title="House 3"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More"
          />

          <Props
            imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGQt2E3AgKDUb8fzdj18oRAijdm-_0JFfWeql15KdeQ&s"
            title="House 4"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More"
          />
        </div>
      </div>
    </>
  )
}
export default App;
