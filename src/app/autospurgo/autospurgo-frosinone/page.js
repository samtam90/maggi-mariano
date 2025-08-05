import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Frosinone",
    canonical: links.autospurgo["frosinone"],
});
export default withBaseProps({ 
    title: "Autospurgo Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["frosinone"],
        name: "Frosinone",
    }),
});
