'use client'

import HomeHeader from "@/app/components/homeHeader/HomeHeader";
import HomePreview from "@/app/components/homePreview/HomePreview";
import Ticker from "@/app/components/ticker/Ticker";
import Carousel from "@/app/components/carousel/Carousel";

export default function HomePage () {
    return (
        <>
            <HomeHeader />
            <HomePreview />
            <Ticker />
            <Carousel />
        </>
    )
}