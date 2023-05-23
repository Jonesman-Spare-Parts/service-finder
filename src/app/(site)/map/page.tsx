"use client";
import React, { useEffect, useState } from "react";
import "@/styles/global.css";
import Map from "@/components/Map/Map";
import { getCategories } from "@/sanity/sanity-utils";
import { Category } from "@/types/Category";
import { categoriesArr } from "@/components/CategoryList";

const DEFAULT_CENTER = [4.885742, -1.7503412, 15];

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [filter, setFilter] = useState<string>("");
  useEffect(() => {
    getCategories(filter).then((data) => console.log(data));
    console.log("categories", categories);
  }, [filter]);

  return (
    <div className={"flex flex-col gap-8 justify-between"}>
      <div className={"flex flex-col gap-4"}>
        <h1
          className={
            "text-4xl text-gray-900  dark:text-white capitalize font-bold"
          }
        >
          Services Map
        </h1>
      </div>
      <div className={"  "}>
        <ul className={"flex justify-around mb-4"}>
          {categoriesArr.map((category) => (
            <li
              className={"p-4 flex items-center gap-2 bg-gray-100 rounded-lg"}
            >
              <span>{category.icon}</span>
              {category.name}
            </li>
          ))}
        </ul>
        <Map
          className={""}
          width="800"
          height="400"
          center={DEFAULT_CENTER}
          zoom={15}
        >
          {({ TileLayer, Marker, Popup }: any) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
    </div>
  );
};

export default Page;
