import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Agrigento",
    canonical: links.autospurgo["agrigento"],
});
export default withBaseProps({ 
    title: "Autospurgo Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["agrigento"],
        name: "Agrigento",
    }),
});
