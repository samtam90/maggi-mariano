import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lucca",
    canonical: links.autospurgo["lucca"],
});
export default withBaseProps({ 
    title: "Autospurgo Lucca", 
    locationNames: {label: "Lucca", href: "lucca"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["lucca"],
        name: "Lucca",
    }),
});
