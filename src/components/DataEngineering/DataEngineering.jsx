import { useState } from 'react';
import {
  Database,
  Award,
  Server,
  Cloud,
  Layers,
  CheckCircle2,
  Workflow,
  Cpu,
  ShieldCheck,
  Activity,
  HardDrive,
  GitFork,
  ArrowRight,
  FileCode,
  Sparkles
} from 'lucide-react';
import './DataEngineering.css';

export const DataEngineering = () => {
  const [filterCategory, setFilterCategory] = useState('ALL');

  // The complete list of 19 topics requested
  const topics = [
    { title: 'ETL/ELT Concepts', category: 'Core Architecture', desc: 'Extraction, transformation & loading workflows for scalable modern lakehouse pipelines.' },
    { title: 'Data Modeling', category: 'Storage & Schema', desc: 'Star, snowflake schemas, dimensional modeling, and SCD (Slowly Changing Dimensions).' },
    { title: 'SQL for Data Engineers', category: 'Core Architecture', desc: 'Complex window functions, CTEs, query optimization, and execution plan indexing.' },
    { title: 'Data Warehousing', category: 'Storage & Schema', desc: 'Modern analytical storage architectures, partition pruning, and column-store engines.' },
    { title: 'Python for Data Engineering', category: 'Core Architecture', desc: 'Automating batch jobs, interacting with S3 APIs, and data transformation scripts.' },
    { title: 'Apache Airflow', category: 'Orchestration', desc: 'Authoring DAGs, operators, sensors, dynamic tasks, and automated failure retries.' },
    { title: 'Apache Spark', category: 'Big Data Processing', desc: 'Distributed memory computing, cluster resource managers, and execution DAG optimization.' },
    { title: 'PySpark', category: 'Big Data Processing', desc: 'Large scale distributed dataframe operations, PySpark SQL, and distributed joins.' },
    { title: 'Data Pipelines', category: 'Orchestration', desc: 'End-to-end automated pipelines from raw ingestion to curated gold analytical tables.' },
    { title: 'AWS S3', category: 'Cloud Infrastructure', desc: 'Scalable cloud data lake object storage, bucket lifecycle policies, and security.' },
    { title: 'AWS Glue', category: 'Cloud Infrastructure', desc: 'Serverless ETL, Glue Data Catalog, automated schema crawlers, and job triggers.' },
    { title: 'AWS Athena', category: 'Cloud Infrastructure', desc: 'Serverless interactive ad-hoc SQL querying over petabyte-scale S3 datasets.' },
    { title: 'Azure Data Factory', category: 'Cloud Infrastructure', desc: 'Enterprise data integration pipelines, linked services, and mapping data flows.' },
    { title: 'Databricks', category: 'Lakehouse & Delta', desc: 'Unified collaborative analytics platform powered by managed Apache Spark clusters.' },
    { title: 'Delta Lake', category: 'Lakehouse & Delta', desc: 'ACID transactions on cloud storage, time-travel versioning, and schema enforcement.' },
    { title: 'Data Quality', category: 'Governance & Ops', desc: 'Automated data expectation validations with Great Expectations and schema testing.' },
    { title: 'Data Governance', category: 'Governance & Ops', desc: 'Data cataloging, metadata management, lineage tracking, and compliance policies.' },
    { title: 'Monitoring & Logging', category: 'Governance & Ops', desc: 'Pipeline observability, CloudWatch alerting, error telemetry, and SLA tracking.' },
    { title: 'Real-time Data Processing', category: 'Big Data Processing', desc: 'Streaming architectures, event triggers, and low-latency micro-batch processing.' }
  ];

  const categories = ['ALL', 'Core Architecture', 'Big Data Processing', 'Cloud Infrastructure', 'Orchestration', 'Lakehouse & Delta', 'Governance & Ops'];

  const filteredTopics = filterCategory === 'ALL'
    ? topics
    : topics.filter((t) => t.category === filterCategory);

  const scrollToEnroll = () => {
    const el = document.getElementById('enrollment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="data-engineering" className="data-eng-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag teal">
            <Database size={14} />
            <span>TEAL SPECIALIZATION TRACK</span>
          </div>
          <h2 className="section-title">
            Enterprise Data Engineering Track
          </h2>
          <p className="section-desc">
            Learn distributed big data processing, cloud warehouses, pipeline orchestration with Apache Airflow &amp; PySpark, and lakehouse architectures.
          </p>
        </div>

        {/* Prominent Internship Certificate Badge Banner */}
        <div className="internship-badge-banner">
          <div className="badge-banner-left">
            <div className="certificate-icon-box">
              <Award size={34} />
            </div>
            <div>
              <span className="cert-eyebrow">GUARANTEED PRACTICAL CREDENTIAL</span>
              <h3 className="cert-headline">INTERNSHIP CERTIFICATE WILL BE PROVIDED</h3>
              <p className="cert-subtext">
                Every graduate completes an industry-grade data pipeline capstone verified with a formal internship completion letter and credential for your LinkedIn &amp; Resume.
              </p>
            </div>
          </div>
          <div className="badge-banner-right">
            <div className="cert-stamp">
              <ShieldCheck size={20} />
              <span>Verified Certificate</span>
            </div>
          </div>
        </div>

        {/* Data Pipeline Architecture Diagram / Visual Strip */}
        <div className="pipeline-flow-card">
          <h4 className="flow-title">Modern Lakehouse Data Flow Taught in Program:</h4>
          <div className="pipeline-flow-steps">
            <div className="flow-step">
              <span className="step-num">01</span>
              <span className="step-name">Data Ingestion</span>
              <span className="step-tools">APIs, S3, DB Logs</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="step-num">02</span>
              <span className="step-name">Orchestration</span>
              <span className="step-tools">Apache Airflow</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step highlight-step">
              <span className="step-num">03</span>
              <span className="step-name">Processing</span>
              <span className="step-tools">Spark &amp; PySpark</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="step-num">04</span>
              <span className="step-name">Storage</span>
              <span className="step-tools">Delta Lake / AWS Glue</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-step">
              <span className="step-num">05</span>
              <span className="step-name">Analytics &amp; BI</span>
              <span className="step-tools">Athena / Databricks</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="de-category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`de-filter-btn ${filterCategory === cat ? 'active' : ''}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 19 Topics Grid */}
        <div className="de-topics-grid">
          {filteredTopics.map((topic, index) => (
            <div key={index} className="de-topic-card">
              <div className="de-card-top">
                <span className="de-cat-badge">{topic.category}</span>
                <span className="de-index">#{String(topics.findIndex((t) => t.title === topic.title) + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="de-topic-title">
                <CheckCircle2 size={16} className="de-check-icon" />
                <span>{topic.title}</span>
              </h4>
              <p className="de-topic-desc">{topic.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="de-bottom-bar">
          <div className="de-bottom-info">
            <span className="de-bottom-highlight">Ready to engineer high-throughput data architectures?</span>
            <span className="de-bottom-sub">Hands-on access to cloud labs, Databricks workspaces, and live datasets.</span>
          </div>
          <button className="btn-de-enroll" onClick={scrollToEnroll}>
            <span>Enroll in Data Track</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
