import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Space, Transfer } from 'antd';
import { commonOp } from "@store/common";
import { FormInstance } from "antd/lib/form";
import styles from "./style.module.scss";
import { DragDropContext, Draggable, Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { useDispatch } from "react-redux";
import { IEmployee } from "@store/common/typings";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";

const MAX_LIMIT = 5;

interface IEmployeeListItem extends IEmployee {
    key: string;
}

export function Groups() {
    const dispatch = useDispatch();

    const formRef = React.createRef<FormInstance>();

    const [employeeList, setEmployeeList] = useState<IEmployeeListItem[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [targetKeys, setTargetKeys] = useState<string[]>([]);

    useEffect(() => {
        const getEmployeeList = async () => {
            try {
                const {payload} = await dispatch<any>(commonOp.fetchEmployees());
                const result = payload.map((employee: IEmployee) => ({
                    key: employee.email,
                    ...employee
                }));
                setEmployeeList(result);
            } catch (e) {
                console.log('Something went wrong')
            }
        }
        getEmployeeList();
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

    const handleCreate = () => {

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

    return <div className={styles.groupPage}>
        <Card title="Group Management">
            <Form ref={formRef} name="control-ref" layout={'vertical'} scrollToFirstError={true}>
                <Form.Item name="groupName" label="Group Name" rules={[{required: true}]}>
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
                        {({
                              direction,
                              filteredItems,
                          }) => {
                            if (direction === 'left') {
                                return null;
                            }
                            return <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="board">
                                    {(provided: DroppableProvided) => (
                                        <ul ref={provided.innerRef} {...provided.droppableProps}
                                            className={'ant-transfer-list-content'}>
                                            {filteredItems.map((item: any, index: number) => (
                                                <Draggable draggableId={item.key} key={item.key} index={index}>
                                                    {provided => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={'ant-transfer-list-content-item'}
                                                        >
                                                            <MoreOutlined/>
                                                            {item.last_name} {item.first_name}
                                                            <DeleteOutlined onClick={() => handleRemoveItem(item)}/>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        }}
                    </Transfer>
                </Form.Item>
                <Form.Item>
                    <Button key='create' type="primary" htmlType="submit" className="login-form-button"
                            onClick={handleCreate}>
                        Create
                    </Button>
                </Form.Item>
            </Form>
            <Space style={{marginTop: 16}}/>
        </Card>
    </div>
}
