import React from 'react';
import { connect } from 'react-redux';

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <strong>Aula {activeLesson.title}</strong>
    </div>
  );
}

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);

