import './index.css'

const TabItem = props => {
  const {tabItem, changeTab} = props
  const {tabId, displayText} = tabItem

  const onToggletab = () => {
    changeTab(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" className="tab-button" onClick={onToggletab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
