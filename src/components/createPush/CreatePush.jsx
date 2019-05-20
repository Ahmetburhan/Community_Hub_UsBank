import React from "react";
import "./createpush.css";
import DonutChart from "../donutChart/DonutChart";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Highlight from "react-highlight";
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
      title: "US Bank",
      email: "",
      password: "",
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

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    const { email, password, title, body, subtitle } = this.state;
    const bodyPlaceHolder =
      this.state.body == ""
        ? "Verify unusual activity on Debit Card ending in 1843. Open the mobile app to verify"
        : this.state.body;
    const subtitlePlaceHolder =
      this.state.subtitle == "" ? "" : this.state.subtitle;

    return (
      <div>
        <h5 class="topH5">Create New Push</h5>
        <Breadcrumb />
        <div class="container-fluid wd-95">
          <div class="row">
            <div class="col-md-7 bdThin mg-5 bg">
              {/* <div class="snippet"> */}
              <div class="snippet">
                <div>
                  {/* <Highlight innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}

                  <Highlight language="javascript">
                    {`{
   “aps” : {
      “alert” : {
         “title” : “${this.state.title}”,
         “subtitle” : “${subtitlePlaceHolder}”,
         “body” : “${bodyPlaceHolder} ,
      },
      “category” : “Alert”
   },
   “transactionID” : “14ER45TR51XZ”
}`}
                  </Highlight>
                </div>
              </div>
            </div>
            <div class="col bdThin mg-5">
              <h6 id="cardHeader">Form</h6>

              <Container>
                <Form className="form" onSubmit={e => this.submitForm(e)}>
                  <div className="col-md-5" />
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
                        //   this.state.validate.emailState === "has-danger"
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
                      <Label for="body">Body</Label>
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
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={password}
                        onChange={e => this.handleChange(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Button style={{ float: "right", marginBottom: "20px" }}>
                    Submit
                  </Button>
                </Form>
              </Container>
            </div>
          </div>

          <div class="row">
            {/* <div class="col bdThin mg-5">
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
