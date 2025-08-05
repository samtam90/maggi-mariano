import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Radda in Chianti",
    canonical: links.autospurgo["radda-in-chianti"],
});
export default withBaseProps({ 
    title: "Autospurgo Radda in Chianti", 
    locationNames: {label: "Radda in Chianti", href: "radda-in-chianti"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
