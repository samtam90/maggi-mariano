import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Piacenza",
    canonical: links.autospurgo["piacenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["piacenza"],
        name: "Piacenza",
    }),
});
