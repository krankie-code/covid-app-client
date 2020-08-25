import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class results extends Component {
    render() {
        var url_stirng = (window.location.href).toLocaleLowerCase();
        var url = new URL(url_stirng)
        var count = url.searchParams.get('count')
        
        return (
            <div>
                <h1>Hi mom</h1>
                {count}
            </div>
        )
    }
}

export default withRouter(results)
