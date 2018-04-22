import React,{Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SideMenu extends Component {
    state = {activeItem: null}

    handleItemClick = (event, data) => {
        //this.setState({ activeItem: name })
        console.log(event,data);
        console.log(data.children);
    }

    render() {
      const { activeItem } = this.state || {}
      const fabrics = ['Server1','Server2']
  
      return (
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Fabrics</Menu.Header>
  
            <Menu.Menu>
              <Menu.Item as={Link} to={'/fabrics/' +fabrics[0]} active={activeItem === fabrics[0]} onClick={this.handleItemClick}>{fabrics[0]}</Menu.Item>
              <Menu.Item as={Link} to={'/fabrics/' +fabrics[1]} active={activeItem === fabrics[1]} onClick={this.handleItemClick}>{fabrics[1]}</Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
    }
}   

export default SideMenu
