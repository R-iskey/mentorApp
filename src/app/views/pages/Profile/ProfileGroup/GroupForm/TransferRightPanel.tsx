import React from 'react';
import { DragDropContext, Draggable, Droppable, DroppableProvided } from "react-beautiful-dnd";
import styles from "../style.module.scss";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { IEmployeeListItem } from "./GroupForm";
import { TransferItem } from "antd/lib/transfer";

interface IProps {
    onDragEnd: any;
    items: TransferItem[];

    onRemoveItem(item: IEmployeeListItem): void;
}

export function TransferRightPanel({onDragEnd, onRemoveItem, items}: IProps) {
    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board">
            {(provided: DroppableProvided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps} className={'ant-transfer-list-content'}>
                    {items.map((item: any, index: number) => (
                        <Draggable draggableId={item.key} key={item.key} index={index}>
                            {provided => (
                                <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={'ant-transfer-list-content-item'}
                                >
                                    <MoreOutlined/>
                                    <span>{item.last_name} {item.first_name}</span>
                                    <span
                                        className={styles.removeAction}
                                        onClick={() => onRemoveItem(item)}>
                                        <DeleteOutlined/>
                                    </span>
                                </li>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    </DragDropContext>
}
