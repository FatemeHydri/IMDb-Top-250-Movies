export default function Menu({menuItems} = []) {
    function renderMenu() {
        return menuItems.map(({id, title, link})=> {
            return (
                <li key={id}>
                    <a href={link}>{title}</a>
                </li>
            )
        })
      }
    return <ul>{renderMenu()}</ul>
}