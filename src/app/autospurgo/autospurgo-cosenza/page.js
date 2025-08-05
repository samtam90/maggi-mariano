import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Cosenza",
    canonical: links.autospurgo["cosenza"],
});
export default withBaseProps({ 
    title: "Autospurgo Cosenza", 
    locationNames: {label: "Cosenza", href: "cosenza"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["cosenza"],
        name: "Cosenza",
    }),
});
