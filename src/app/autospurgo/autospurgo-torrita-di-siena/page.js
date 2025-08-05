import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Torrita di Siena",
    canonical: links.autospurgo["torrita-di-siena"],
});
export default withBaseProps({ 
    title: "Autospurgo Torrita di Siena", 
    locationNames: {label: "Torrita di Siena", href: "torrita-di-siena"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
