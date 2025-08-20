import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Radicondoli",
    canonical: links.autospurgo["radicondoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Radicondoli", 
    locationNames: {label: "Radicondoli", href: "radicondoli"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
