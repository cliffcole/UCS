import React,{Component} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import {Link,NavLink, Route,Switch} from 'react-router-dom';
import Faults from './Faults';
import License from './License';
import Main from './Main';

class content extends Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        
    }
    render() {
        console.log(this.props);
        const { activeItem } = this.state
        let currentActiveItem = this.state.activeItem
        let jsxPage = ""
        if(this.props.match.params.hostname === null){
            jsxPage = (<p>Please select a Fabric</p>);
        }
        if(currentActiveItem === "main"){
            jsxPage = (<Main hostname={this.props.match.params.hostname}/>)
        }
        else if (currentActiveItem === "faults") {
            jsxPage = (<Faults hostname={this.props.match.params.hostname}/>)
        }
        else if (currentActiveItem === "license") {
            jsxPage = (<License hostname={this.props.match.params.hostname}/>);
        }else {
            jsxPage = (<p>Please select a fabric to view data</p>);
        }

      return (
        <div>
          <Menu size='small' pointing secondary>
            <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick}>Main </Menu.Item>
            <Menu.Item name='faults' active={activeItem === 'faults'} onClick={this.handleItemClick} />
            <Menu.Item name='license' active={activeItem === 'license'} onClick={this.handleItemClick} />
            
          </Menu>
  
            <Segment attached='bottom'>
                {jsxPage}
                {/* <Switch>
                
                <Route 
                    
                    path="/fabrics/:hostname/faults"
                    render={
                        () => {
                        return (<Faults />)
                        }
                    }
                />
                <Route 
                    
                    path={`${this.props.match.url}/license`}
                    component={License}
                />
                <Route 
                    path="/fabrics/:hostname"
                    render={
                        () => {
                        return (<Main />)
                        }
                    }
                />
                </Switch> */}
          </Segment>
        </div>
      )
    }

}
export default content;