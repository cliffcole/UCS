import React,{Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import SideMenu from './../components/SideMenu'
import {Container,Grid} from 'semantic-ui-react';
import Content from './../components/Content'

class Layout extends Component {

    render() {

        return(
            <Container fluid>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <SideMenu />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Switch>
                            <Route 
                                exact
                                path="/"
                                component={Content}
                            />

                            <Route 
                                exact
                                path="/fabrics/:hostname"
                                component={Content}
                            />
                            </Switch>
                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

}

export default Layout;

