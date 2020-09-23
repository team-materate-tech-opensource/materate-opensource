import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .circle {
        margin: 5px;
        border-radius: 50%;
        background: ${(props) => props.background};
        height: 30px;
        width: 30px;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

class StudentDots extends React.Component {
    render() {
        return (
            <Styles background={this.props.background}>
                <a href={`#question`+this.props.id}>
                    <div className="circle d-flex align-items-center justify-content-center font-weight-bold">
                        {this.props.text}
                    </div>
                </a>
            </Styles>
        );
    }
}
export default StudentDots;

StudentDots.defaultProps = {
    background: "#7dfd9b",
    text: "",
};
