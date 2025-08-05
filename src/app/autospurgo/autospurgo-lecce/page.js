import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Lecce",
    canonical: links.autospurgo["lecce"],
});
export default withBaseProps({ 
    title: "Autospurgo Lecce", 
    locationNames: {label: "Lecce", href: "lecce"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["lecce"],
        name: "Lecce",
    }),
});
