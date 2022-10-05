import AddTasks from '../AddTasks';

function Index({route}) {
    const {itemId} = route.params;
    return (
        <AddTasks typeUpdate={true} itemId={itemId}/>
    );
}

export default Index;
