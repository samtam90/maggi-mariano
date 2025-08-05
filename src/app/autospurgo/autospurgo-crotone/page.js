import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Crotone",
    canonical: links.autospurgo["crotone"],
});
export default withBaseProps({ 
    title: "Autospurgo Crotone", 
    locationNames: {label: "Crotone", href: "crotone"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["crotone"],
        name: "Crotone",
    }),
});
