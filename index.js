const newNote = () => {
  let tag = $('#choose-tag').val();
  let note = $('#note-text').val();

  fetch("https://ba2w3lgnm5.execute-api.us-west-1.amazonaws.com/prod/todos", {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"note": `${note}`, "tag": `${tag}`})
  }).then(response => getNotes())
  .then(notes => $('#note-text').val(''));
}

const getNotes = () => {
  $(".note-list").empty();
  fetch("https://ba2w3lgnm5.execute-api.us-west-1.amazonaws.com/prod/todos")
    .then(response => response.json())
    .then(notes => listNotes(notes))
    .catch(error => console.error({error}));
};

const listNotes = (notes) => {
  notes = notes["Items"].sort((a,b) => (b.created_at) - (a.created_at));
  getDates(notes);
  notes = filterNotes(notes);

  notes.forEach(note => {
    $('.note-list').append(`
      <div class='notes'>
        <div>${note.note}</div>
        <div>${note.tag}</div>
        <div>${new Date(note.created_at * 1000).toLocaleDateString()} ${new Date(note.created_at * 1000).toLocaleTimeString()}</div>
      </div>
      <br>
      `);
  });
};

const getDates = (notes) => {
  dates = notes.map(note => {
    return(new Date(note.created_at * 1000).toLocaleDateString());
  });
  dates = [...new Set(dates)];
}

const filterNotes = (notes) => {
  if ($('#filter').val() === 'All') {
    return notes;
  } else {
    notes = notes.map(note => {
      if (note.tag === $('#filter').val()) {
        return note;
      };
    });
    return notes.filter((obj) => obj);
  };
};


getNotes()
