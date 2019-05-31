import React from "react";
import "./createpush.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Highlight from "react-highlight";
import Hand from "../../assets/images/online_banking_usbank_Finale_cut.png";
import AppLogo from "../../assets/images/app_logo.jpg";
import dynamicValues from "../../assets/apis/pushDynamic.json";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback
} from "reactstrap";
// import "/no"
export default class CreatePush extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Purchase",
      email: "",
      approversID: "",
      subtitle: "",
      body: "",
      validate: {
        emailState: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  handleChange = async event => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
    });
  };
  dValueAppend = val => {
    this.setState((prevState, props) => {
      console.log(props);
      return { body: prevState.body + " " + "{{" + val + "}}" };
    });
  };

  submitForm(e) {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(e.target);
    const data = {
      templateId: "mpn_p",
      templateName: "purchase_alert_mobile_push_notification",
      title: this.state.title,
      body: this.state.body,
      icon: "",
      badge: "",
      category: "",
      android_sound: "",
      ios_sound: ""
    };
    console.log(data);
    fetch("http://vmiksa69901cst:8087/communicationhub/template/store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { email, password, title, body, subtitle } = this.state;
    const bodyPlaceHolder =
      this.state.body == ""
        ? "Verify unusual activity on Debit Card ending in 1843. Open the mobile app to verify."
        : this.state.body;
    const subtitlePlaceHolder =
      this.state.subtitle == "" ? "" : this.state.subtitle;
    const dValues = dynamicValues.dynamicFields.split(",");
    console.log(dValues);
    return (
      <div>
        <h5 class="topH5">Create New Push</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-lg-4 col-md-5 mg-5">
              <div class="appView" style={{ zIndex: "9" }}>
                <img class="applogo" src={AppLogo} />
                <span id="pushAppName">U.S. BANK</span>
                <span class="apnMoment">3m ago</span>

                <h6 id="title">{this.state.title}</h6>

                <h6>{bodyPlaceHolder}</h6>
              </div>
              <img src={Hand} />
            </div>
            <div className="col-lg-7 mg-5 ml-175 clearfix">
              <h6 id="cardHeader">Create New Push Notification</h6>
              <div className="float-left" style={{ width: "400px" }}>
                {/* <Container> */}
                <form
                  action="http://foo.com"
                  method="post"
                  className="form"
                  onSubmit={e => this.submitForm(e)}
                >
                  <Col>
                    <FormGroup>
                      <Label>Title</Label>
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Campaign Title"
                        value={title}
                        // valid={this.state.validate.emailState === "has-success"}
                        // invalid={
                        //    this.state.validate.emailState === "has-danger"
                        // }
                        onChange={e => {
                          this.validateEmail(e);
                          this.handleChange(e);
                        }}
                      />
                      <FormFeedback valid>
                        That's a nice looking title you've got there.
                      </FormFeedback>
                      {/* <FormFeedback>
                        Uh oh! Looks like there is an issue with your email.
                        Please input a correct email.
                      </FormFeedback> */}
                      <FormFeedback>
                        Uh oh! Looks like there is an issue with your input.
                        Please input a correct title.
                      </FormFeedback>
                      <FormText>Please enter Push notification title</FormText>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="subtitle">Subtitle</Label>
                      <Input
                        type="subtitle"
                        name="subtitle"
                        id="subtitle"
                        placeholder="optional"
                        value={subtitle}
                        onChange={e => this.handleChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="body">Body </Label>
                      <span class="floatRight">
                        {" "}
                        {this.state.body.length} of 160{" "}
                      </span>
                      <Input
                        type="textarea"
                        name="body"
                        id="body"
                        placeholder=""
                        value={body}
                        onChange={e => this.handleChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="examplePassword">Approver's ID</Label>
                      <Input
                        type="password"
                        name="approversID"
                        id="approversID"
                        placeholder="********"
                        value={password}
                        onChange={e => this.handleChange(e)}
                      />
                    </FormGroup>

                    <Button
                      style={{
                        float: "right",
                        marginBottom: "20px",
                        display: "block"
                      }}
                    >
                      Submit
                    </Button>
                  </Col>
                </form>
                {/* </Container> */}
              </div>
              <div
                className="float-right bdThin"
                style={{ maxWidth: "250px", padding: "20px" }}
              >
                <h6 id="cardHeader">Dynamic Values from Hogan</h6>
                {dValues.map(each => {
                  return (
                    <Button
                      outline
                      color="primary"
                      onClick={() => this.dValueAppend(each)}
                      style={{ margin: "5px" }}
                    >
                      {each}
                    </Button>
                  );
                })}
              </div>
              <div class="row bdThin clearfix float-left bg">
                <div class="col snippet" style={{ minWidth: "700px" }}>
                  {/* <div class="snippet"> */}
                  <div class="">
                    <div>
                      {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}

                      <Highlight language="javascript">
                        {`{
   “aps” : {
      “alert” : {
         “title” : “${this.state.title}”,
         “subtitle” : “${subtitlePlaceHolder}”,
         “body” : “${bodyPlaceHolder}",
      },
      “category” : “Alert”
   },
   “transactionID” : “14ER45TR51XZ”
}`}
                      </Highlight>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
