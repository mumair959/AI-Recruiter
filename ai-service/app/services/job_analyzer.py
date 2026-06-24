import re


class JobAnalyzer:

    SKILLS = [
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
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git",
        "GitHub Actions",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "n8n",
        "AI Agents",
        "OpenAI",
    ]


    @classmethod
    def analyze(
        cls,
        title: str,
        description: str,
        requirements: str = ""
    ):

        text = f"""
        {title}
        {description}
        {requirements}
        """

        return {

            "required_skills":
                cls.extract_skills(text),

            "preferred_skills":
                [],

            "min_experience":
                cls.extract_experience(text),

            "seniority":
                cls.detect_seniority(text)

        }


    @classmethod
    def extract_skills(cls, text):

        found = []

        text_lower = text.lower()

        for skill in cls.SKILLS:

            if skill.lower() in text_lower:
                found.append(skill)

        return list(set(found))


    @staticmethod
    def extract_experience(text):

        matches = re.findall(
            r'(\d+)\+?\s*(?:years|year)',
            text.lower()
        )

        if matches:
            return max(
                [int(x) for x in matches]
            )

        return 0


    @staticmethod
    def detect_seniority(text):

        text = text.lower()

        if "lead" in text:
            return "Lead"

        if "principal" in text:
            return "Lead"

        if "senior" in text:
            return "Senior"

        if "mid" in text:
            return "Mid"

        years = JobAnalyzer.extract_experience(text)

        if years >= 6:
            return "Senior"

        if years >= 3:
            return "Mid"

        return "Junior"