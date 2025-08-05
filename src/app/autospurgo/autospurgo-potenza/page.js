import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Potenza",
    canonical: links.autospurgo["potenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Potenza", 
    locationNames: {label: "Potenza", href: "potenza"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["potenza"],
        name: "Potenza",
    }),
});
