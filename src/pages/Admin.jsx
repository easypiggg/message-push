import { Table } from 'antd';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '学号',
    dataIndex: 'age',
  },
  {
    title: '操作',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default function Admin() {
  return <Table  columns={columns} dataSource={data}>
    
  </Table>
}
