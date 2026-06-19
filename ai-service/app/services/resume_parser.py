import re

from pypdf import PdfReader


class ResumeParser:

    @staticmethod
    def extract_email(text: str):
        match = re.search(
            r'[\w\.-]+@[\w\.-]+\.\w+',
            text
        )

        return match.group(0) if match else None

    @staticmethod
    def extract_phone(text: str):
        match = re.search(
            r'\+?\d[\d\s\-\(\)]{8,}',
            text
        )

        return match.group(0).strip() if match else None

    @staticmethod
    def extract_text(file_path: str):
        reader = PdfReader(file_path)

        text = ""

        for page in reader.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

        return text

    @classmethod
    def parse_resume(cls, file_path: str):
        text = cls.extract_text(file_path)

        email = cls.extract_email(text)

        phone = cls.extract_phone(text)

        return {
            "text": text,
            "email": email,
            "phone": phone
        }