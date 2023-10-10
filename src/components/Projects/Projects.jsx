import React from "react";
import "./Projects.scss";
import BackButton from "./BackButton";
const Projects = () => {
  return (
    <div className="main">
        <BackButton />
      <div className="cabecalho">
        <h1>Projects</h1>
        <p>I find myself divided between Studio Catavento and Akiva, my current challenges. It's been a genuine pleasure to develop and nurture both ventures.</p>
      </div>
      <div className="links">
        <div className="link1 link">
          <h3>Akiva</h3>
          <h4>Empower Your Family's Financial Future with Akiva!</h4>
          <p>
            Discover a simpler way to manage your family's finances with Akiva,
            the leading family financial management tool. Whether you're
            budgeting for monthly expenses, planning for future vacations, or
            saving for your child's education, Akiva has got you covered.
          </p>
          <ul>
            <li>
              Household Budgeting: Easily set up and manage monthly or yearly
              family budgets.
            </li>
            <li>
              Expense Tracking: Capture every expenditure and understand where
              every penny goes with Akiva.
            </li>
            <li>
              Savings Goals: Define your financial goals, be it a new home, a
              dream vacation, or an emergency fund.
            </li>
            <li>
              Debt Management: Keep track of any loans or debts and design a
              plan to pay them off with Akiva's intuitive interface.
            </li>
            <li>
              Interactive Reports: Visually understand your income, expenses,
              and savings through interactive charts and graphs, all within
              Akiva.
            </li>
            <li>
              Secure & Private: Your data is encrypted with Akiva, ensuring your
              financial details remain private and secure.
            </li>
          </ul>
        </div>
        <div className="link2 link">
          <h3>Studio Catavento</h3>
          <h5>for Web Art</h5>
          <h4>Bring Ideas to Life with Studio Catavento!</h4>
          <p>
            Welcome to Studio Catavento – the hub of creativity where your
            visions soar to new heights. As your trusted creative partner, we're
            committed to translating your ideas into tangible masterpieces. From
            intricate designs to expansive campaigns, Studio Catavento is where
            imagination meets execution.
          </p>
          <ul>
            <li>
              Tailored Branding: Craft a brand identity that truly represents
              your essence. With Studio Catavento, make a statement that lasts.{" "}
            </li>
            <li>
              Digital Excellence: Navigate the digital realm with our
              cutting-edge web designs, immersive UI/UX, and innovative
              solutions.
            </li>
            <li>
              Print Magic: Showcase your message through compelling print
              designs, from impactful brochures to striking banners.
            </li>
            <li>
              Insightful Consultations: Leverage our deep industry knowledge and
              creative strategies to elevate your projects.
            </li>
            <li>
              Holistic Campaigns: Seamlessly integrate across platforms, be it
              digital or print, ensuring your message resonates.
            </li>
            <li>
              Dedication to Your Vision: At Studio Catavento, we champion your
              ideas, ensuring they are at the heart of every creation.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
