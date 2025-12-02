"use client";

import { Card } from "antd";
import styles from "./page.module.scss";

export default function HelloPage() {
    return (
        <div className={styles.container}>
            <Card>
                <h1>Hello World</h1>
            </Card>
        </div>
    );
}
