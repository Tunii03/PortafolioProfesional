import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../styles/Certifications.css';

const certificaciones = [
  {
    title: 'Product Owner: Gestión de Productos con Metodologías Ágiles',
    issuer: 'UTN Centro e-Learning BA',
    date: 'Agosto 2026',
    tags: ['Product Owner', 'Agile'],
  },
  {
    title: 'Gestión Ágil con Atlassian Jira',
    issuer: 'Coursera',
    date: 'Diciembre 2024',
    tags: ['Scrum', 'Kanban', 'Jira'],
  },
  {
    title: 'Power BI (Business Intelligence)',
    issuer: 'Santander Academy',
    date: 'Julio 2024',
    tags: ['Power BI', 'Datos'],
  },
  {
    title: 'Excel Intermedio',
    issuer: 'Santander Academy',
    date: 'Junio 2024',
    tags: ['Excel', 'Datos'],
  },
  {
    title: 'Oratoria e Imagen Personal y Profesional',
    issuer: 'FASTA',
    date: 'Abril 2024',
    tags: ['Comunicación'],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-title">
      <h2 id="certifications-title" className="section-title">Certificaciones</h2>
      <p className="section-subtitle">
        Formación complementaria en gestión de productos, metodologías ágiles y análisis de datos.
      </p>

      <div className="certifications-grid">
        {certificaciones.map((cert) => (
          <article className="certification-card" key={cert.title}>
            <div className="certification-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div className="certification-body">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
              <div className="certification-tags">
                {cert.tags.map((tag) => (
                  <span key={tag} className="certification-tag">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
