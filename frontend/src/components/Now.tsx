export function Now(){
    return(
    <div className="now">
        <h3>Now</h3>
        <section id="Active">
            <h4>Active</h4>
            <p>- Managr: exploring employee lifecycle flows and payroll calculations</p>
            <p>- TeleStorage: prototyping Telegram-backed self-hosted storage</p>
        </section>

        <section id="Paused">
            <h4>Paused</h4>
            <p>- Birblingo: core mechanics explored, not actively worked on</p>
        </section>

        <section id="Learning">
            <h4>Learning</h4>
            <p>- Backend fundamentals with FastAPI</p>
            <p>- Networking and self-hosting under real-world constraints</p>
            <p>- Containerization with Docker and Docker Compose</p>
            <p>- Basics of CI/CD and Kubernetes</p>
        </section>
        <p id="updatedAt">December, 2025</p>
    </div>)
}