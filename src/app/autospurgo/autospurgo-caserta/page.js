import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Caserta",
    canonical: links.autospurgo["caserta"],
});
export default withBaseProps({ 
    title: "Autospurgo Caserta", 
    locationNames: {label: "Caserta", href: "caserta"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["caserta"],
        name: "Caserta",
    }),
});
