import React, { useState } from 'react';
import AddChore from './AddChore';
import Chores from './Chores';
import DoneChores from './DoneChores';
import ListHeader from '../Misc/ListHeader';
import ProgressBar from '../Misc/ProgressBar';

export default function Chore() {
  const [dashboardUsers, setDashboardUsers] = useState([]);
  const [choresList, setChoresList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [progress, setProgress] = useState({
    total: 0,
    current: 0,
  });

  return (
    <div>
      <ListHeader key="TODO" size="h4" title="TODO" />
      <AddChore choresList={choresList} setChoresList={setChoresList} />
      <ProgressBar choresList={choresList} doneList={doneList} />
      <Chores
        choreState={{
          choresList,
          setChoresList,
          doneList,
          setDoneList,
          progress,
          setProgress,
          dashboardUsers,
          setDashboardUsers,
        }}
      />
      {/* <ListHeader key="TODO-done" size="h6" title="DONE!" /> */}
      <DoneChores
        choreState={{
          choresList,
          setChoresList,
          doneList,
          setDoneList,
          progress,
          setProgress,
          dashboardUsers,
          setDashboardUsers,
        }}
      />
    </div>
  );
}
