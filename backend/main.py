import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Portfolio Contact API")

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    os.getenv("FRONTEND_URL", "*")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

def send_email_smtp(contact: ContactMessage):
    sender = os.getenv("EMAIL_SENDER")
    password = os.getenv("EMAIL_PASSWORD")
    receiver = os.getenv("EMAIL_RECEIVER")

    if not sender or not password:
        raise ValueError("Credenciales de correo no configuradas en el entorno.")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Nuevo mensaje de Portafolio: {contact.name}"
    msg["From"] = f"Portafolio Web <{sender}>"
    msg["To"] = receiver
    msg["Reply-To"] = contact.email

    html_content = f"""
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
          <h2 style="color: #f472b6; margin-top: 0;">Nuevo mensaje desde tu Portafolio</h2>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
          <p><strong>Nombre:</strong> {contact.name}</p>
          <p><strong>Correo:</strong> <a href="mailto:{contact.email}" style="color: #38bdf8;">{contact.email}</a></p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #0f172a; padding: 16px; border-radius: 8px; border-left: 4px solid #38bdf8; color: #e2e8f0; white-space: pre-line;">
            {contact.message}
          </div>
        </div>
      </body>
    </html>
    """

    msg.attach(MIMEText(html_content, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, msg.as_string())

@app.post("/api/contact")
async def contact_endpoint(payload: ContactMessage):
    try:
        send_email_smtp(payload)
        return {"status": "success", "message": "Mensaje enviado exitosamente."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al enviar el correo: {str(e)}")

@app.get("/")
def health_check():
    return {"status": "ok", "message": "Backend activo"}