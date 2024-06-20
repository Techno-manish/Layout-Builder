// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderContent = () => (
    <div className="contentContainer">
      <h1>Content</h1>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
  )

  const renderRightNavbar = () => (
    <div className="rightNavContainer">
      <h1>Right Navbar</h1>
      <ul>
        <li className="list">Item 1</li>
        <li className="list">Item 2</li>
        <li className="list">Item 3</li>
        <li className="list">Item 4</li>
      </ul>
    </div>
  )

  const renderLeftNavbar = () => (
    <div className="leftNavContainer">
      <h1>Left Navbar Menu</h1>
      <div className="box">
        <p>Ad 1</p>
      </div>
      <div className="box">
        <p>Ad 2</p>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value

        return (
          <div className="bodyContainer">
            {showLeftNavbar && renderLeftNavbar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
