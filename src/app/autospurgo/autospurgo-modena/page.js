import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Modena",
    canonical: links.autospurgo["modena"],
});
export default withBaseProps({ 
    title: "Autospurgo Modena", 
    locationNames: {label: "Modena", href: "modena"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["modena"],
        name: "Modena",
    }),
});
