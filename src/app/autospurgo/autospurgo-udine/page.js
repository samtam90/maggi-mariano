import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Udine",
    canonical: links.autospurgo["udine"],
});
export default withBaseProps({ 
    title: "Autospurgo Udine", 
    locationNames: {label: "Udine", href: "udine"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["udine"],
        name: "Udine",
    }),
});
