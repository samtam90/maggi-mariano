import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castellina in Chianti",
    canonical: links.autospurgo["castellina-in-chianti"],
});
export default withBaseProps({ 
    title: "Autospurgo Castellina in Chianti", 
    locationNames: {label: "Castellina in Chianti", href: "castellina-in-chianti"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
