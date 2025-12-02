"use client";

import { Card, Typography } from "antd";
import styles from "./page.module.scss";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className={styles.home}>
      <Card className={styles.card}>
        <Title level={2}>Home Page</Title>
        <Paragraph>
          Đây là giao diện trang chủ
        </Paragraph>
      </Card>
    </div>
  );
}
