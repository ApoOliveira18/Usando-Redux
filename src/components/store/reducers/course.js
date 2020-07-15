const INITIAL_STATE = {
  activeLesson: {}, //null
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segundo aula' },
        { id: 3, title: 'Terceira aula' },
      ],
    },
    {
      id: 2,
      title: 'Iniciando com Redux',
      lessons: [
        { id: 4, title: 'Quarta aula' },
        { id: 5, title: 'Quinta aula' },
        { id: 6, title: 'Sexta aula' },
      ],
    },
  ]
}

export default function course(state = INITIAL_STATE, action) {
  //console.log(action);

  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    };
  }

  return state;
}
