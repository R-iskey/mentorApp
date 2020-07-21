import { Button, Card, Empty, List } from "antd";
import React, { useState } from "react";
import { IUserGroup } from "@store/common/typings";
import { GroupForm } from "./GroupForm/GroupForm";
import { useDispatch, useSelector } from "react-redux";
import { commonOp, commonSel } from "@store/common";

export function ProfileGroup() {
    const dispatch = useDispatch()
    const groups = useSelector(commonSel.userGroupsSelector);
    const [newGroup, setNewGroup] = useState<IUserGroup | null>();

    const handleNew = () => {
        setNewGroup({
            name: '',
            users: []
        })
    };

    const handleDiscardForm = () => {
        setNewGroup(null);
    }

    const handleEdit = (index: number) => {
        setNewGroup(groups[index]);
    }

    const handleSave = async (groupData: IUserGroup) => {
        await dispatch(commonOp.postNewGroup(groupData));
        handleDiscardForm();
    };

    return <Card title="Group Info">
        {
            newGroup
                ? <GroupForm onDiscard={handleDiscardForm} group={newGroup} onSave={handleSave}/>
                : !groups.length
                ? <Empty><Button type="primary" onClick={handleNew}>Create Now</Button></Empty>
                : <List
                    itemLayout="horizontal"
                    dataSource={groups}
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <a key="list-loadmore-edit" onClick={() => handleEdit(index)}>Edit</a>
                            ]}
                        ><List.Item.Meta title={item.name}/></List.Item>
                    )}
                />
        }
    </Card>
}
