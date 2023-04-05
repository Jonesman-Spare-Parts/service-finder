"use client"
import React from 'react';
import "../../styles/global.css"
import Map from "@/components/Map"
const Page = () => (
    <section className={"flex flex-col justify-between"}>

        <h1 className={"text-2xl"}>Map page</h1>
        <Map />

    </section>
);

export default Page;