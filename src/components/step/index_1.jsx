import React from 'react'
import Heading from '../heading';
import "./step.scss"

export default function Step({ step, number, body, classes = "" }) {

    switch (step) {
        case 'work':
            return (
                <div className={"step work--step " + classes}>
                    <div className="step__number">
                        <Heading heading={"h3"}>
                            {number}
                        </Heading>
                    </div>
                    <p className="step__body">
                        {body}
                    </p>
                </div>
            )
        case "step-block":
            return (
                <div className={"step step-block " + classes}>
                    <Heading> { body } </Heading>
                </div>
            )

        default:
            return (
                <div className={`step step__default ${classes}`}>
                    <div className="step__number">
                        <Heading heading={"h3"}>
                            {number}
                        </Heading>
                    </div>
                    <p className="step__body">
                        {body}
                    </p>
                </div>
            )
    }
}
