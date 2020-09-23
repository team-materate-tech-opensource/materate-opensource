import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    .circle {
        margin: 5px;
        border-radius: ${(props) => props.radius};
        background: ${(props) => props.background};
        height: ${(props) => props.size};
        width: ${(props) => props.size};
    }
    a{
        color: ${(props) => props.color};
        text-decoration: none;
    }
`;

class StudentDots extends React.Component {
    render() {
        return (
            <Styles background={this.props.background} radius={this.props.radius} color={this.props.color} size={this.props.size}>
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
    radius: "50%",
    color: "black",
    size: "30px"
};
