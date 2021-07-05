import React from 'react'
import DisplayBalance from './DisplayBalance'
import {Grid,Segment} from 'semantic-ui-react'

function DisplayBalances(){
    return (
    <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="2000" color="green"/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title="Expense" value="1000" color="red"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default DisplayBalances