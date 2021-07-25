import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styled from "styled-components";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    textAlign: "left",
    marginTop: "0.7rem",
    border: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Wrapper>
      <h1>FAQ</h1>
      <hr />
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel1" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>
              What is MyChoize Car Rental Service?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              MyChoize is a self-drive car rental brand owned by ORIX, Japan's
              second-largest self-drive car rental company currently managing
              more than 63,000 cars in Japan. With MyChoize, we aim to render
              Indian users with the best car rental service, providing the best
              of Japanese services and technology at Indian prices.{" "}
            </p>
            <p>Rent our cars on short-term basis; daily, weekly, fortnightly</p>
            <p>Or subscribe to it on monthly basis</p>

            <p>
              {" "}
              MyChoize self-drive car rental service offers:
              <ul>
                <li>Unbeatable Rates</li>
                <li>Easy & Quick Online Car Booking</li>
                <li>Clean & Well-Maintained Fleet</li>
                <li>Unlimited Kilometers</li>
                <li>Limited Liability</li>
                <li>Privacy & Freedom</li>
                <li>Anywhere Delivery</li>
              </ul>
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel2" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>
              Is MyChoize car rental service available in my city?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              MyChoize cars on rent are currently active in 20 Indian cities
              including Bangalore, Pune, Mumbai, Delhi-NCR, Hyderabad, Chennai,
              Kolkata, Jaipur, Indore, Chandigarh, Ahmedabad, Surat, Vadodara
              Ludhiana, Amritsar, Bhopal Goa, Dehradun, Rishikesh and Haridwar.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel3" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>
              What type of vehicles/cars does MyChoize car rental service
              offers?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              We have an exhaustive and fully sanitised range of well-maintained
              fleet. From Hatchbacks, Sedans, MUVs, to SUVs and Hybrids, we
              offer you over 25 vehicle makes. From Maruti and TATA, to Mahindra
              and Hyundai, we provide you with over 50+ models to choose from
              across various cities. We ensure you get the best{" "}
              <strong>cars on rent</strong> at lowest prices throughout India.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel4" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>
              What type of vehicles/cars does MyChoize car rental service
              offers?
            </div>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel5" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>{" "}
              How much does it cost to rent a car at MyChoize?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              MyChoize self-drive cars on rent are extremely affordable and
              convenient to book.Our self-drive car rental service start from
              INR 1200 onwards for limited KMs and INR 1500 onwards for
              unlimited mileage.Car Subscription packages start from INR 19,499
              onwards. However, please note the prices are dynamic and will
              depend on time, type of car, location and other variable factors.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel6" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>{" "}
              What are the advantages of availing cars on rent at MyChoize?
            </div>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Below are some of them:</p>
            <ul>
              <li>Unlimited KMs</li>
              <li>Doorstep delivery and pickup</li>
              <li>Sanitized self drive cars</li>
              <li>Fastag enabled</li>
              <li>Exhaustive fleet of cars </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel7" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>{" "}
              What are the advantages of subscribing to MyChoize cars?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              At Mychoize car rental, we give you not just one but many reasons
              to choose our self-drive cars on rent.
            </p>
            <p>Below are some of them:</p>

            <ul>
              <li>No road tax</li>
              <li>No waiting period</li>
              <li>No loans/credit appraisal</li>
              <li>Free service/maintenance and insurance</li>
              <li>Exhaustive fleet of cars </li>
            </ul>

            <p>
              Moreover, you also get the facility of driving new cars every
              month without any commitment as there are no lock-in periods,
              making your package exits smooth and easy.{" "}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel8" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>{" "}
              Can I book a car on rent for one week?{" "}
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Yes, you can avail MyChoize self-drive cars on rent anywhere in
              India on a daily, weekly, fortnightly or monthly basis. Monthly
              rides can be extended up to 3 years.{" "}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel9" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>{" "}
              What types of documents are required for renting a car at
              MyChoize?
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              You need to produce the KYC Documents comprising photo identity,
              an address proof (such as original Passport/Aadhar card) and a
              valid driving license. A copy of each needs to be submitted while
              picking up MyChoize self-drive cars on rent.{" "}
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <span>
                {expanded === "panel10" ? (
                  <RemoveIcon
                    style={{ fontSize: "1.5rem", fontWeight: "900" }}
                  />
                ) : (
                  <AddIcon />
                )}
              </span>
              Are MyChoize self-drive cars sanitised?
            </div>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Your safety is our priority. Be rest assured that MyChoize
              self-drive cars on rent are fully sanitized before they are handed
              over to the customers.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 10px;

  width: 90%;
  margin: auto;
  margin-top: 100px;
  border: 1px solid black;
  hr {
    width: 100px;
    border: 1px solid red;
  }
`;
