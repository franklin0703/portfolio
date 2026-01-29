function Skills() {
  const skills = [
    {
      name: "Python",
      details: [
        "Variables, Data Types",
        "Loops & Functions",
        "OOPS Basics",
        "File Handling",
        "Basic Data Analysis"
      ]
    },
    {
      name: "SQL",
      details: [
        "CRUD Operations",
        "Joins (INNER, LEFT)",
        "Subqueries",
        "Aggregations",
        "Filtering & Sorting"
      ]
    },
    {
      name: "HTML",
      details: [
        "Semantic Tags",
        "Forms & Inputs",
        "Accessibility Basics",
        "SEO Friendly Structure"
      ]
    },
    {
      name: "CSS",
      details: [
        "Flexbox & Grid",
        "Responsive Design",
        "Animations",
        "Modern UI Styling"
      ]
    },
    {
      name: "JavaScript",
      details: [
        "Variables & Functions",
        "DOM Manipulation",
        "ES6+ Features",
        "Events & Arrays"
      ]
    },
    {
      name: "React",
      details: [
        "Components & Props",
        "useState & useEffect",
        "Conditional Rendering",
        "Project Structure"
      ]
    },
    {
      name: "Power BI",
      details: [
        "DAX Functions",
        "Power Query",
        "Dashboards",
        "Data Visualization"
      ]
    }
  ];

  return (
    <section id="skills" className="skills section reveal">
      <h2>Technical Skills</h2>

      <div className="chip-group">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="chip">{skill.name}</span>

            <div className="skill-tooltip">
              <ul>
                {skill.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
