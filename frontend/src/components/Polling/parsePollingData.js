import OptionsList from './OptionsList';

export default function parsePollingData(state, castVote){

let data = {
  id: 1,
  title: "Create A New Poll",
  description: null,
  options: <button onClick={() => alert("Create new interactive poll!")}>+</button>
}

if(state.options[0]) {

data.title = state.poll[0].title;
data.description = state.poll[0].description;

data.options = state.options.map((o,index) => {

	return(
		<OptionsList
		key={index}
		index={o.id}
		options={o.choice}
		votes={o.votes}
    vote={() => castVote(o.id)}
    hasVoted={state.hasVoted}
  />
	)
});
}

  return data;

}

