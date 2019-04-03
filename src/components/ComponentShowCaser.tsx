import React, { Component } from 'react';

interface iComponentShowCaserProps {
  component:{
    name: string,
    path: string,
    id: number
  },
}

class ComponentShowCaser extends Component<iComponentShowCaserProps, {}> {
  
  render() {
    

    const ShowCasedComponent = React.lazy(() => import('./'+this.props.component.path))
    
    return (
      <React.Suspense fallback="loading">
        <ShowCasedComponent />
      </React.Suspense>
    );
  }
}

export default ComponentShowCaser;
