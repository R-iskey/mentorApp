import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Step1 from "./Step1";
import { Button, Card, Form, Steps } from "antd";
import Step2 from "./Step2";
import { useDispatch } from "react-redux";
import { routerOp } from "@store/router";
import { FormInstance } from "antd/lib/form";
import { FieldData } from "rc-field-form/lib/interface";
import { commonOp } from "@store/common";

const {Step} = Steps;

const steps = [
    {
        title: 'Personal information',
        content: <Step1/>,
    },
    {
        title: 'Employee information',
        content: <Step2/>,
    }
];

export function Register() {
    const formRef = React.createRef<FormInstance>();
    const dispatch = useDispatch();

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const data = commonOp.getWizardData();
        if (data) {
            formRef.current.setFields(data);
        }
    }, []);

    const next = async () => {
        const isValid = await formRef.current.validateFields();
        if (isValid) {
            setCurrent(current + 1);
        }
    }

    const prev = () => {
        setCurrent(current - 1);
    }

    const getActions = () => {
        const result = [];
        current < steps.length - 1 && result.push(
            <Button type="primary" onClick={next}>Next</Button>
        )
        current === steps.length - 1 && result.push(
            <Button type="primary" onClick={handleFinish}>Done</Button>
        )
        current > 0 && result.push(
            <Button onClick={prev}>Previous</Button>
        )
        return result;
    };

    const handleFieldsChange = (changedFields: FieldData[], allFields: FieldData[]) => {
        commonOp.setWizardData(allFields);
    };

    const handleFinish = async () => {
        const isValid = await formRef.current.validateFields();
        if (isValid) {
            await dispatch(commonOp.fetchLogin());
            dispatch(routerOp.gotoPage('/profile'));
            commonOp.resetWizardData();
        }
    }

    return <div className={styles.registerPage}>
        <Steps current={current}>
            {steps.map(item => (
                <Step key={item.title} title={item.title}/>
            ))}
        </Steps>
        <Card className={styles.registerStep} actions={getActions()}>
            <Form
                ref={formRef}
                name="control-ref"
                layout={'vertical'}
                scrollToFirstError={true}
                onFieldsChange={handleFieldsChange}
            >
                {steps[current].content}
            </Form>
        </Card>
    </div>
}
