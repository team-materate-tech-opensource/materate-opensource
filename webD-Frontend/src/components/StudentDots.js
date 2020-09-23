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
`;

class StudentDots extends React.Component {
    render() {
        return (
            <Styles background={this.props.background}>
                <div className="circle d-flex align-items-center justify-content-center font-weight-bold">
                    {this.props.text}
                </div>
            </Styles>
        );
    }
}
export default StudentDots;

StudentDots.defaultProps = {
    background: "#7dfd9b",
    text: "",
};
