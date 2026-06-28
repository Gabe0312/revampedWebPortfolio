const skillGroups = [
    {
        title: 'Embedded & Core Languages',
        skills: ['C++', 'C', 'Python', 'Go', 'Java', 'SQL', 'Flask'],
    },
    {
        title: 'Hardware & Controllers',
        skills: ['ESP-32', 'Arduino', 'Raspberry Pi', 'I2C', 'FreeRTOS'],
    },
    {
        title: 'Tools & Technologies',
        skills: [
            'Git',
            'GitHub',
            'Azure DevOps',
            'PlatformIO',
            'VSCode',
            'IntelliJ',
            'React',
            'Gradle',
            'MongoDB',
            'Flask',
            'Gemini',
            'Copilot',
            'Codex',
        ],
    },
    {
        title: 'Web & App Development',
        skills: ['JavaScript', 'HTML', 'CSS', 'ReactJS', 'Kotlin', 'Swift'],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills">
            <h1>Skills</h1>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article className="skill-group" key={group.title}>
                        <h2>{group.title}</h2>

                        <ul className="skill-list">
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
