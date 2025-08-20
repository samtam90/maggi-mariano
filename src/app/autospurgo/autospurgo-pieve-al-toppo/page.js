import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Pieve al Toppo",
    canonical: links.autospurgo["pieve-al-toppo"],
});
export default withBaseProps({ 
    title: "Autospurgo Pieve al Toppo", 
    locationNames: {label: "Pieve al Toppo", href: "pieve-al-toppo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
