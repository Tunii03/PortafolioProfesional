import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../styles/Experience.css';

const experiencia = [
  {
    role: 'Soporte Informático',
    org: 'Justicia Córdoba — Tribunal San Francisco',
    period: 'Agosto 2025 — Actualidad',
    current: true,
    summary:
      'Brindo soporte técnico integral al personal judicial del tribunal, garantizando la continuidad operativa mediante la resolución eficiente de incidencias de hardware, software y conectividad.',
    tasks: [
      'Atención y asistencia técnica a usuarios internos.',
      'Diagnóstico y reparación de fallas en hardware y software.',
      'Instalación, configuración y actualización de equipos.',
      'Soporte en impresoras, periféricos y conexión de red.',
      'Administración básica de usuarios y permisos.',
      'Registro y seguimiento de incidencias mediante sistema de tickets.',
      'Manejo responsable de información sensible.',
    ],
  },
];

const educacion = [
  {
    role: 'Ingeniería en Sistemas de Información',
    org: 'UTN — Facultad Regional San Francisco',
    period: 'Marzo 2023 — Actualidad',
    current: true,
  },
  {
    role: 'Título Secundario',
    org: 'Escuela Normal — San Francisco, Córdoba',
    period: 'Finalizado en Diciembre 2022',
    current: false,
  },
];

const TimelineItem = ({ item }) => (
  <article className="timeline-item">
    <div className="timeline-marker" aria-hidden="true" />
    <div className="timeline-content">
      <div className="timeline-head">
        <h4 className="timeline-role">{item.role}</h4>
        {item.current && <span className="timeline-badge">Actualidad</span>}
      </div>
      <p className="timeline-org">{item.org}</p>
      <p className="timeline-period">{item.period}</p>
      {item.summary && <p className="timeline-summary">{item.summary}</p>}
      {item.tasks && (
        <ul className="timeline-tasks">
          {item.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

const Experience = () => {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title">Experiencia y Formación</h2>
      <p className="section-subtitle">
        Mi recorrido profesional y académico hasta hoy.
      </p>

      <div className="experience-grid">
        <div className="experience-column">
          <h3 className="experience-column-title">
            <FontAwesomeIcon icon={faBriefcase} /> Experiencia Profesional
          </h3>
          <div className="timeline">
            {experiencia.map((item) => (
              <TimelineItem key={item.role} item={item} />
            ))}
          </div>
        </div>

        <div className="experience-column">
          <h3 className="experience-column-title">
            <FontAwesomeIcon icon={faGraduationCap} /> Educación
          </h3>
          <div className="timeline">
            {educacion.map((item) => (
              <TimelineItem key={item.role} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
