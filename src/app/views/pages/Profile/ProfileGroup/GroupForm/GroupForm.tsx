import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Transfer } from 'antd';
import { commonOp } from "@store/common";
import { FormInstance } from "antd/lib/form";
import { useDispatch } from "react-redux";
import { IEmployee, IUserGroup } from "@store/common/typings";
import { TransferRightPanel } from "./TransferRightPanel";

export interface IEmployeeListItem extends IEmployee {
    key: string;
}

interface IProps {
    group: IUserGroup;
    onDiscard: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onSave: (group: IUserGroup) => void;
}

const MAX_LIMIT = 5;

export function GroupForm({onDiscard, onSave, group}: IProps) {
    const dispatch = useDispatch();
    const formRef = React.createRef<FormInstance>();

    const [employeeList, setEmployeeList] = useState<IEmployeeListItem[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [targetKeys, setTargetKeys] = useState<string[]>([]);

    // get employee list
    useEffect(() => {
        const getEmployeeList = async () => {
            try {
                const {payload} = await dispatch<any>(commonOp.fetchEmployees());

                const result = payload.map((employee: IEmployee) => ({
                    // drag and drop require string keys only
                    key: '' + employee.id,
                    ...employee
                }));

                setEmployeeList(result);
            } catch (e) {
                console.log('Something went wrong')
            }
        }
        getEmployeeList();
    }, []);

    // setup group, if we have
    useEffect(() => {
        if (group) {
            formRef.current.setFields([{name: 'name', value: group.name}]);
            setTargetKeys(group.users.map(String));
        }
    }, []);

    const handleChange = (nextTargetKeys: string[]) => {
        setTargetKeys(nextTargetKeys);
    }

    const handleSelectChange = (sourceSelectedKeys: string[]) => {
        if (sourceSelectedKeys.length + targetKeys.length > MAX_LIMIT) {
            return false;
        }
        setSelectedKeys(sourceSelectedKeys);
    }

    const handleCreate = async () => {
        const isValid = await formRef.current.validateFields();
        if (isValid && targetKeys.length) {
            onSave({
                name: formRef.current.getFieldValue('name'),
                users: targetKeys.map(Number)
            });
        }
    };

    const handleDragEnd = ({source, destination}: any) => {
        if (!destination) return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

        const newItems = [...targetKeys];
        const draggedItem = newItems[source.index];
        newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, draggedItem);

        setTargetKeys(newItems);
    }

    const handleRemoveItem = (item: IEmployeeListItem) => {
        const arr = [...targetKeys];

        const ind = targetKeys.findIndex(i => item.key === i);
        if (ind > -1) {
            arr.splice(ind, 1);
        }

        setTargetKeys(arr);
    };

    return <Form ref={formRef} name="control-ref" layout={'vertical'} scrollToFirstError={true} onFinish={handleCreate}>
        <Form.Item name="name" label="Group Name" rules={[{required: true}]}>
            <Input/>
        </Form.Item>
        <Form.Item>
            <Transfer
                dataSource={employeeList}
                titles={['Employee', 'Group']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                render={item => {
                    return <span key={item.id}>{item.last_name} {item.first_name}</span>
                }}
                oneWay
            >
                {
                    ({direction, filteredItems}) => {
                        if (direction === 'left') {
                            // keep custom one for left panel
                            return null;
                        }
                        return <TransferRightPanel
                            onRemoveItem={handleRemoveItem}
                            onDragEnd={handleDragEnd}
                            items={filteredItems}
                        />
                    }}
            </Transfer>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button onClick={onDiscard}>Cancel</Button>
        </Form.Item>
    </Form>
}
