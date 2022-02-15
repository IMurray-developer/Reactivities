import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../layouts/NavBar';
import LoadingComponents from '../layouts/LoadingComponents';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {
    const {activityStore} = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]);

    if (activityStore.loadingInitial) return <LoadingComponents content='Loading App' />

    return (
        <>
            <NavBar/>
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard  />
            </Container>
        </>
    );
}

export default observer(App);
