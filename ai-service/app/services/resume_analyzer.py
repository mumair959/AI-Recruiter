import re

class ResumeAnalyzer:

    TECH_STACK = [
        "PHP",
        "Laravel",
        "Node.js",
        "React",
        "React.js",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git",
        "GitHub Actions",
        "n8n",
        "OpenAI",
        "AI Agents"
    ]


    @classmethod
    def extract_skills(cls, text: str):

        skills = []

        lower_text = text.lower()

        for skill in cls.TECH_STACK:

            if skill.lower() in lower_text:
                skills.append(skill)

        return skills
    
    @staticmethod
    def extract_experience(text: str):

        experience = []

        pattern = (
            r'([A-Za-z ]+Engineer.*?)'
            r'[-—]'
            r'([A-Za-z ]+)'
        )

        matches = re.findall(
            pattern,
            text
        )


        for title, company in matches:

            experience.append({
                "title": title.strip(),
                "company": company.strip()
            })


        return experience
    
    @staticmethod
    def extract_education(text: str):

        education = []


        keywords = [
            "Bachelor",
            "Master",
            "BS",
            "MS",
            "Computer Science",
            "Software Engineering"
        ]


        lines = text.split("\n")


        for line in lines:

            for keyword in keywords:

                if keyword in line: #if keyword.lower() in line.lower():

                    education.append(
                        line.strip()
                    )

                    break


        return education
    
    @staticmethod
    def extract_experience_years(text):

        matches = re.findall(
            r'(\d+)\+?\s*years',
            text.lower()
        )

        if matches:
            return max(
                [int(x) for x in matches]
            )

        return 0
    
    @classmethod
    def analyze(cls, text: str):

        return {
            "skills": cls.extract_skills(text),
            "experience": cls.extract_experience(text),
            "education": cls.extract_education(text),
            "experience_years": cls.extract_experience_years(text),
        }