import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { Card, CardGroup } from 'react-bootstrap'
import React from "react";
import axios from 'axios';

interface Data {
    id: number;
    name: String;
    address: String;
    email: String;
    phone: String;
    website: String;
}

const Resource: NextPage = () => {

    const defaultPosts:Data[] = [];
    const [data, setData]: [Data[], (data: Data[]) => void]
        = React.useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void]
        = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void]
        = React.useState("");

    React.useEffect(() => {
        axios
            .get('https://femaleperiodsupport.yulinzeng.workers.dev/orgList')
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data);
                setLoading(false);
            })
            .catch(ex => {
                const error =
                    ex.response.status === 404
                        ? "Resource Not found"
                        : "An unexpected error has occurred";
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Resource</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="App">
                <div >
                    <img src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/FindingYourOrganizations.jpg?alt=media&token=6cf9bb88-80f4-4479-849a-474ebb4165ff" className="finding_img"/>
                </div>
                <div className="combo">
                    <div className="scroll-bd">
                        <div data-spy="scroll" data-offset="0" className="scrollspy-example">
                            <ul className="posts">
                                {data && data.map((data) => (
                                    <li key={data.id}>
                                        <Card.Title className="shelter_name">{data.name}</Card.Title>
                                        <br/>
                                        {/*<Card.Text className="shelter-sub">Drop-off information: </Card.Text>*/}
                                        {/*<Card.Text className="shelter_information">{data.address}</Card.Text>*/}
                                        {/*<Card.Text className="shelter_information">*/}
                                        {/*    {data.email != "None" ? (data.email) : ("doesn't have data")}*/}
                                        {/*    /!*{data.email}*!/*/}
                                        {/*</Card.Text>*/}
                                        <table>
                                            <Card.Text className="shelter-information">Address: {data.address}</Card.Text>
                                            <Card.Text className="shelter-information">Website: {data.website}</Card.Text>
                                            <Card.Text className="shelter-information">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.email}</Card.Text>
                                        </table>
                                        <br/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="right-bd">
                        <img src="https://firebasestorage.googleapis.com/v0/b/female-period-support.appspot.com/o/Palms.jpg?alt=media&token=1acd1c54-77f5-4a6f-a942-42e433565b75" className="palms_img"/>
                    </div>
                </div>

                {error && <p className="error">{error}</p>}
            </div>
        </>
    )
}

export default Resource;